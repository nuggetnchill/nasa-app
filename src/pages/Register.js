import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Navbar from "../components/NavBar";

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const history = useHistory();

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandle = async (event) => {
    const response = await fetch("http://localhost:3001/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.id) {
      //   loadUser(); create a function to loadUser info
      alert("Welcome on board " + data.name);
      history.push("/");
    } else {
      alert("Unable to register");
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
        <h2>Register</h2>
        <div className='form-group'>
          <input
            required
            className='form-control'
            type='name'
            name='name'
            id='name'
            placeholder='Your Name'
            onChange={onNameChange}
          />
        </div>
        <div className='form-group'>
          <input
            required
            className='form-control'
            type='email'
            name='email-address'
            id='email-address'
            placeholder='Enter email'
            onChange={onEmailChange}
          />
        </div>
        <div className='form-group'>
          <input
            required
            className='form-control'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            onChange={onPasswordChange}
            onKeyDown={onKeyDown}
          />
        </div>
        <button
          type='submit'
          className='btn btn-warning'
          onClick={submitHandle}
        >
          Join now
        </button>
        <div>
          <label>Already have an account?</label>
          <Link to='/login' className='text-warning'>
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
