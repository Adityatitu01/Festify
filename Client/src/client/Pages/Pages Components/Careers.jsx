import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import TimeLineComp from "../../components/ui/Timeline";
import FocusCards from "../../components/ui/FocusCards";

const Careers = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className=" py-20 px-10 md:px-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">
            Join Us on a Happening Journey
          </h1>
          <p className="text-lg text-teal-600">
            Challenge your limits. Meet awesome people. Find your *ikigai*.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-10 md:px-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:flex-1">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            We're on a Mission of
          </h2>
          <p className="text-xl font-medium text-gray-600 mb-2">
            Making the world #Happening
          </p>
          <p className="text-gray-700 mb-6">
            In 2024, Festify began when we realized the immense positive impact
            events can create. Ever since, our mission has been simple: ensuring
            people never miss out on the events they love.
          </p>
          <blockquote className="text-lg italic font-medium text-teal-600">
            "We grow when people working with us grow."
          </blockquote>
        </div>
        <div className="lg:flex-1 flex justify-center">
          <Skeleton className="w-[30rem] h-[20rem] rounded-lg shadow-lg bg-gray-300" />
        </div>
      </div>

      {/* Value Section */}
      <div className="bg-gray-50 py-16 px-10 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          What Drives Us
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          At Festify, we are passionate, innovative, and always on the move.
          Here are some things we value:
        </p>
        <TimeLineComp />
      </div>

      {/* Team Culture Section */}
      <div className="py-20 px-10 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            We Can't Stay Quiet for Long
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            We need fuel to work! And our fuel is food, trips, and parties.
          </p>
        </div>
        <FocusCards />
      </div>

      {/* Call to Action Section */}
      <div className="b py-20 px-10 md:px-20 text-center text-teal-600">
        <h2 className="text-4xl font-bold mb-6">
          Looking for a Happening Career?
        </h2>
        <p className="text-lg font-medium mb-8">
          We are also looking for growth-oriented individuals! If you're the
          type to deliver “x+y” when asked for “x,” you might just be the person
          we're looking for.
        </p>
        <button className="bg-amber-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 transition duration-300">
          Explore Open Positions
        </button>
      </div>
    </div>
  );
};

export default Careers;
