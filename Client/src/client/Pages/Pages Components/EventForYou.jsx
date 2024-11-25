import React, { useState, useEffect } from "react";
import { Separator } from "../../../components/ui/separator";
import { Button } from "../../../components/ui/button";
import { useAuth } from "@/store/auth-context";
import { FiX } from "react-icons/fi";
import { FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaInfoCircle } from "react-icons/fa";

const PIXABAY_API_KEY = "27481169-20e77ec7c6401f3d4e15ad82e";
const DEFAULT_EVENT_IMAGE = "https://via.placeholder.com/300?text=Event";

const EventForYou = () => {
  const { events } = useAuth();
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchEventImages = async () => {
    try {
      const enhancedEvents = await Promise.all(
        events.map(async (event) => {
          try {
            const response = await fetch(
              `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
                event.eventName
              )}&image_type=photo&orientation=horizontal`
            );
            if (!response.ok) {
              throw new Error("Pixabay API error");
            }
            const imageData = await response.json();
            const image =
              imageData.hits?.length > 0
                ? imageData.hits[0]?.webformatURL
                : DEFAULT_EVENT_IMAGE;
            return {
              ...event,
              image,
            };
          } catch (error) {
            console.error(
              `Error fetching image for "${event.eventName}":`,
              error.message
            );
            return {
              ...event,
              image: DEFAULT_EVENT_IMAGE,
            };
          }
        })
      );
      setEventData(enhancedEvents);
      setLoading(false);
    } catch (error) {
      console.error("Error processing events:", error.message);
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

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black px-6 py-10 md:px-16 lg:px-28 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-25 top-0 left-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-25 bottom-0 right-0 animate-pulse"></div>
      </div>

      <h1 className="text-4xl font-extrabold text-amber-400 mb-8 text-center relative z-10">
        Events for You
      </h1>
      <p className="text-lg text-teal-600 text-center mb-10 relative z-10">
        Discover events tailored to your interests. Don’t miss out!
      </p>

      {loading ? (
        <p className="text-center text-gray-500 text-lg relative z-10">
          Loading events...
        </p>
      ) : events && events.length === 0 ? (
        <div className="text-center text-gray-500 text-xl font-medium mt-10 relative z-10">
          No events found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="border border-gray-200 shadow-lg rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-48">
                <img
                  src={event.image || DEFAULT_EVENT_IMAGE}
                  alt={event.eventName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = DEFAULT_EVENT_IMAGE;
                  }}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white truncate mb-2">
                  {event.eventName}
                </h2>
                <div className="flex items-center text-sm text-gray-400 mb-1">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span>
                    <span className="font-medium text-white">Location:</span>{" "}
                    {event.eventLocation}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-1">
                  <FaBuilding className="text-blue-500 mr-2" />
                  <span>
                    <span className="font-medium text-white">Place:</span>{" "}
                    {event.eventPlace || "N/A"}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <FaCalendarAlt className="text-green-500 mr-2" />
                  <span>
                    <span className="font-medium text-white">Date:</span>{" "}
                    {new Date(event.eventDate).toLocaleDateString()}
                  </span>
                </div>
                <Separator className="my-4" />
                <Button
                  className="w-full py-2 text-base font-medium bg-amber-400 hover:bg-amber-500"
                  onClick={() => setSelectedEvent(event)}
                >
                  View More
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

{/* Event Detail Modal */}
{selectedEvent && (
  <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 transition-all duration-300 ease-in-out">
    <div className="relative bg-gray-900 rounded-lg shadow-2xl w-11/12 max-w-3xl p-6 transition-transform transform scale-100 hover:scale-105">
      
      {/* Close Button */}
      <button
        className="absolute -top-4 -right-4 text-white bg-red-500 p-3 rounded-full shadow-md 
                  hover:bg-red-600 hover:scale-110 transition-all duration-300 focus:outline-none"
        onClick={() => setSelectedEvent(null)}
        aria-label="Close Modal"
      >
        <FiX className="text-2xl" />
      </button>

      {/* Event Image */}
      <div className="relative w-full h-72 mb-6">
        <img
          src={selectedEvent.image}
          alt={selectedEvent.eventName}
          className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = DEFAULT_EVENT_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
      </div>

      {/* Event Content */}
      <div className="text-white">
        <h2 className="text-3xl font-extrabold text-yellow-400 mb-4">
          {selectedEvent.eventName}
        </h2>
        <div className="flex items-center text-lg text-gray-300 mb-4">
          <FaCalendarAlt className="text-yellow-400 mr-2" />
          <span>{new Date(selectedEvent.eventDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-lg text-gray-300 mb-4">
          <FaMapMarkerAlt className="text-red-400 mr-2" />
          <span>{selectedEvent.eventLocation}</span>
        </div>
        <div className="flex items-center text-lg text-gray-300 mb-4">
          <FaBuilding className="text-green-400 mr-2" />
          <span>{selectedEvent.eventPlace || "N/A"}</span>
        </div>
        <div className="flex items-start text-lg text-gray-300">
          <FaInfoCircle className="text-purple-400 mr-2 mt-1" />
          <span>{selectedEvent.eventDescription || "No description provided."}</span>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default EventForYou;
