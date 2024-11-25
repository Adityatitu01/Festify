import React from "react";

export default function GridSmallBackground(props) {
  return (
    <div className="h-[40rem] max-sm:h-[25rem] w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.3] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent text-center bg-gradient-to-b from-yellow-400 to-yellow-600 py-8">
          {props.para}
        </p>
        <p className="text-2xl max-sm:text-sm max-sm:w-10/12 font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-yellow-600 py-8 w-7/12 text-center">
          {props.para2}
        </p>
      </div>
    </div>
  );
}

