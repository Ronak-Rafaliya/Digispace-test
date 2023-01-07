import React from "react";
import AirQuality from "./AirQuality";
import Display from "./Display";
import Lighting from "./Lighting";
import Logo from "./Logo";
import Temperature from "./Temperature";
import Audio from "./Audio";

function Home() {
  return (
    <div>
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

export default Home;
