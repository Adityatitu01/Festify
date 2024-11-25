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
<section className="w-full pt-16 transition-all duration-500 ease-in-out">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center">
    Events
  </h2>
  {loading ? (
    <p className="text-center text-gray-500 text-lg">Loading events...</p>
  ) : events && events.length === 0 ? (
    <div className="text-center text-gray-500 text-xl font-medium mt-10">
      No events found.
    </div>
  ) : (
    <div className="grid gap-8 py-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 sm:px-8 lg:px-60">
      {eventData.slice(0, 8).map((event) => (
        <div
          key={event.id}
          className="border border-gray-200 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="relative w-full h-48">
            <img
              src={event.image}
              alt={event.eventName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = DEFAULT_EVENT_IMAGE;
              }}
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 truncate mb-2">
              {event.eventName}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <FaMapMarkerAlt className="inline-block text-red-500 mr-2" />
              {event.eventLocation}
              <br />
              <FaPlaceOfWorship className="inline-block text-green-500 mr-2" />
              {event.eventPlace}
            </p>
            <p className="text-sm text-gray-600 mb-3">
              <FaRegCalendar className="inline-block text-blue-500 mr-2" />
              {new Date(event.eventDate).toLocaleDateString()}
            </p>
            <button
              className="btn-Blue w-full py-2 text-base font-medium mt-4"
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
    <button className="btn-Blue">
      <Link to="/eventForYou">View all events</Link>
    </button>
  </div>
</section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-2xl p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-xl"
              onClick={() => setSelectedEvent(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.eventName}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedEvent.eventName}</h2>
            <p className="text-gray-600 mb-2">
              <FaRegCalendar className="inline-block text-blue-500 mr-2" />
              {new Date(selectedEvent.eventDate).toLocaleDateString()}
            </p>
            <p className="text-gray-600 mb-2">
              <FaMapMarkerAlt className="inline-block text-red-500 mr-2" />
              {selectedEvent.eventLocation}
            </p>
            <p className="text-gray-600 mb-2">
              <FaPlaceOfWorship className="inline-block text-green-500 mr-2" />
              {selectedEvent.eventPlace}
            </p>
            <p className="text-gray-600">
              <MdOutlineSignalCellularAlt className="inline-block text-purple-500 mr-2" />
              {selectedEvent.eventDescription}
            </p>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="w-full pt-16 bg-zinc-100 transition-all duration-500 ease-in-out">
        <div className="px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center">
            Why Choose Us
          </h2>
        </div>
        <div className="grid gap-8 py-24 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center px-6 sm:px-8 lg:px-60">
          {featuresList.map((feature) => (
            <div
              key={feature.id}
              className="ring-1 bg-white ring-zinc-400 rounded-lg p-6 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-zinc-500">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mt-16">
            What Our Clients Say
          </h2>
        </div>
        <div className="flex gap-8 px-60 py-32 max-sm:flex-col max-sm:px-8 max-sm:py-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-white ring-1 ring-zinc-400 rounded-lg p-6 transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-500"
                  />
                ))}
              </div>
              <div>
                <h3 className="text-zinc-500 mt-4">{testimonial.quote}</h3>
                <p className="text-lg font-bold mt-2">{testimonial.name}</p>
                <p className="text-zinc-500">{testimonial.role}</p>
              </div>
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
