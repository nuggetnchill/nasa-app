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
    <Footer />
  </div>
);

export default Home;
