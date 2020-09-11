import React from "react";

const Mission = ({ patch, name }) => {
  return (
    <>
      <img src={patch} />
      <h1>{name}</h1>
    </>
  );
};

export default Mission;
