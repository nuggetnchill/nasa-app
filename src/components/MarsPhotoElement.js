import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { trackPromise } from "react-promise-tracker";

const apiKey = process.env.NASA_KEY;

const MarsPhotoElement = ({ setSelectedImg }) => {
  const [photoData, setPhotoData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const apiLink = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=${apiKey}`;

  const onButtonSubmit = () => {
    const fetchPhoto = async () => {
      const res = await trackPromise(fetch(apiLink));
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    };

    fetchPhoto();
    setSelectedDate(null);
  };

  if (!photoData)
    return (
      <div className='container'>
        <div>Please select a date</div>
        <input
          type='date'
          onChange={(event) => setSelectedDate(event.target.value)}
          dateformat='yyyy/MM/dd'
          min='2012-08-06'
          max={new Date().toISOString().split("T")[0]} //max date to choose is today
        />
        {selectedDate && (
          <button className='btn btn-warning' onClick={onButtonSubmit}>
            Submit
          </button>
        )}
      </div>
    );

  // ACCESSING API data
  const photos = photoData.photos.map((el) => el.img_src);
  const information = photoData.photos[0];

  return (
    <div className='mars-container'>
      <input
        type='date'
        onChange={(event) => setSelectedDate(event.target.value)}
        dateformat='yyyy/MM/dd'
        min='2012-08-06'
      />
      {selectedDate && (
        <button className='btn btn-warning' onClick={onButtonSubmit}>
          Submit
        </button>
      )}
      {photoData.photos.length === 0 && (
        <h1 className='h1'>Sorry no photos were taken on this date 😔 </h1>
      )}

      <h2>Earth Date: {information.earth_date}</h2>
      <h2>
        {" "}
        <a href='https://en.wikipedia.org/wiki/Sol_(day_on_Mars)'>Sol:</a>
        <span> {information.sol}</span>
      </h2>

      <motion.div className='img-wrap' layout>
        {photos.map((photo, i) => {
          return (
            <motion.img
              className='img-fluid'
              alt='heyo'
              src={photo}
              key={i}
              onClick={() => setSelectedImg(photo)}
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarsPhotoElement;
