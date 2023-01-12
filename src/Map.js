import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import { Marker, Popup } from 'react-map-gl';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
    const mapContainerRef = React.useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [21.2282, 45.7559],
            zoom: 16.75
        });

        // Add a marker to the map
        new mapboxgl.Marker()
            .setLngLat([21.2282, 45.7559])
            .addTo(map);

        //Customize marker's appearance
        const marker = new mapboxgl.Marker({
            color: '#3bb2d0'
        })
        .setLngLat([21.2282, 45.7559])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML('<h3>Clinica ToothOrDare</h3><p>Strada Coriolan Brediceanu 2, Timișoara 300077</p>'))
        .addTo(map);
        // Clean up on unmount
        return () => map.remove();
    }, []);

    return <div ref={mapContainerRef} className="map-container"/>;
  };
  
  export default Map;
