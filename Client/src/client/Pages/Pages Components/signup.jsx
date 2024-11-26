import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../store/auth-context";

const Signup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://festify-61ym.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();

        storeTokenInLS(res_data.token);
        toast.success(
          `🎉 Welcome, ${user.name}! Your account has been created successfully.`,
          {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        setTimeout(() => {
          setUser({
            name: "",
            email: "",
            password: "",
          });
          navigate("/");
        }, 2000);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Signup failed. Please try again.", {
          position: "top-right",
          autoClose: 2500,
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 2500,
      });
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <ToastContainer />
      <div className="max-w-md w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-600">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-center text-white">
            Create an Account
          </h1>
          <p className="text-gray-400 text-center mt-2">
            Sign up to unlock amazing features!
          </p>

          <div className="flex flex-col mt-6 gap-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label
                className="font-semibold text-gray-300 mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="p-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label
                className="font-semibold text-gray-300 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="p-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
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
              <label
                className="font-semibold text-gray-300 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="p-3 rounded-lg bg-gray-700 text-gray-200 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none w-full"
                  type={isVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
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

            {/* Register Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg w-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </div>
        </form>

        {/* OR Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="h-px w-full bg-gray-600"></div>
          <span className="px-3 text-gray-400">OR</span>
          <div className="h-px w-full bg-gray-600"></div>
        </div>

        {/* Log In Link */}
        <p className="text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-500 underline"
          >
            Log In here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
