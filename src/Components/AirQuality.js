import React from "react";
import Title from "./Title";

const AirQuality = () => {
  return (
    <div className="w-full p-3 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="p-4 bg-gray/20 rounded-xl">
        <Title title="Air Quality" />
        <div className="flex space-x-3">
          <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 md:w-24 md:h-24 p-2 text-4xl md:text-5xl font-black !leading-none text-white rounded-full bg-secondary">
            <p>72</p>
          </div>
          <div className="flex flex-col justify-between divide-y divide-gray/30">
            <div className="flex pb-2 space-x-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-current h-7 w-7 text-secondary"
                >
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </span>
              <span className="text-4xl font-black text-gray">93</span>
            </div>
            <div className="flex pt-2 space-x-1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-current h-7 w-7 text-yellow"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </span>
              <span className="text-4xl font-black text-gray">61</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
