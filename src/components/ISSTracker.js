/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import issLogo from "../assets/iss.png";

const issIcon = new Icon({
  iconUrl: issLogo,
  iconSize: [200, 100],
  iconAnchor: [100, 50],
});

const ISSTracker = () => {
  const [latitude, setLatitude] = useState(37.6872);
  const [longitude, setLongitude] = useState(-97.3301);

  useEffect(() => {
    const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
    const getISS = async () => {
      const response = await fetch(api_url);
      const data = await response.json();
      const { latitude, longitude } = data;
      setLongitude(longitude);
      setLatitude(latitude);
    };

    getISS();
  }, []);

  return (
    <div>
      <div className='leaflet-container'>
        <Map center={[latitude, longitude]} zoom={3}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker icon={issIcon} position={[latitude, longitude]} />
        </Map>
      </div>
      <h1>{latitude}</h1>
      <h1>{longitude}</h1>
    </div>
  );
};

export default ISSTracker;
