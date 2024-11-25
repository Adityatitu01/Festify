import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/auth-context";
import { toast } from "react-toastify";

const EditEvent = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventPlace: "",
    eventLocation: "",
    eventDescription: "",
  });

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/event/${eventId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) throw new Error("Failed to fetch event");

        const data = await response.json();
        const event = data.event;

        setFormData({
          eventName: event.eventName,
          eventDate: new Date(event.eventDate).toISOString().split("T")[0],
          eventPlace: event.eventPlace,
          eventLocation: event.eventLocation,
          eventDescription: event.eventDescription,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        toast.error("Failed to load event data");
        navigate("/managerDashboard");
      }
    };

    fetchEventData();
  }, [eventId, token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/event/${eventId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update event");

      toast.success("Event updated successfully");
      navigate("/managerDashboard");
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error("Failed to update event");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 transition-all transform hover:shadow-xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Edit Event</h1>
          <p className="text-gray-500">Make changes to your event details below.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Name */}
          <div>
            <label
              htmlFor="eventName"
              className="block text-sm font-medium text-gray-600"
            >
              Event Name
            </label>
            <input
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Event Date */}
          <div>
            <label
              htmlFor="eventDate"
              className="block text-sm font-medium text-gray-600"
            >
              Event Date
            </label>
            <input
              id="eventDate"
              name="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Event Place */}
          <div>
            <label
              htmlFor="eventPlace"
              className="block text-sm font-medium text-gray-600"
            >
              Event Place
            </label>
            <input
              id="eventPlace"
              name="eventPlace"
              value={formData.eventPlace}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Event Location */}
          <div>
            <label
              htmlFor="eventLocation"
              className="block text-sm font-medium text-gray-600"
            >
              Event Location
            </label>
            <input
              id="eventLocation"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Event Description */}
          <div>
            <label
              htmlFor="eventDescription"
              className="block text-sm font-medium text-gray-600"
            >
              Event Description
            </label>
            <textarea
              id="eventDescription"
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition min-h-[120px]"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate("/managerDashboard")}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Update Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEvent;
