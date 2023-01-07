import React from "react";
import "./App.css";
import AirQuality from "./Components/AirQuality";
import Temperature from "./Components/Temperature";
import Audio from "./Components/Audio";
import Display from "./Components/Display";
import Lighting from "./Components/Lighting";
import Logo from "./Components/Logo";

function App() {
  return (
    <div className="App">
      <div className="container px-4 mx-auto overflow-hidden md:px-0">
        <div className="py-10">
          <Logo />
        </div>
        <div className="flex flex-wrap justify-center -m-3">
          <AirQuality />
          <Temperature />
          <Audio />
          <Display />
          <Lighting />
        </div>
      </div>
    </div>
  );
}

export default App;
