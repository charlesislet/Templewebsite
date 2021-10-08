import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Clustermap.css';
import  templedata from './temples.json';

mapboxgl.accessToken='pk.eyJ1IjoiY2hhcmxlc2lzbGV0IiwiYSI6ImNrcmhzd3hkeTEwanAzMW8wa2Y2NnRpd2gifQ.q-NlWrTaGWetsCC5pMZheA';

function Filtermap() {

	const mapContainer = useRef()
	useEffect(()=>{
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/charlesislet/ckrhsym8739b717k036psucho',
			center:[119.596940, 23.566295],
			zoom: 11
		})

        let temples = [];

        const popup = new mapboxgl.Popup({
            closeButton: false
        });

        const filterEl = document.getElementById('feature-filter');
        const listingEl = document.getElementById('feature-listing');

        function renderListings(features) {
            const empty = document.createElement('p');
            listingEl.innerHTML = '';
            if (features.length) {
            for (const feature of features) {
            const itemLink = document.createElement('a');
            const label = `${feature.properties.name} (${feature.properties.abbrev})`;
            itemLink.href = feature.properties.wikipedia;
            itemLink.target = '_blank';
            itemLink.textContent = label;
            itemLink.addEventListener('mouseover', () => {
            popup
            .setLngLat(feature.geometry.coordinates)
            .setText(label)
            .addTo(map);
        });
            listingEl.appendChild(itemLink);
            }
             

            filterEl.parentNode.style.display = 'block';
            } else if (features.length === 0 && filterEl.value !== '') {
            empty.textContent = 'No results found';
            listingEl.appendChild(empty);
            } else {
            empty.textContent = 'Drag the map to populate results';
            listingEl.appendChild(empty);
             

            filterEl.parentNode.style.display = 'none';
             

            map.setFilter('temple', ['has', 'abbrev']);
            }
            }
             
            function normalize(string) {
            return string.trim().toLowerCase();
            }
            
            function getUniqueFeatures(features, comparatorProperty) {
            const uniqueIds = new Set();
            const uniqueFeatures = [];
            for (const feature of features) {
            const id = feature.properties[comparatorProperty];
            if (!uniqueIds.has(id)) {
            uniqueIds.add(id);
            uniqueFeatures.push(feature);
            }
            }
            return uniqueFeatures;
        }

		map.on('load', ()=>{
			map.addSource('temples', {
				'type': 'vector',
				data : templedata
			})

			map.addLayer({
				'id':'temple',
				'type':'circle',
				'source':'temples',
				'paint':{
					'circle-color': '#4264fb',
                    'circle-radius': 4,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
				}
			})

            map.on('movestart', () => {
                // reset features filter as the map starts moving
                map.setFilter('temple', ['has', 'abbrev']);
            });

            map.on('moveend', () => {
                const features = map.queryRenderedFeatures({ layers: ['temple'] });
                 
                if (features) {
                const uniqueFeatures = getUniqueFeatures(features, 'iata_code');
                // Populate features for the listing overlay.
                renderListings(uniqueFeatures);
                 
                // Clear the input container
                filterEl.value = '';
                 
                // Store the current features in sn `airports` variable to
                // later use for filtering on `keyup`.
                temples = uniqueFeatures;
                }
            });

            map.on('mousemove', 'temple', (e) => {
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = 'pointer';
                 
                // Populate the popup and set its coordinates based on the feature.
                const feature = e.features[0];
                popup
                .setLngLat(feature.geometry.coordinates)
                .setText(
                `${feature.properties.name} (${feature.properties.abbrev})`
                )
                .addTo(map);
            });

            map.on('mouseleave', 'temple', () => {
                map.getCanvas().style.cursor = '';
                popup.remove();
            });

            
            filterEl.addEventListener('keyup', (e) => {
                const value = normalize(e.target.value);
                
                // Filter visible features that match the input value.
                const filtered = [];
                for (const feature of temples) {
                const name = normalize(feature.properties.name);
                const code = normalize(feature.properties.abbrev);
                if (name.includes(value) || code.includes(value)) {
                filtered.push(feature);
                }
                }
                
                // Populate the sidebar with filtered results
                renderListings(filtered);
                
                // Set the filter to populate features into the layer.
                if (filtered.length) {
                map.setFilter('temple', [
                'match',
                ['get', 'abbrev'],
                filtered.map((feature) => {
                return feature.properties.abbrev;
                }),
                true,
                false
                ]);
                }
            });

            renderListings([]);
		
		})
	})
	return(
		<div ref={mapContainer} className='map'></div>
	)
}

export default Filtermap;

