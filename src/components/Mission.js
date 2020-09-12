import React, { useState } from "react";

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
      <img src={patch} alt={name} onClick={toggle} />
      <h1>{name}</h1>
      <span>
        {success ? (
          <h3 className='accomplished'>(Accomplished)</h3>
        ) : (
          <h3 className='failed'>(Failed) </h3>
        )}
      </span>
      <h2>{date}</h2>
      {active ? (
        <div className='more-info'>
          <h3>{details}</h3>
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
          {youtube_id && (
            <iframe
              title={name}
              width='420'
              height='315'
              src={`https://www.youtube.com/embed/${youtube_id}`}
              frameBorder='0'
              allowFullScreen
            ></iframe>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Mission;
