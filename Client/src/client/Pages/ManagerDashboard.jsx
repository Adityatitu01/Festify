import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarDays,
  Mail,
  User,
  MapPin,
  Edit,
  Trash2,
} from "lucide-react";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ManagerDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
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
        toast.success("Dashboard loaded successfully!", {
          toastStyle: { backgroundColor: "green", color: "white" },
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to load dashboard data", {
          toastStyle: { backgroundColor: "green", color: "white" },
        });
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  const handleEditEvent = async (eventId) => {
    try {
      navigate(`/edit-event/${eventId}`);
      toast.info("Navigating to edit event...", {
        toastStyle: { backgroundColor: "green", color: "white" },
      });
    } catch (error) {
      console.error("Error editing event:", error);
      toast.error("Failed to navigate to edit event", {
        toastStyle: { backgroundColor: "green", color: "white" },
      });
    }
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
        toast.success("Event deleted successfully!", {
          toastStyle: { backgroundColor: "green", color: "white" },
        });
      } else {
        throw new Error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event", {
        toastStyle: { backgroundColor: "green", color: "white" },
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8 bg-gray-50 min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="profile"
            className="text-lg font-semibold text-gray-600 hover:text-indigo-600"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="events"
            className="text-lg font-semibold text-gray-600 hover:text-indigo-600"
          >
            My Events
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card className="shadow-lg border rounded-lg bg-white">
            <CardHeader className="bg-indigo-50 p-4">
              <CardTitle className="text-xl text-indigo-600">
                Profile Information
              </CardTitle>
              <CardDescription className="text-gray-500">
                View and manage your profile details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="flex items-center space-x-4 text-gray-700">
                <User className="h-6 w-6 text-indigo-500" />
                <span className="font-medium">{userData?.name}</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <Mail className="h-6 w-6 text-indigo-500" />
                <span>{userData?.email}</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-700">
                <CalendarDays className="h-6 w-6 text-indigo-500" />
                <span>Events Created: {userData?.eventsCreated?.length || 0}</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Events Tab */}
        <TabsContent value="events">
          <Card className="shadow-lg border rounded-lg bg-white">
            <CardHeader className="bg-indigo-50 p-4">
              <CardTitle className="text-xl text-indigo-600">My Events</CardTitle>
              <CardDescription className="text-gray-500">
                Manage your created events
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {userData?.eventsCreated?.map((event) => (
                  <Card
                    key={event._id}
                    className="shadow-sm border rounded-lg overflow-hidden"
                  >
                    <CardHeader className="p-4 bg-gray-100">
                      <CardTitle className="text-lg text-indigo-700">
                        {event.eventName}
                      </CardTitle>
                      <CardDescription>
                        <div className="flex items-center space-x-2 text-gray-600 mt-1">
                          <CalendarDays className="h-4 w-4 text-indigo-500" />
                          <span>{format(new Date(event.eventDate), "PPP")}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 mt-1">
                          <MapPin className="h-4 w-4 text-indigo-500" />
                          <span>{event.eventPlace}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {event.eventDescription}
                      </p>
                      <div className="flex justify-end space-x-2 mt-4">
                        <button
                          onClick={() => handleEditEvent(event._id)}
                          className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-full"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(event._id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManagerDashboard;
