import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error = ({ setShowNavAndFooter }) => {
  useEffect(() => {
    if (setShowNavAndFooter) {
      setShowNavAndFooter(false);
    }
    return () => {
      if (setShowNavAndFooter) {
        setShowNavAndFooter(true);
      }
    };
  }, [setShowNavAndFooter]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Animated 404 Text */}
      <h1 className="text-9xl font-bold text-center tracking-widest glow-effect">
        404
      </h1>
      <p className="text-xl md:text-2xl mt-4 font-medium animate-fade-in text-gray-300 text-center">
        Uh-oh! We can't find the page you're looking for.
      </p>

      {/* Animated Icon */}
      <div className="relative mt-8 w-64 h-64 flex justify-center items-center">
        <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 opacity-20 animate-pulse"></div>
        <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-gray-700 to-gray-800"></div>
        <FaExclamationTriangle
          size={64}
          className="text-yellow-400 animate-bounce-slow z-10"
        />
      </div>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-10 px-8 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-black rounded-lg text-lg font-semibold shadow-lg hover:shadow-2xl hover:scale-110 transform transition duration-300 ease-in-out"
      >
        Take Me Home
      </Link>
    </div>
  );
};

export default Error;
