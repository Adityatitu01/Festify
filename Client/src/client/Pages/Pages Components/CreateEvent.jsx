import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventPlace: "",
    eventDescription: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.eventName) {
      toast.error("Event Name is required.");
      return;
    }

    const currentDate = new Date();
    const selectedDate = new Date(formData.eventDate);
    if (!formData.eventDate || selectedDate < currentDate) {
      toast.error("Please select a valid future date.");
      return;
    }

    if (!formData.eventLocation || !formData.eventPlace || formData.eventDescription.length < 12) {
      toast.error("Please fill out all fields with valid inputs.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/createEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      toast.success("Event created successfully!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error("Failed to create event.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex items-center justify-center overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/10 to-transparent" />
      </div>

      {/* Form Section */}
      <section className="relative z-10 w-full lg:my-20 max-w-3xl p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">Create Your Event</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <label htmlFor="eventName" className="block font-medium text-gray-300 mb-2">
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Enter your event name"
              className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* Event Date */}
          <div>
            <label htmlFor="eventDate" className="block font-medium text-gray-300 mb-2">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* Event Place */}
          <div>
            <label htmlFor="eventPlace" className="block font-medium text-gray-300 mb-2">
              Event Place
            </label>
            <select
              id="eventPlace"
              name="eventPlace"
              value={formData.eventPlace}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            >
              <option value="">Select a place</option>
              <option value="Auditorium">Auditorium</option>
              <option value="Conference Hall">Conference Hall</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Venue">Venue</option>
              <option value="Online">Online</option>
            </select>
          </div>

          {/* Event Location */}
          <div>
            <label htmlFor="eventLocation" className="block font-medium text-gray-300 mb-2">
              Event Location
            </label>
            <input
              type="text"
              id="eventLocation"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="Enter the event location"
              className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          {/* Event Description */}
          <div>
            <label htmlFor="eventDescription" className="block font-medium text-gray-300 mb-2">
              Event Description
            </label>
            <textarea
              id="eventDescription"
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleChange}
              placeholder="Write a description for your event"
              className="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none transition-all"
          >
            Publish Event
          </button>
        </form>
      </section>

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default CreateEvent;
