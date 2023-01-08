import React from "react";
import Title from "./Title";

const Lighting = () => {
  return (
    <div className="w-full p-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="flex flex-col justify-between h-full p-4 bg-gray/20 rounded-xl">
        <Title title="Lighting" />
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 text-3xl md:text-5xl font-black !leading-none text-primary">
            <p>32</p>
          </div>
          <div className="flex-shrink-0 px-2 py-0.5 text-white rounded-lg bg-secondary font-normal tracking-wider">
            ON
          </div>
          <div className="flex flex-col">
            <p className="text-base font-light text-gray">Total</p>
            <p className="text-3xl font-black text-gray">43</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lighting;
