/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import NavBar from "./NavBar";
import Mission from "./Mission";
import DropDown from "./DropDown";

const SpaceXMissions = () => {
  const [launchData, setLaunchData] = useState([]);
  const [active, setActive] = useState(false); //for dropdown toggle

  const api_url = "https://api.spacexdata.com/v4/launches/";
  const getData = async () => {
    const response = await fetch(api_url);
    const dataFile = await response.json();
    const data = dataFile.slice(0, 50); //limiting data length
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

  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <NavBar />
      <button onClick={toggle}>Test</button>

      {launchData.map((el, i) => {
        const patch = el.links.patch.small;
        const name = el.name;
        const details = el.details;

        const rawDate = new Date(el.date_utc);
        const date = `${
          rawDate.getMonth() + 1
        }/${rawDate.getDate()}/${rawDate.getFullYear()}`;

        return (
          <>
            <Mission key={i} patch={patch} name={name} date={date} />
            <DropDown active={active}>
              <h1>{details}</h1>
              <h1>HIIIII</h1>
            </DropDown>
          </>
        );
      })}
    </>
  );
};

export default SpaceXMissions;
