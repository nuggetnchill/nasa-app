/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => (
  <div className='home'>
    <Link className='home-link' to='/nasaphoto'>
      🌌 Photo of the day
    </Link>
    <Link className='home-link' to='/marsphoto'>
      👽 Mars Rover Photo
    </Link>
    <Link className='home-link' to='/isstracker'>
      🛰️ International Space Station
    </Link>
    <Footer />
  </div>
);

export default Home;
