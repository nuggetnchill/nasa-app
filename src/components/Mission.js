import React from "react";

const Mission = ({ patch, name, date }) => {
  return (
    <>
      <img src={patch} alt={name} />
      <h1>{name}</h1>
      <h2>{date}</h2>
    </>
  );
};

export default Mission;
