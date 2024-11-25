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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-indigo-50">
      {/* Animated 404 Text */}
      <h1 className="text-8xl font-bold text-center tracking-wide text-yellow-500 animate-fade-in-up">
        Oops!
      </h1>
      <p className="text-2xl mt-4 font-medium animate-fade-in text-indigo-300 text-center max-w-xl mx-auto">
        It seems you've taken a wrong turn. The page you're looking for doesn't exist. But don’t worry, we’ve got you covered!
      </p>

      {/* Animated Icon */}
      <div className="relative mt-8 w-72 h-72 flex justify-center items-center animate-slide-in">
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-yellow-400 to-indigo-500 opacity-20 animate-pulse"></div>
        <div className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-gray-700 to-gray-800"></div>
        <FaExclamationTriangle
          size={72}
          className="text-yellow-400 animate-bounce z-10"
        />
      </div>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-12 px-10 py-4 bg-gradient-to-r from-yellow-500 to-indigo-600 text-black rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-500 ease-out"
      >
        Take Me Home
      </Link>
    </div>
  );
};

export default Error;
