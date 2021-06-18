import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiandhbGRlbjIwMjEiLCJhIjoiY2txMWFuMDM1MGN2cjJ5czU2eXR0Y3lzMSJ9.wSPcTziqlmDjSSFEE8Ks0Q';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
      useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });
      return (
    
      <div ref={mapContainer} className="map__container mapboxgl-map" />
   
  );
}