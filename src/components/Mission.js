import React, { useState } from "react";
import fallback from "../assets/fallback-logo.png";

const Mission = ({ launch }) => {
  const [active, setActive] = useState(false); //for toggling dropdown

  const patch = launch.links.patch.small;
  const name = launch.name;
  const details = launch.details;
  const youtube_id = launch.links.youtube_id;
  const article = launch.links.article;
  const wikipedia = launch.links.wikipedia;
  const success = launch.success;

  const rawDate = new Date(launch.date_utc);
  const date = `${
    rawDate.getMonth() + 1
  }/${rawDate.getDate()}/${rawDate.getFullYear()}`;

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className='mission'>
      <img
        src={patch ? patch : fallback}
        alt={name + " logo is missing "}
        onClick={toggle}
      />
      <h1 className='mission-name'>{name}</h1>
      <h2 className='mission-date'>{date}</h2>
      {success ? (
        <h3 className='accomplished'>Accomplished</h3>
      ) : (
        <h3 className='failed'>Failed </h3>
      )}

      {/* Popup are */}
      {active ? (
        <div className='mission-backdrop' onClick={toggle}>
          <div className='more-info'>
            {youtube_id && (
              <iframe
                className='video'
                title={name}
                //   width='420'
                // height='315'
                src={`https://www.youtube.com/embed/${youtube_id}`}
                frameBorder='0'
                allowFullScreen
              ></iframe>
            )}
            {details ? (
              <div className='mission-details'>{details}</div>
            ) : (
              <p>Sorry,there is currently no detail about this launch</p>
            )}
            <ul className='links'>
              <li>
                {article && (
                  <a href={article} target='_blank' rel='noopener noreferrer'>
                    Article
                  </a>
                )}
              </li>
              <li>
                {wikipedia && (
                  <a href={wikipedia} target='_blank' rel='noopener noreferrer'>
                    Wikipedia
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Mission;
