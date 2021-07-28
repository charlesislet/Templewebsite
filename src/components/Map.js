import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as templeDate from "./temples.json";
import pic1 from '../Image/temple.jpg';

export default function Mapp() {
  const [viewport, setViewport] = useState({
    latitude: 23.572064,
    longitude: 119.570085,
    width: "150vw",
    height: "100vh",
    zoom: 13
  });
  const [selectedTemple, setSelectedTemple] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedTemple(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken= "pk.eyJ1IjoiY2hhcmxlc2lzbGV0IiwiYSI6ImNrcmhzd3hkeTEwanAzMW8wa2Y2NnRpd2gifQ.q-NlWrTaGWetsCC5pMZheA"
        mapStyle="mapbox://styles/charlesislet/ckrhsym8739b717k036psucho"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {templeDate.features.map(temple => (
          <Marker
            key={temple.properties.Temple_ID}
            latitude={temple.geometry.coordinates[1]}
            longitude={temple.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedTemple(temple);
              }}
            >
              <img src={pic1} alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedTemple ? (
          <Popup
            latitude={selectedTemple.geometry.coordinates[1]}
            longitude={selectedTemple.geometry.coordinates[0]}
            onClose={() => {
              setSelectedTemple(null);
            }}
          >
            <div>
              <h2>{selectedTemple.properties.NAME}</h2>
              <p>{selectedTemple.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}