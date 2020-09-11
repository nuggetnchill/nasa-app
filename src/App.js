import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import MarsPhoto from "./components/MarsPhoto";
import ISSTracker from "./components/ISSTracker";
import SpaceXLMissions from "./components/SpaceXMissions";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Route exact path='/' component={Home} />
        <Route path='/nasaphoto' component={NasaPhoto} />
        <Route path='/marsphoto' component={MarsPhoto} />
        <Route path='/isstracker' component={ISSTracker} />
        <Route path='/missions' component={SpaceXLMissions} />
      </div>
    </BrowserRouter>
  );
}

export default App;
