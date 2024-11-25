import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-teal-800 text-gray-200 py-6">
      {/* Footer Content Wrapper */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        {/* Logo and Tagline */}
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-extrabold text-yellow-400">Festify</h1>
          <p className="text-gray-300 text-sm">Celebrate every moment with us!</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link
            className="text-gray-300 hover:text-yellow-400 transition-colors"
            to="/about"
            target="_top"
          >
            About
          </Link>
          <Link
            className="text-gray-300 hover:text-yellow-400 transition-colors"
            to="/careers"
            target="_top"
          >
            Careers
          </Link>
          <Link
            className="text-gray-300 hover:text-yellow-400 transition-colors"
            to="/support"
            target="_top"
          >
            Support
          </Link>
          <Link
            className="text-gray-300 hover:text-yellow-400 transition-colors"
            to="/terms+of+service"
            target="_top"
          >
            Terms
          </Link>
          <Link
            className="text-gray-300 hover:text-yellow-400 transition-colors"
            to="/privacy"
            target="_top"
          >
            Privacy
          </Link>
          <Link
            className="text-gray-300 hover:text-yellow-400 transition-colors"
            to="/contact+us"
            target="_top"
          >
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/5_g.one_5/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition-colors text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/jag-jeevan-ricky-8099ab246/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors text-lg"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GOne0816"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-500 transition-colors text-lg"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Festify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
