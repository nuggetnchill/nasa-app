import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <img alt='yup' className='space' src={require("../assets/bottom.jpg")} />
      <a
        href='https://github.com/nuggetnchill/nasa-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          alt='github'
          className='github'
          src={require("../assets/github.png")}
        />
      </a>
      <p>
        made by{" "}
        <a
          href='https://just1n.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='hover-reveal'
        >
          Justin
        </a>
      </p>
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/register'>Register</Link>
    </div>
  );
};

export default Footer;
