import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../../store/auth-context"; // Importing useAuth

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false); // State for logout confirmation modal
  const { token, signoutUser } = useAuth(); // Access token and signoutUser from AuthContext

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = () => {
    signoutUser(); // Perform logout
    setShowLogoutConfirm(false); // Close modal
  };

  return (
    <div>
      <nav className="w-full p-4 bg-white shadow-md flex justify-between items-center px-6 lg:px-16">
        {/* Logo */}
        <Link to="/" className="text-2xl lg:text-3xl font-extrabold">
          Festify
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex md:items-center gap-x-8">
          <Link to="/createEvent" className="btn-Text p-2 rounded-md text-base lg:text-lg">
            Create Event
          </Link>
          <Link to="/eventForYou" className="btn-Text p-2 rounded-md text-base lg:text-lg">
            Events for You
          </Link>
          {token && (
            <>
              {/* Dashboard Button */}
              <Link to="/managerDashboard" className="btn-Text p-2 rounded-md text-base lg:text-lg">
                Dashboard
              </Link>
              {/* Sign Out button */}
              <button
                onClick={() => setShowLogoutConfirm(true)} // Show confirmation modal
                className="btn-Outlined text-slate-600 font-normal ring-zinc-400 p-2 rounded-md text-base lg:text-lg"
              >
                Sign Out
              </button>
            </>
          )}
          {!token && (
            // Sign Up button if not logged in
            <Link to="/signup" className="btn-Outlined ring-zinc-400 p-2 rounded-md text-base lg:text-lg">
              Sign Up
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="hover:cursor-pointer focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg p-4">
          <div className="space-y-4">
            <Link to="/createEvent" onClick={toggleMenu}>
              <button className="btn-Text w-full text-left p-2 rounded-md">
                Create Event
              </button>
            </Link>
            <Link to="/eventForYou" onClick={toggleMenu}>
              <button className="btn-Text w-full text-left p-2 rounded-md">
                Events for You
              </button>
            </Link>
            {token && (
              <>
                {/* Dashboard Button for Mobile */}
                <Link to="/dashboard" onClick={toggleMenu}>
                  <button className="btn-Text w-full text-left p-2 rounded-md">
                    Dashboard
                  </button>
                </Link>
                {/* Sign Out button for Mobile */}
                <button
                  onClick={() => setShowLogoutConfirm(true)} // Show confirmation modal
                  className="btn-Outlined w-full text-left ring-zinc-400 p-2 rounded-md"
                >
                  Sign Out
                </button>
              </>
            )}
            {!token && (
              // Sign Up button for Mobile
              <Link to="/signup" onClick={toggleMenu}>
                <button className="btn-Outlined w-full text-left ring-zinc-400 p-2 rounded-md">
                  Sign Up
                </button>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed top-2 right-4 z-50 bg-white shadow-lg rounded-lg p-4 ring-1 ring-gray-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Are you sure you want to logout?
          </h3>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setShowLogoutConfirm(false)} // Close modal
              className="btn-Outlined ring-zinc-400 p-2 rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={handleSignOut} // Confirm logout
              className="btn-Blue p-2 rounded-md"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
