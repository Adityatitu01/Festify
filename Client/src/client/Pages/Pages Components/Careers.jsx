import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import TimeLineComp from "../../components/ui/Timeline";
import FocusCards from "../../components/ui/FocusCards";

const Careers = () => {
  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Hero Section */}
      <div className="py-20 px-10 md:px-20">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-6">
            Your Next Big Opportunity Awaits
          </h1>
          <p className="text-lg text-teal-400 max-w-2xl mx-auto">
            At Festify, we believe in creating events that make life more
            happening. Join our team and be part of a culture that thrives on
            creativity, collaboration, and growth.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-10 md:px-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:flex-1">
          <h2 className="text-4xl font-bold mb-4 text-yellow-400">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Empowering people through events and creating lasting memories.
          </p>
          <p className="text-gray-400 mb-6">
            Since 2024, we've been on a journey to make the world a more
            #Happening place. From concerts to conferences, we ensure everyone
            experiences the moments they cherish the most.
          </p>
          <blockquote className="text-lg italic font-medium text-teal-400">
            "We succeed when our team succeeds."
          </blockquote>
        </div>
        <div className="lg:flex-1 flex justify-center">
          <Skeleton className="w-[30rem] h-[20rem] rounded-lg shadow-lg bg-gray-800" />
        </div>
      </div>

      {/* Value Section */}
      <div className="bg-gray-900 py-16 px-10 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          What We Stand For
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
          At Festify, our core values define who we are. Innovation, teamwork,
          and an unyielding focus on our people drive us forward.
        </p>
        <TimeLineComp />
      </div>

      {/* Team Culture Section */}
      <div className="py-20 px-10 md:px-20 bg-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Our Vibrant Culture
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Our team isn't just about work—we know how to have fun! From team
            outings to office parties, we foster an environment where everyone
            feels valued and energized.
          </p>
        </div>
        <FocusCards />
      </div>

      {/* Career Perks Section */}
      <div className="bg-gray-900 py-16 px-10 md:px-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-teal-400 mb-6">
            Why Join Festify?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 rounded-lg p-6 text-left">
              <h3 className="text-2xl text-yellow-400 mb-4">Learning Culture</h3>
              <p className="text-gray-400">
                We invest in your growth with resources, mentorship, and
                continuous learning opportunities.
              </p>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6 text-left">
              <h3 className="text-2xl text-yellow-400 mb-4">Work-Life Balance</h3>
              <p className="text-gray-400">
                Enjoy flexible working hours and policies that prioritize your
                well-being.
              </p>
            </div>
            <div className="bg-black border border-gray-800 rounded-lg p-6 text-left">
              <h3 className="text-2xl text-yellow-400 mb-4">Diverse Team</h3>
              <p className="text-gray-400">
                Work with people from different backgrounds who bring unique
                perspectives to the table.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 px-10 bg-gray-900 md:px-20 text-center text-gray-200">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          Ready to Make Your Career Happen?
        </h2>
        <p className="text-lg font-medium text-teal-400 mb-8">
          We're always looking for passionate, innovative individuals. Explore
          our openings and take the first step toward an exciting career.
        </p>
        <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300">
          Explore Open Positions
        </button>
      </div>
    </div>
  );
};

export default Careers;
