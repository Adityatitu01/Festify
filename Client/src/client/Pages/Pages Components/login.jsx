import React, { useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useAuth} from '../../../store/auth-context'

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();  // Initialize navigate for redirection
  const {storeTokenInLS} = useAuth() 

  //<-------------------------------------------------------------handle create event and login-------------------->

  useEffect(() => {
    const token = localStorage.getItem("Token"); // Check if token exists
    if (token) {
      navigate("/CreateEvent"); // Redirect to Create Event page if logged in
    }
  }, [navigate]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        //<----------------------------------------store token using context API------------------------------------------>
        const res_data = await response.json();
        storeTokenInLS(res_data.token)
        toast.success("Login successful! Redirecting to home page...", {
          position: "top-right",
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/"); // Redirect to the home page
        }, 1500);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Login failed. Please try again.", {
          position: "top-right",
          autoClose: 1500,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <ToastContainer /> {/* Toast notifications container */}
      <div className="max-w-md w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-gray-100 rounded-xl p-8 shadow-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-center">
            Log In to Your Account
          </h1>
          <p className="text-gray-500 text-center mt-2">
            Enter your credentials below to log in.
          </p>

          <div className="flex flex-col mt-6 gap-4">
            {/* Email Field */}
            <div className="flex flex-col">
              <label className="font-bold mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="j@example.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label className="font-bold mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none w-full"
                  type={isVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={toggleVisibility}
                  aria-label={isVisible ? "Hide password" : "Show password"}
                >
                  {isVisible ? (
                    <FaEyeSlash size={18} aria-hidden="true" />
                  ) : (
                    <FaEye size={18} aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-gray-800 text-white p-3 rounded-lg w-full font-semibold hover:bg-gray-900 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="h-px w-full bg-gray-300"></div>
          <span className="px-3 text-gray-400">OR</span>
          <div className="h-px w-full bg-gray-300"></div>
        </div>

        {/* Sign-Up Link */}
        <p className="text-center text-sm mt-6">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
