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
    <div className="min-h-screen bg-gray-50 px-6 py-10 md:px-16 lg:px-28">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Events for You
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Discover events tailored to your interests. Don’t miss out!
      </p>
      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading events...</p>
      ) : events && events.length === 0 ? (
        <div className="text-center text-gray-500 text-xl font-medium mt-10">
          No events found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="border border-gray-200 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
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
                <h2 className="text-xl font-semibold text-gray-800 truncate mb-2">
                  {event.eventName}
                </h2>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span>
                    <span className="font-medium text-gray-700">Location:</span>{" "}
                    {event.eventLocation}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <FaBuilding className="text-blue-500 mr-2" />
                  <span>
                    <span className="font-medium text-gray-700">Place:</span>{" "}
                    {event.eventPlace || "N/A"}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <FaCalendarAlt className="text-green-500 mr-2" />
                  <span>
                    <span className="font-medium text-gray-700">Date:</span>{" "}
                    {new Date(event.eventDate).toLocaleDateString()}
                  </span>
                </div>
                <Separator className="my-4" />
                <Button
                  className="w-full py-2 text-base font-medium"
                  onClick={() => setSelectedEvent(event)}
                >
                  View More
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Section for Event Details */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow transition"
              onClick={closeEventDetails}
              aria-label="Close"
            >
              <FiX className="w-6 h-6" />
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.eventName}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedEvent.eventName}
              </h2>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <FaCalendarAlt className="text-green-500 mr-2" />
                <span>
                  <span className="font-medium text-gray-700">Date:</span>{" "}
                  {new Date(selectedEvent.eventDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <FaMapMarkerAlt className="text-red-500 mr-2" />
                <span>
                  <span className="font-medium text-gray-700">Location:</span>{" "}
                  {selectedEvent.eventLocation}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <FaBuilding className="text-blue-500 mr-2" />
                <span>
                  <span className="font-medium text-gray-700">Place:</span>{" "}
                  {selectedEvent.eventPlace || "N/A"}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaInfoCircle className="text-purple-500 mr-2" />
                <span>
                  <span className="font-medium text-gray-700">Description:</span>{" "}
                  {selectedEvent.eventDescription || "No description provided."}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventForYou;
