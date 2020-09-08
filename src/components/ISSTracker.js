/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";

const ISSTracker = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
  const getISS = async () => {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;
    setLongitude(longitude);
    setLatitude(latitude);
  };
  getISS();

  return (
    <div>
      <h1>{latitude}</h1>
      <h1>{longitude}</h1>
    </div>
  );
};

export default ISSTracker;
