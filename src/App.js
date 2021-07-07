import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import NasaPhoto from "./pages/NasaPhoto";
import MarsPhoto from "./pages/MarsPhoto";
import ISSTracker from "./pages/ISSTracker";
import SpaceXLMissions from "./pages/SpaceXMissions";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    </BrowserRouter>
  );
}

export default App;
