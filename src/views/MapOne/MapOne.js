// https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
// Use Mapbox GL JS in a React app
//

import { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";
/* eslint import/no-webpack-loader-syntax: off */

import HamburgerMenu from "../../components/layout/navigation/HamburgerMenu/HamburgerMenu";
import NavPC from "../../components/layout/navigation/NavPC/NavPC";
// import useWindowDimensions from "../../utils/windowDimensions";

import { setupMap } from "./setupMap";
import { markersModals } from "./markersModals";
import { modals } from "./modals";

import "./MapOne.scss";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWVjaGFuZXllcyIsImEiOiJ6V2F6bmFNIn0.mauWWMuRub6GkCxkc49sTg";

const MapOne = () => {
  // const { height, width } = useWindowDimensions();

  const mapContainer = useRef(null);
  const map = useRef(null);

  // Fitz Roy
  // const [lng, setLng] = useState(-73.0508902);
  // const [lat, setLat] = useState(-49.2740535);

  // Bryce
  // const [lng, setLng] = useState(-112.3183959);
  // const [lat, setLat] = useState(37.573297);

  // Emerald Bay
  // const [lng, setLng] = useState(-120.15983846533709);
  // const [lat, setLat] = useState(38.95397959307656);

  // Desktop Start
  const [lng, setLng] = useState(-120.46122859325533);
  const [lat, setLat] = useState(38.738060959397785);

  // Test Locations
  // const [lng, setLng] = useState(-120.24202219419851);
  // const [lat, setLat] = useState(39.160690302651886);

  const [zoom, setZoom] = useState(15);

  // ————————————————————————————————————o————————————————————————————————————o MAPPIN -->
  // ————————————————————————————————————o MAPPIN —>
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mechaneyes/ckb6f9oyu2j4l1ilayacdz8yy",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("load", () => {
      // ————————————————————————————————————o Setup the Map + Terrain —>
      //
      setupMap(map.current);

      // ————————————————————————————————————o Project Markers + Modals —>
      //
      markersModals(map.current);
      modals(map.current);
    });
  });

  // ————————————————————————————————————o————————————————————————————————————o Tools -->
  // ————————————————————————————————————o Lat+Long of Mouse —>
  // output lat+long of mouse click position to console
  //
  useEffect(() => {
    map.current.on("click", (e) => {
      let latlong =
        '"coordinates": ' +
        JSON.stringify(e.lngLat.wrap())
          .replace('"lng":', "")
          .replace('"lat":', " ")
          .replace("{", "[")
          .replace("}", "]");
      console.log(latlong);
    });

    map.current.on("touchstart", (e) => {
      let latlong =
        '"coordinates": ' +
        JSON.stringify(e.lngLat.wrap())
          .replace('"lng":', "")
          .replace('"lat":', " ")
          .replace("{", "[")
          .replace("}", "]");
      console.log(latlong);
    });
  });

  return (
    <main className="map-one">
      <div className="nav-wrapper">
        <NavPC map={map} />
        <HamburgerMenu map={map} />
      </div>
      <div ref={mapContainer} className="map-container" />
    </main>
  );
};

export default MapOne;
