import React from "react";
import { useState } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

const MarsPhotoElement = () => {
  const [photoData, setPhotoData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const apiLink = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=${apiKey}`;

  const onButtonSubmit = () => {
    const fetchPhoto = async () => {
      const res = await fetch(apiLink);
      const data = await res.json();
      setPhotoData(data);
    };

    fetchPhoto();
    console.log("submit clicked");
  };

  if (!photoData)
    return (
      <>
        <div>Please select a date</div>
        <input
          type='date'
          onChange={(event) => setSelectedDate(event.target.value)}
          dateformat='yyyy/MM/dd'
          min='2012-08-06'
        />
        <button onClick={onButtonSubmit}>Submit</button>
      </>
    );

  const photos = photoData.photos.map((el) => el.img_src);

  return (
    <>
      <input
        type='date'
        onChange={(event) => setSelectedDate(event.target.value)}
        dateformat='yyyy/MM/dd'
        min='2012-08-06'
      />
      <button onClick={onButtonSubmit}>Submit</button>
      {photos.map((photo, i) => {
        return <img alt='whatever' src={photo} key={i} />;
      })}
    </>
  );
};

export default MarsPhotoElement;
