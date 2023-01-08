import React from "react";
import Title from "./Title";

const Display = () => {
  return (
    <div className="w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="flex flex-col justify-between h-full p-4 bg-gray/20 rounded-xl">
        <Title title="Displays" />
        <div className="flex items-start divide-x divide-gray/30">
          <div className="flex-shrink-0 text-3xl md:text-5xl font-black !leading-none text-primary pr-2">
            <p>
              10<span className="text-2xl font-bold">/ 16</span>
            </p>
          </div>
          <div className="flex flex-col pl-2 text-left">
            <p className="text-base font-light text-gray">On Time</p>
            <p className="text-2xl font-black text-darkgray/60">00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
