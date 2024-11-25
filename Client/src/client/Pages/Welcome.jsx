import React, { useEffect, useState } from "react";
import { FaRegCalendar, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { FaPlaceOfWorship } from "react-icons/fa6";
import { MdOutlinePeopleAlt, MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import axios from "axios";
import Contact from "./Pages Components/Contact";
import Hero from "../components/ui/BackgroundBeam";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth-context";

const PIXABAY_API_KEY = "27481169-20e77ec7c6401f3d4e15ad82e";
const DEFAULT_EVENT_IMAGE = "https://via.placeholder.com/300?text=Event";

const Welcome = () => {
  const { events } = useAuth(); // Access events from context
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null); // Tracks the selected event for "View More"

  const fetchEventImages = async () => {
    try {
      const enhancedEvents = await Promise.all(
        events.map(async (event) => {
          try {
            const response = await axios.get(
              `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
                event.eventName
              )}&image_type=photo&orientation=horizontal`
            );
            const image =
              response.data.hits?.length > 0
                ? response.data.hits[0]?.webformatURL
                : DEFAULT_EVENT_IMAGE;
            return { ...event, image };
          } catch (error) {
            console.error(
              `Error fetching image for "${event.eventName}":`,
              error.message
            );
            return { ...event, image: DEFAULT_EVENT_IMAGE };
          }
        })
      );
      setEventData(enhancedEvents);
    } catch (error) {
      console.error("Error processing events:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (events && events.length > 0) {
      fetchEventImages();
    } else {
      setLoading(false);
    }
  }, [events]);

  const featuresList = [
    {
      id: 1,
      icon: <FaRegCalendar className="text-3xl text-blue-600" />,
      title: "Easy Scheduling",
      details: "Effortlessly plan and schedule your events with our intuitive calendar interface.",
    },
    {
      id: 2,
      icon: <MdOutlinePeopleAlt className="text-3xl text-green-600" />,
      title: "Attendee Management",
      details: "Keep track of your guests, send invitations, and manage RSVPs all in one place.",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className="text-3xl text-red-600" />,
      title: "Venue Coordination",
      details: "Find and book the perfect venue for your event with our extensive network of partners.",
    },
    {
      id: 4,
      icon: <MdOutlineSignalCellularAlt className="text-3xl text-purple-600" />,
      title: "Analytics & Reporting",
      details: "Gain valuable insights with comprehensive event analytics and customizable reports.",
    },
  ];

  const testimonials = [
    {
      name: "Jag Jeevan",
      role: "Event Planner",
      quote: "This platform has revolutionized the way I manage events. It's a game-changer!",
    },
    {
      name: "Aditya Tiwari",
      role: "Conference Organizer",
      quote: "The ease of use and powerful features make this the go-to solution for all our event needs.",
    },
    {
      name: "Hujaifa Ahmed",
      role: "Finance Manager",
      quote: "I can't imagine planning weddings without this tool. It's become an essential part of my business.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
{/* Events Section */}
<section className="w-full pt-16 bg-gradient-to-r from-purple-100 to-yellow-100 text-gray-200 transition-all duration-500 ease-in-out">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center text-teal-600">
    Events
  </h2>
  {loading ? (
    <p className="text-center text-gray-400 text-lg mt-6">Loading events...</p>
  ) : events && events.length === 0 ? (
    <div className="text-center text-gray-400 text-xl font-medium mt-10">
      No events found.
    </div>
  ) : (
    <div className="grid gap-8 py-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 sm:px-8 lg:px-60">
      {eventData.slice(0, 8).map((event) => (
        <div
          key={event.id}
          className="border border-gray-700 shadow-lg rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl hover:-translate-y-2 transform transition-transform duration-300"
        >
          <div className="relative w-full h-48 overflow-hidden group">
            <img
              src={event.image}
              alt={event.eventName}
              className="w-full h-full object-cover group-hover:scale-105 transform transition-transform duration-300 rounded-t-xl"
              onError={(e) => {
                e.target.src = DEFAULT_EVENT_IMAGE;
              }}
            />
          </div>
          <div className="p-6">
            <h2 className="text-lg font-semibold text-white truncate mb-2">
              {event.eventName}
            </h2>
            <p className="text-sm text-gray-400 mb-1">
              <FaMapMarkerAlt className="inline-block text-red-500 mr-2" />
              {event.eventLocation}
              <br />
              <FaPlaceOfWorship className="inline-block text-green-500 mr-2" />
              {event.eventPlace}
            </p>
            <p className="text-sm text-gray-400 mb-3">
              <FaRegCalendar className="inline-block text-blue-400 mr-2" />
              {new Date(event.eventDate).toLocaleDateString()}
            </p>
            <button
              className="w-full py-2 text-base font-medium text-stone-800 bg-yellow-500 rounded-md transition-all duration-300 
                         hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 
                         hover:text-gray-900 hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => setSelectedEvent(event)}
            >
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
  <div className="flex justify-center items-center mb-16">
    <button className="py-2 px-8 text-lg font-medium text-gray-700 bg-yellow-400 rounded-md transition-all duration-300 
                      hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 
                      hover:text-gray-900 hover:scale-105 shadow-lg hover:shadow-xl">
      <Link to="/eventForYou">View all events</Link>
    </button>
  </div>
</section>



{/* Event Detail Modal */}
{selectedEvent && (
  <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 transition-all duration-300 ease-in-out">
    <div className="relative bg-gray-800 rounded-lg shadow-2xl w-11/12 max-w-3xl p-6 transition-transform transform scale-100 hover:scale-105">
      {/* Close Button */}
      <button
        className="absolute -top-4 -right-4 text-yellow-400 bg-teal-600 p-3 rounded-full shadow-md 
                  hover:bg-yellow-400 hover:text-teal-800 hover:scale-110 transition-all duration-300"
        onClick={() => setSelectedEvent(null)}
      >
        <FaTimes className="text-xl" />
      </button>

      {/* Event Image */}
      <div className="relative w-full h-72 mb-6">
        <img
          src={selectedEvent.image}
          alt={selectedEvent.eventName}
          className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = DEFAULT_EVENT_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent rounded-lg"></div>
      </div>

      {/* Event Content */}
      <div className="px-4">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          {selectedEvent.eventName}
        </h2>
        <div className="text-teal-300 text-lg mb-4 flex items-center">
          <FaRegCalendar className="inline-block text-yellow-400 mr-3" />
          <span>{new Date(selectedEvent.eventDate).toLocaleDateString()}</span>
        </div>
        <div className="text-teal-300 text-lg mb-4 flex items-center">
          <FaMapMarkerAlt className="inline-block text-red-400 mr-3" />
          <span>{selectedEvent.eventLocation}</span>
        </div>
        <div className="text-teal-300 text-lg mb-4 flex items-center">
          <FaPlaceOfWorship className="inline-block text-green-400 mr-3" />
          <span>{selectedEvent.eventPlace}</span>
        </div>
        <div className="text-teal-300 text-lg flex items-center">
          <MdOutlineSignalCellularAlt className="inline-block text-purple-400 mr-3" />
          <span>{selectedEvent.eventDescription}</span>
        </div>
      </div>
    </div>
  </div>
)}


    {/* Features Section */}
<section className="w-full pt-16 bg-gray-900 transition-all duration-500 ease-in-out">
  <div className="px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center text-yellow-400">
      Why Choose Us
    </h2>
  </div>
  <div className="grid gap-8 py-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center px-6 sm:px-8 lg:px-60">
    {featuresList.map((feature) => (
      <div
        key={feature.id}
        className="bg-gray-800 ring-1 ring-gray-700 rounded-lg p-6 transition-transform duration-500 
                   transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-xl hover:bg-gradient-to-br 
                   from-teal-800 via-gray-700 to-gray-800"
      >
        <div
          className="flex justify-center mb-4 text-teal-400 text-4xl transition-transform duration-300 
                     hover:scale-125 hover:text-yellow-400"
        >
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-yellow-400">{feature.title}</h3>
        <p className="text-teal-300">{feature.details}</p>
      </div>
    ))}
  </div>
</section>

{/* Testimonials Section */}
<section className="w-full bg-gradient-to-r from-purple-100 to-yellow-100 transition-all duration-500 ease-in-out py-16">
  <div className="px-4">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center text-teal-600">
      What Our Clients Say
    </h2>
  </div>
  <div className="flex gap-8 px-8 lg:px-40 py-20 max-sm:flex-col max-sm:px-6 max-sm:py-16">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="flex flex-col bg-gray-800 ring-1 ring-gray-700 rounded-lg p-8 transition-transform duration-500 
                   transform hover:scale-110 hover:rotate-2 hover:shadow-2xl hover:ring-2 hover:ring-teal-400 
                   hover:bg-gradient-to-br from-gray-800 via-gray-700 to-teal-700 text-center 
                   group"
      >
        {/* Stars */}
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className="w-5 h-5 fill-current text-yellow-400"
            />
          ))}
        </div>

        {/* Testimonial Content */}
        <blockquote className="text-teal-300 text-base sm:text-lg italic leading-relaxed mb-4">
          "{testimonial.quote}"
        </blockquote>

        {/* Client Details */}
        <p className="text-lg font-bold text-yellow-400">{testimonial.name}</p>
        <p className="text-teal-400 text-xs sm:text-sm">{testimonial.role}</p>
      </div>
    ))}
  </div>
</section>



      {/* Contact Form Section */}
      <Contact />
    </div>
  );
};

export default Welcome;
