import React from "react";
import { useEffect, useState } from "react";
import { ClapButton } from "@lyket/react";

import NavBar from "../components/NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

const NasaPhoto = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      // console.log(data);
    };
    fetchPhoto();
  }, []);

  if (!photoData) return <div>Loading...</div>;

  return (
    <>
      <NavBar />
      <div className='nasa-photo-container'>
        {photoData.media_type === "image" ? (
          <img className='photo' src={photoData.url} alt={photoData.title} />
        ) : (
          <iframe
            title='space-video'
            src={photoData.url}
            frameBorder='0'
            gesture='media'
            allow='encrypted-media'
            allowFullScreen
            className='photo'
          />
        )}
        <div>
          <h1> {photoData.title} </h1>
          <ClapButton
            id='apod-clap'
            namespace='apod'
            component={ClapButton.themes.Large}
          />
          <p className='copyright'>{photoData.copyright}</p>
          <p className='date'> {photoData.date} </p>
          <p className='explanation'> {photoData.explanation} </p>
        </div>
      </div>
    </>
  );
};

export default NasaPhoto;
