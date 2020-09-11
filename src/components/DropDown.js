import React from "react";

const DropDown = ({ active, children }) => {
  return <div>{active ? <div>{children}</div> : null}</div>;
};

export default DropDown;
