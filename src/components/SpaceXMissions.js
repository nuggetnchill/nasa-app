/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import NavBar from "./NavBar";
import Mission from "./Mission";

const SpaceXMissions = () => {
  const [launchData, setLaunchData] = useState([]);

  const api_url = "https://api.spacexdata.com/v4/launches/";
  const getData = async () => {
    const response = await fetch(api_url);
    const dataFile = await response.json();
    const data = dataFile.reverse().slice(50); //limiting data length
    setLaunchData(data);
  };

  //   let allRockets = [];
  //   let allPatches = [];
  //   launchData.map((element) => {
  //     const { name, links } = element;
  //     const patch = links.patch.small;
  //     allRockets = [...allRockets, name];
  //     allPatches = [...allPatches, patch];
  //   });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />
      <div className='missions-container'>
        {launchData.map((launch, i) => {
          return <Mission launch={launch} key={i} />;
        })}
      </div>
    </>
  );
};

export default SpaceXMissions;
