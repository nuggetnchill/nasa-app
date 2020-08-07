import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import MarsPhoto from "./components/MarsPhoto";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Route exact path='/' component={Home} />
        <Route path='/nasaphoto' component={NasaPhoto} />
        <Route path='/marsphoto' component={MarsPhoto} />
      </div>
    </BrowserRouter>
  );
}

export default App;
