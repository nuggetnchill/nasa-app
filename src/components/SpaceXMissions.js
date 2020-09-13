/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ClapButton } from "@lyket/react";

import NavBar from "./NavBar";
import Mission from "./Mission";

import "./SpaceXMissions.scss";
import Logo from "../assets/spacex-logo.png";

const SpaceXMissions = () => {
  const [launchData, setLaunchData] = useState([]);

  const api_url = "https://api.spacexdata.com/v4/launches/";
  const getData = async () => {
    const response = await fetch(api_url);
    const dataFile = await response.json();
    const data = dataFile; //limiting/sort data length .reverse().slice(50)
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
      <div className='spacex-container'>
        <div className='hero-img'>
          <div className='hero-logo'>
            <img alt='spacex logo' src={Logo} />
          </div>
        </div>
        <div className='spacex-clap'>
          <ClapButton
            id='spacex-clap'
            namespace='spacex'
            component={ClapButton.themes.Large}
          />
        </div>
        <div className='missions-container'>
          {launchData.map((launch, i) => {
            return <Mission launch={launch} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SpaceXMissions;
