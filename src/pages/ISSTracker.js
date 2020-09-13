/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import issLogo from "../assets/iss.png";

import NavBar from "../components/NavBar";

const issIcon = new Icon({
  iconUrl: issLogo,
  iconSize: [200, 100],
  iconAnchor: [100, 50],
});

const ISSTracker = () => {
  const [latitude, setLatitude] = useState(37.6872);
  const [longitude, setLongitude] = useState(-97.3301);
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
    const getISS = async () => {
      const response = await fetch(api_url);
      const data = await response.json();
      const { latitude, longitude, velocity } = data;
      setLongitude(longitude);
      setLatitude(latitude);
      setVelocity(velocity);
    };

    getISS().catch((error) => {
      console.log("UHHHH WHAT HAPPENED? " + error);
    });

    setInterval(getISS, 1000);
  }, []);

  return (
    <div>
      <NavBar />
      <div className='leaflet-container'>
        <Map center={[latitude, longitude]} zoom={3}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker icon={issIcon} position={[latitude, longitude]} />
        </Map>
      </div>
      <div className='iss-info'>
        <h1>International Space Station Real Time Location</h1>
        <h2>
          Latitude: {latitude.toFixed(2)}°
          <span> | Longitude: {longitude.toFixed(2)}°</span>
          <span> | Velocity: {velocity.toFixed(2)} Km/h</span>
        </h2>
      </div>
    </div>
  );
};

export default ISSTracker;
