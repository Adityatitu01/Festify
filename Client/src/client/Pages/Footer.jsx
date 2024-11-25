import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="space-y-4 w-full py-6 bg-zinc-900 text-white">
        <h1 className="px-4 md:px-6 text-2xl lg:text-3xl font-extrabold">
          Festify
        </h1>
        <div className="flex justify-between px-4 md:px-6 text-start">
          <div className="text-start flex max-sm:flex-col-reverse">
            <p>&copy; {new Date().getFullYear()} Finesty. All rights reserved.</p>
            <div className="flex max-sm:flex-col max-sm:gap-2 gap-8 px-6 max-sm:px-0 max-sm:pb-4">
              <Link className="hover:underline" to="/about" target="_top">
                About
              </Link>
              <Link className="hover:underline" to="/careers" target="_top">
                Careers
              </Link>
              <Link className="hover:underline" to="/support" target="_top">
                Support
              </Link>
              <Link className="hover:underline" to="/terms+of+service" target="_top">
                Terms of Service
              </Link>
              <Link className="hover:underline" to="/privacy" target="_top">
                Privacy
              </Link>
              <Link className="hover:underline" to="/contact+us" target="_top">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex gap-4 max-sm:items-end">
            <a
              href="https://www.instagram.com/5_g.one_5/"
              aria-label="Link for my Instagram ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jag-jeevan-ricky-8099ab246/"
              aria-label="Link for my linkedin ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="size-5" />
            </a>
            <a
              href="https://github.com/GOne0816"
              aria-label="Link for my github ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
