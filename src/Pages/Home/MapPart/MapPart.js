import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl-style-switcher/styles.css";
import "./MapPart.css";
import { useSelector } from "react-redux";


const MapPart = () => {
const [longitude,setLongitude]=useState(90.399452);
const [latitude,setLatitude]=useState(23.777176);


  const place=(useSelector((state) => state.places.place));
  
    
      console.log(longitude,latitude);
      
      useEffect(()=>{
        setLongitude(place?.longitude)
        setLatitude(place?.latitude)

      },[place])
    
  
  mapboxgl.accessToken =process.env.REACT_APP_MAP_BOX_GL_ACCESS_TOKEN;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v9",
      center: [longitude, latitude ],
      
      zoom: 12,
    });

    map.addControl(new mapboxgl.FullscreenControl(),'top-left');
    map.addControl(new mapboxgl.NavigationControl(),'top-left');
    new mapboxgl.Marker({color: 'blue'})
                .setLngLat([longitude, latitude])
                .addTo(map)
  }, [place]);
  return (
    <>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    </>
  );
};

export default MapPart;
