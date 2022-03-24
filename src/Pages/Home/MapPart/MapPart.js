import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl-style-switcher/styles.css";
import "./MapPart.css";


const MapPart = () => {
  mapboxgl.accessToken =process.env.REACT_APP_MAP_BOX_GL_ACCESS_TOKEN;
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v9",
      center: [-122.4194, 37.7788],
      zoom: 12,
    });
    map.addControl(new mapboxgl.FullscreenControl(),'top-left');
    map.addControl(new mapboxgl.NavigationControl(),'top-left');
  }, []);
  return (
    <>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    </>
  );
};

export default MapPart;
