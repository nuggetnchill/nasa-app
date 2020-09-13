/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Link } from "react-router-dom";
import { LikeButton } from "@lyket/react";

import Footer from "../components/Footer";
import Card from "../components/Card";

const Home = () => (
  <>
    <div className='home'>
      <LikeButton
        id='how-to-reduce-footprint'
        namespace='otter-space-home'
        component={LikeButton.themes.Twitter}
      />
      <p className='hero-title'>
        Welcome to Otter Space
        <br />
        Leave a ❤️ to let me know you were here.
      </p>
      <Card />
      {/* <Link className='home-link' to='/marsphoto'>
        👽 Mars Rover Photo
      </Link>
      <Link className='home-link' to='/nasaphoto'>
        🌌 Photo of the day
      </Link>
      <Link className='home-link' to='/isstracker'>
        🛰️ International Space Station
      </Link>
      <Link className='home-link' to='/missions'>
        🚀 SpaceX Missions
      </Link> */}
      <Footer />
    </div>
  </>
);

export default Home;
