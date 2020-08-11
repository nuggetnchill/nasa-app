import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <img alt='yup' className='space' src={require("../assets/bottom.jpg")} />
      <a href='https://github.com/nuggetnchill'>
        <img
          alt='github'
          className='github'
          src={require("../assets/github.png")}
        />
      </a>
    </div>
  );
};

export default Footer;
