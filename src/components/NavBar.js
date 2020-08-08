import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <ul>
        <Link className='link' to='/'>
          🏠 Home
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
