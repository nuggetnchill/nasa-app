import React from "react";
import { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

const MarsPhotoElement = () => {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const res = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-7-5&api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    };
    fetchPhoto();
  }, []);

  if (!photoData) return <div>Loading...</div>;

  const photoList = photoData.photos;
  const photos = photoList.map((el) => el.img_src);

  return (
    <>
      {photos.map((photo) => {
        return <img alt='whatever' src={photo} />;
      })}
    </>
  );
};

export default MarsPhotoElement;
