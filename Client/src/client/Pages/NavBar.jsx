import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../../store/auth-context";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { token, signoutUser } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = () => {
    signoutUser();
    setShowLogoutConfirm(false);
  };

  return (
    <div>
      <nav className="w-full p-2 bg-gradient-to-r from-teal-800 to-teal-600 text-white shadow-md flex justify-between items-center px-4 lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold hover:text-yellow-400 transition-transform duration-300 transform hover:scale-105"
        >
          Festify
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex md:items-center gap-x-6">
          <NavLink to="/createEvent" label="Create Event" />
          <NavLink to="/eventForYou" label="Events for You" />
          {token && (
            <>
              <NavLink to="/managerDashboard" label="Dashboard" />
              <button
                onClick={() => setShowLogoutConfirm(true)}
                className="relative text-lg font-medium text-yellow-400 hover:text-red-500 transition-all duration-300 hover:scale-105"
              >
                Sign Out
              </button>
            </>
          )}
          {!token && (
            <NavLink to="/signup" label="Sign Up" color="text-yellow-400" />
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="hover:cursor-pointer focus:outline-none hover:scale-110 transition duration-300"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <GiHamburgerMenu className="h-6 w-6 text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-gray-900 shadow-lg p-4">
          <div className="space-y-4">
            <MobileNavLink to="/createEvent" label="Create Event" />
            <MobileNavLink to="/eventForYou" label="Events for You" />
            {token && (
              <>
                <MobileNavLink to="/dashboard" label="Dashboard" />
                <button
                  onClick={() => setShowLogoutConfirm(true)}
                  className="w-full text-left text-red-400 hover:text-red-500 transition-all duration-300"
                >
                  Sign Out
                </button>
              </>
            )}
            {!token && (
              <MobileNavLink to="/signup" label="Sign Up" color="text-yellow-400" />
            )}
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed top-2 right-4 z-50 bg-gray-800 shadow-lg rounded-lg p-4 ring-1 ring-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            Are you sure you want to logout?
          </h3>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setShowLogoutConfirm(false)}
              className="px-4 py-2 bg-gray-600 rounded-md text-white hover:bg-gray-700 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-700 rounded-md text-white hover:bg-amber-400 transition-all duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ to, label, color = "text-teal-400" }) => (
  <Link
    to={to}
    className={`relative text-lg font-medium ${color} hover:underline transition-all duration-300 hover:text-yellow-400`}
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ to, label, color = "text-teal-400" }) => (
  <Link to={to}>
    <button
      className={`w-full text-left ${color} hover:text-yellow-400 transition-all duration-300`}
    >
      {label}
    </button>
  </Link>
);

export default NavBar;
