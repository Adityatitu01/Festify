import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth-context";
import { CalendarDays, Mail, User, MapPin, Edit, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ManagerDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile"); // Default to Profile
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8000/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setUserData(data.msg);
        setLoading(false);
        toast.success("Dashboard loaded successfully!");
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to load dashboard data");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  const handleEditEvent = (eventId) => {
    navigate(`/edit-event/${eventId}`);
    toast.info("Navigating to edit event...");
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:8000/event/${eventId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setUserData((prev) => ({
          ...prev,
          eventsCreated: prev.eventsCreated.filter(
            (event) => event._id !== eventId
          ),
        }));
        toast.success("Event deleted successfully!");
      } else {
        throw new Error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event");
    }
  };

  const handleUserRedirect = () => {
    navigate("/registeredUser");
    toast.info("Navigating to registered users...");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-white">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="lg:w-1/4 bg-white shadow-lg lg:min-h-screen p-6 flex flex-col">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text mb-8">
            Manager Dashboard
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Welcome, <span className="font-medium">{userData?.name}</span>
          </p>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full py-3 text-left text-lg font-medium rounded-md transition ${
                activeTab === "profile"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-100"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`w-full py-3 text-left text-lg font-medium rounded-md transition ${
                activeTab === "events"
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-indigo-100"
              }`}
            >
              My Events
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4 p-8">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          {activeTab === "profile" && (
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                Profile Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <User className="h-6 w-6 text-indigo-500" />
                  <span className="text-gray-700 font-medium">
                    {userData?.name}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-indigo-500" />
                  <span className="text-gray-700">{userData?.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CalendarDays className="h-6 w-6 text-indigo-500" />
                  <span className="text-gray-700">
                    Events Created: {userData?.eventsCreated?.length || 0}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h2 className="text-2xl font-bold text-indigo-600 mb-4">
                My Events
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {userData?.eventsCreated?.map((event) => (
                  <div
                    key={event._id}
                    className="bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-lg transition"
                  >
                    <h3 className="text-lg font-semibold text-indigo-600">
                      {event.eventName}
                    </h3>
                    <div className="mt-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <CalendarDays className="h-4 w-4 text-indigo-500" />
                        <span>{format(new Date(event.eventDate), "PPP")}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="h-4 w-4 text-indigo-500" />
                        <span>{event.eventPlace}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-700 line-clamp-3">
                      {event.eventDescription}
                    </p>
                    <div className="flex justify-end space-x-2 mt-4">
                      <button
                        onClick={handleUserRedirect}
                        className="p-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-full transition"
                      >
                        <User className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleEditEvent(event._id)}
                        className="p-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-full transition"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event._id)}
                        className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-full transition"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ManagerDashboard;
