import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Map.css';
import * as templedata from './temples.json';

mapboxgl.accessToken='pk.eyJ1IjoiY2hhcmxlc2lzbGV0IiwiYSI6ImNrcmhzd3hkeTEwanAzMW8wa2Y2NnRpd2gifQ.q-NlWrTaGWetsCC5pMZheA';

function Mapp() {

	const mapContainer = useRef()
	useEffect(()=>{
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/charlesislet/ckrhsym8739b717k036psucho',
			center:[119.596940, 23.566295],
			zoom: 11
		})

		map.on('load', ()=>{
			map.addSource('temples', {
				'type': 'geojson',
				cluster: true,
				clusterMaxZoom: 14, 
				clusterRadius: 50,
				'data' : 'https://raw.githubusercontent.com/charlesislet/Templewebsite/master/src/components/temples.json'
			})

			map.addLayer({
				'id':'clusters',
				'type':'circle',
				'source':'temples',
				'filter': ['has', 'point_count'],
				'paint':{
					'circle-color': [
						'step',
						['get', 'point_count'],
						'#51bbd6',
						100,
						'#f1f075',
						750,
						'#f28cb1'
						],
						'circle-radius': [
						'step',
						['get', 'point_count'],
						20,
						100,
						30,
						750,
						40
						]
				}
			})
			map.addLayer({
				'id': 'cluster-count',
				'type': 'symbol',
				'source': 'temples',
				'filter': ['has', 'point_count'],
				'layout': {
				'text-field': '{point_count_abbreviated}',
				'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
				'text-size': 12
				}
			});
			map.addLayer({
				'id': 'unclustered-point',
				'type': 'circle',
				'source': 'temples',
				'filter': ['!', ['has', 'point_count']],
				'paint': {
				'circle-color': '#11b4da',
				'circle-radius': 4,
				'circle-stroke-width': 1,
				'circle-stroke-color': '#fff'
				}
			});
			map.on('click', 'clusters', function (e) {
				var features = map.queryRenderedFeatures(e.point, {
				layers: ['clusters']
				});
				var clusterId = features[0].properties.cluster_id;
				map.getSource('temples').getClusterExpansionZoom(
				clusterId,
				function (err, zoom) {
				if (err) return;
				 
				map.easeTo({
				center: features[0].geometry.coordinates,
				zoom: zoom
				});
				}
				);
			});
			map.on('click', 'unclustered-point', function (e) {
				var coordinates = e.features[0].geometry.coordinates.slice();
				var name = e.features[0].properties.name;
				 
				new mapboxgl.Popup()
				.setLngLat(coordinates)
				.setHTML(
					name
				)
				.addTo(map);
			});
			map.on('mouseenter', 'clusters', function () {
				map.getCanvas().style.cursor = 'pointer';
			});
			map.on('mouseleave', 'clusters', function () {
				map.getCanvas().style.cursor = '';
			});
			map.on('mouseenter', 'unclustered-point', function () {
				map.getCanvas().style.cursor = 'pointer';
			});
			map.on('mouseleave', 'unclustered-point', function () {
				map.getCanvas().style.cursor = '';
			});
		})
	})
	return(
		<div ref={mapContainer} className='map'></div>
	)
}

export default Mapp;

