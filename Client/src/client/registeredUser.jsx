import React, { useState } from "react";
import { Trash2, User } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisteredUser = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", age: 28, gender: "Male" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", age: 34, gender: "Female" },
    { id: 3, name: "Sam Wilson", email: "samwilson@example.com", age: 25, gender: "Male" },
    { id: 4, name: "Alice Johnson", email: "alice.johnson@example.com", age: 29, gender: "Female" },
    { id: 5, name: "Robert Brown", email: "robert.brown@example.com", age: 41, gender: "Male" },
    { id: 6, name: "Emily Davis", email: "emily.davis@example.com", age: 38, gender: "Female" },
    { id: 7, name: "Michael Green", email: "michael.green@example.com", age: 22, gender: "Male" },
    { id: 8, name: "Sarah Taylor", email: "sarah.taylor@example.com", age: 31, gender: "Female" },
    { id: 9, name: "David Harris", email: "david.harris@example.com", age: 27, gender: "Male" },
    { id: 10, name: "Sophia Clark", email: "sophia.clark@example.com", age: 36, gender: "Female" },
    { id: 11, name: "Daniel Lee", email: "daniel.lee@example.com", age: 33, gender: "Male" },
    { id: 12, name: "Olivia Walker", email: "olivia.walker@example.com", age: 24, gender: "Female" },
    { id: 13, name: "James Martin", email: "james.martin@example.com", age: 40, gender: "Male" },
    { id: 14, name: "Charlotte Harris", email: "charlotte.harris@example.com", age: 29, gender: "Female" },
    { id: 15, name: "William Scott", email: "william.scott@example.com", age: 39, gender: "Male" },
  ]);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    toast.success("User deleted successfully!", {
      toastStyle: { backgroundColor: "green", color: "white" },
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
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
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-yellow-400">
          Registered Users
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl 
              bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <User className="h-8 w-8 text-teal-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-teal-300">{user.name}</h3>
                    <p className="text-gray-400">{user.email}</p>
                    <p className="text-gray-500 text-sm">Age: {user.age}</p>
                    <p className="text-gray-500 text-sm">Gender: {user.gender}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="p-2 text-red-500 bg-red-100 bg-opacity-10 hover:bg-opacity-20 rounded-full transition"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegisteredUser;
