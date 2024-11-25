import React from "react";
import { useNavigate } from "react-router-dom";

export default function EventManagementDemo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-yellow-400">
            Simplify Your Event Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Whether you’re managing events, exploring new ones, or looking to participate,
            we provide all the tools you need to make it seamless.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Feature 1: Manage Events */}
          <div className="bg-gray-700 text-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <span className="text-teal-400 text-3xl">📋</span>
            </div>
            <h2 className="text-xl font-bold text-teal-400 mb-4 text-center">
              Manage Your Events
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed text-center">
              Plan and organize your events effortlessly with our intuitive tools. From scheduling
              to managing attendees, we make event management stress-free.
            </p>
          </div>

          {/* Feature 2: Explore Events */}
          <div className="bg-gray-700 text-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <span className="text-yellow-400 text-3xl">🌟</span>
            </div>
            <h2 className="text-xl font-bold text-yellow-400 mb-4 text-center">
              Explore Exciting Events
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed text-center">
              Discover a wide range of events happening near you or online. Find experiences tailored
              to your interests and passions, all in one place.
            </p>
          </div>

          {/* Feature 3: Participate */}
          <div className="bg-gray-700 text-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <div className="flex items-center justify-center mb-4">
              <span className="text-teal-400 text-3xl">🎭</span>
            </div>
            <h2 className="text-xl font-bold text-teal-400 mb-4 text-center">
              Participate and Engage
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed text-center">
              Register and take part in events you love. Network with others, share experiences, and
              make memories that last a lifetime.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/eventForYou")}
            className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition transform duration-300">
            Get Started
          </button>
          <button
            onClick={() => navigate("/about")}
            className="ml-4 px-8 py-3 bg-teal-500 text-white font-bold rounded-lg shadow-lg hover:bg-teal-600 hover:scale-105 transition transform duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 text-center text-gray-400 text-sm">
        <p className="mb-4">
          Designed to help you connect with the world. Create, explore, and participate in unforgettable events. Let’s make your vision a reality.
        </p>
        <p className="text-gray-500">
          Created with ❤️ by Festify Team
        </p>
      </div>
    </div>
  );
}
