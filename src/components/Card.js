import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";

const Card = () => {
  return (
    <section className='card-list'>
      <article className='card'>
        <header className='card-header'>
          <Link to='/marsphoto'>
            <h1>👽</h1>
            <h2>
              Mars Rover
              <br /> Photo
            </h2>
          </Link>
          <p>
            Check out these photos taken by Mars Rover to see if there are any
            aliens on Mars.
          </p>
        </header>
      </article>

      <article className='card'>
        <header className='card-header'>
          <Link to='/nasaphoto'>
            <h1>🌌</h1>
            <h2>Astronomy Photo</h2>
          </Link>
          <p>
            Everyday you get to learn about something different, comeback for
            more.
          </p>
        </header>
      </article>

      <article className='card'>
        <header className='card-header'>
          <h1>🛰️</h1>
          <Link to='/isstracker'>
            <h2>
              Intl.
              <br /> Space Station Tracker
            </h2>
          </Link>
          <p>Find out where the International Space Station is in real time.</p>
        </header>
      </article>

      <article className='card'>
        <header className='card-header'>
          <Link to='/missions'>
            <h1>🚀</h1>
            <h2>SpaceX Missions</h2>
          </Link>
          <p>
            A collection of SpaceX attempts to launch cylindrical projectiles by
            the combustion of their contents.
          </p>
        </header>
      </article>
    </section>
  );
};

export default Card;
