import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className='home'>
    <Link className='home-link' to='/nasaphoto'>
      🌌 Photo of the day
    </Link>
    <Link className='home-link' to='/marsphoto'>
      👽 Mars Rover Photo
    </Link>
  </div>
);

export default Home;
