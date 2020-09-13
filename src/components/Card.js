import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";

const Card = () => {
  return (
    <section className='card-list'>
      <article className='card'>
        <Link to='/marsphoto'>
          <header className='card-header'>
            <h2>👽</h2>
            <h2>
              Mars Rover
              <br /> Photo
            </h2>
            <p>
              Check out these photos taken by Mars Rover to see if there are any
              aliens on Mars.
            </p>
          </header>
        </Link>
      </article>

      <article className='card'>
        <Link to='/nasaphoto'>
          <header className='card-header'>
            <h2>🌌</h2>
            <h2>Astronomy Photo</h2>
            <p>
              Everyday you get to learn about something different, comeback for
              more.
            </p>
          </header>
        </Link>
      </article>

      <article className='card'>
        <Link to='/isstracker'>
          <header className='card-header'>
            <h2>🛰️</h2>
            <h2>
              Intl.
              <br /> Space Station Tracker
            </h2>
            <p>
              Find out where the International Space Station is in real time.
            </p>
          </header>
        </Link>
      </article>

      <article className='card'>
        <Link to='/missions'>
          <header className='card-header'>
            <h2>🚀</h2>
            <h2>SpaceX Missions</h2>
            <p>
              A collection of SpaceX attempts to launch cylindrical projectiles
              by the combustion of their contents.
            </p>
          </header>
        </Link>
      </article>
    </section>
  );
};

export default Card;
