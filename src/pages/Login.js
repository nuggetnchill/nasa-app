import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Navbar from "../components/NavBar";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const history = useHistory();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandle = async (event) => {
    const response = await fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const users = await response.json();
    if (users.id) {
      alert("Welcome back " + users.name);
      //   loadUser(); create a function to loadUser info
      history.push("/");
    } else {
      alert("Hmmm, wrong email or password?");
    }
  };

  //event listener for 'Enter' key
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      submitHandle();
    }
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <h2>Sign In</h2>
        <div className='form-group'>
          <input
            className='form-control'
            type='email'
            name='email-address'
            id='email-address'
            placeholder='Enter email'
            onChange={onEmailChange}
            onKeyDown={onKeyDown}
          />
        </div>
        <div className='form-group'>
          <input
            className='form-control'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            onChange={onPasswordChange}
            onKeyDown={onKeyDown}
          />
        </div>
        {/* Implementing Remember me function later */}
        {/* <div className='form-check'>
        <input type='checkbox' className='form-check-input' id='remember-me' />
        <label class='form-check-label' for='remember-me'>
          Remember me
        </label>
      </div> */}
        <button
          type='submit'
          className='btn btn-primary'
          onClick={submitHandle}
        >
          Submit
        </button>
        <div>
          <label>Don't have an account?</label>
          <Link to='/register'>Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
