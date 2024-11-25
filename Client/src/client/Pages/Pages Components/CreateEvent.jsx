import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { toast, ToastContainer } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

const CreateEvent = () => {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventPlace: "",
    eventDescription: "",
  });

  console.log("Form Data:", formData);

  // Check if the user is logged in by verifying the token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    console.log("Token:", token);
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  
    // Validation for Event Name
    if (!formData.eventName) {
      toast.error("Event Name is required.", {
        position: "top-right",
        autoClose: 2000,
      });
      return; // Stop form submission if Event Name is empty
    }
  
    // Validation for Event Date
    const currentDate = new Date();
    const selectedDate = new Date(formData.eventDate);
    if (!formData.eventDate) {
      toast.error("Event Date is required.", {
        position: "top-right",
        autoClose: 2000,
      });
      return; // Stop form submission if Event Date is empty
    }
    if (selectedDate < currentDate) {
      toast.error("Event Date must be a future date.", {
        position: "top-right",
        autoClose: 2000,
      });
      return; // Stop form submission if Event Date is in the past
    }
  
    // Validation for Event Location
    if (!formData.eventLocation) {
      toast.error("Event Location is required.", {
        position: "top-right",
        autoClose: 2000,
      });
      return; // Stop form submission if Event Location is empty
    }
  
    // Validation for Event Place
    if (!formData.eventPlace) {
      toast.error("Please select a place for the event.", {
        position: "top-right",
        autoClose: 2000,
      });
      return; // Stop form submission if Event Place is not selected
    }
  
    // Validation for Event Description (at least 12 characters)
    if (!formData.eventDescription) {
      toast.error("Event Description is required.", {
        position: "top-right",
        autoClose: 2000,
      });
      return; // Stop form submission if Event Description is empty
    }
  
    if (formData.eventDescription.length < 12) {
      toast.error("Please enter at least 12 characters for the description.", {
        position: "top-right", // Position set to top-right
        autoClose: 2000, // Auto close after 2000ms
      });
      return; // Stop form submission if description is too short
    }
  
    try {
      const response = await fetch("http://localhost:8000/createEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });
  
      // Log the response status and data
      console.log("Response Status:", response.status);
      if (!response.ok) {
        const errorMessage = `Error: ${response.status} ${response.statusText}`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
  
      const data = await response.json();
      console.log("Event created successfully:", data);
  
      // Show toast notification for successful event creation
      toast.success("Event created successfully!", {
        position: "top-right", // Position set to top-right
        autoClose: 2000, // Auto close after 2000ms
      });
  
      // Redirect to the home page after successful event creation
      setTimeout(() => {
        navigate("/"); // Redirect after a short delay (to let the toast message appear)
      }, 2000); // Match the toast duration for a smoother transition
  
    } catch (error) {
      console.error("Failed to create event:", error.message);
      toast.error("Failed to create event. Please try again later.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };
  
  

  return (
    <div className="bg-zinc-100 h-[100%] w-full">
      <section className="flex justify-center items-center flex-col gap-8 py-8 max-sm:py-4">
        {/* Watch Now Video Card */}
        <div className="w-2/3 bg-white p-8 flex gap-8 rounded-xl max-sm:w-[90%] max-sm:flex-col">
          <Skeleton className="min-w-[120px] h-[120px] max-sm:w-[120px] rounded-lg" />
          <div className="space-y-2">
            <h1 className="text-lg font-bold">
              Here's a video to help you out!
            </h1>
            <p>
              Check out this product tour video and learn how you can make the
              most out of Festify and its features!
            </p>
            <button className="btn-Blue">Watch Now</button>
          </div>
        </div>

        {/* Event Form */}
        <div className="w-2/3 py-16 flex gap-4 max-sm:w-[90%]">
          <form
            className="bg-white w-4/6 max-sm:w-full rounded-xl p-8"
            onSubmit={handleSubmit}
          >
            <h1 className="font-bold text-xl mb-8">Publish Your Event</h1>

            {/* Event Name Input Section */}
            <div className="flex flex-col my-4">
              <label htmlFor="eventName" className="font-medium text-sm mb-2">
                Event Name
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                placeholder="Enter your event name"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Event Date Section */}
            <div className="flex flex-col w-72 max-sm:w-full">
              <label htmlFor="eventDate" className="font-medium text-sm mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Event Place Select Section */}
            <div className="my-4">
              <label htmlFor="eventPlace" className="font-medium text-sm mb-2">
                Where will your event take place?
              </label>
              <select
                id="eventPlace"
                name="eventPlace"
                value={formData.eventPlace}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a place</option>
                <option value="Auditorium">Auditorium</option>
                <option value="Conference Hall">Conference Hall</option>
                <option value="Outdoor">Outdoor</option>
                <option value="Venue">Venue</option>
                <option value="Online">Online</option>
              </select>
            </div>

            {/* Event Location Input */}
            <div className="my-4">
              <label htmlFor="eventLocation" className="font-medium text-sm mb-2">
                Event Location
              </label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleChange}
                placeholder="Enter the event location"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Event Description */}
            <div className="flex flex-col my-4">
              <label htmlFor="eventDescription" className="font-medium text-sm mb-2">
                Event Description
              </label>
              <textarea
                id="eventDescription"
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleChange}
                placeholder="Write a description for your event"
                className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button type="submit" className="btn-Blue">
              Publish Your Event
            </button>
          </form>

          <div className="bg-white w-2/6 rounded-xl p-8 max-sm:hidden">
            <div className="mb-4">
              <h1 className="text-3xl font-bold tracking-tight">Tips</h1>
              <p className="my-4">
                To make your event stand out and get unique traffic on your
                event, follow the tips provided in this panel as you create your
                event step-by-step.
              </p>
              <button className="text-blue-500 px-0">
                Here, take our product tour.
              </button>
            </div>
            <div className="bg-zinc-300 h-0.5 w-full rounded-full"></div>
            <div className="my-4">
              <h1 className="text-lg font-semibold">
                Or, import from other platforms
              </h1>
              <p className="py-4">
                Have you already published your events on other platforms like
                Facebook, Eventbrite, or your own website?
              </p>
              <button className="btn-Blue">IMPORT EVENTS</button>
            </div>
            <div className="bg-zinc-300 h-0.5 w-full rounded-full"></div>
            <div className="my-4">
              <h1 className="text-lg font-semibold">
                Improve your event's performance
              </h1>
              <p className="py-4">
                Improve your event's performance. Don't forget to add Tickets on
                AllEvents in your banners & designs. It helps event-goers know
                where they can find an option to buy tickets.
              </p>
              <button className="btn-Blue">DOWNLOAD MEDIA KIT</button>
            </div>
          </div>
        </div>

        {/* Need Help? */}
        <div className="w-2/3 bg-white py-16 rounded-lg p-8 max-sm:w-[90%]">
          <h1 className="text-2xl font-bold pb-4">Need Help?</h1>
          <ul className="text-blue-500">
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="#">
                How to Create My Events Online
              </a>
            </li>
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="#">
                How to Send Email Invites to Attendees
              </a>
            </li>
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="#">
                How to keep track of your ticket sales
              </a>
            </li>
            <li>
              <span> &#8226; </span>
              <a className="hover:underline" href="#">
                How to reach out to Potential Attendees from Your City
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Toast container */}
      <ToastContainer
        position="top-left" // Set position to top-left
        autoClose={2000} // Set duration to 2000ms
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default CreateEvent;
