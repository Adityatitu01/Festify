import React, { useState } from "react";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Sending...");
    setSubmitted(false);
    setShowNotification(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "7a14e447-b3d7-46d0-adc5-ba2480e01589");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setIsSending(false);

    if (data.success) {
      setResult("Your message was sent successfully!");
      setSubmitted(true);
      event.target.reset();
    } else {
      setResult("There was an error submitting the form.");
    }

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="py-8 px-6 sm:px-12 w-full lg:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Notification Message */}
      {showNotification && (
        <div
          className={`fixed top-5 right-5 text-white py-3 px-6 rounded-lg shadow-lg transition-opacity duration-300 ${
            submitted ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <span>{result}</span>
        </div>
      )}

      {/* Heading */}
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center mb-8 text-amber-400">
        Contact Me
      </h1>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        {/* Left - Contact Details */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 px-4">
          <h2 className="text-3xl sm:text-4xl text-center font-semibold text-yellow-400">
            Let's discuss something{" "}
            <span className="text-teal-400">Awesome</span> Together
          </h2>

          <div className="space-y-4 text-center">
            <div className="text-lg flex justify-center items-center transition-transform transform hover:scale-105">
              <IoIosMail className="mr-3 text-teal-400" />
              <a
                href="mailto:aditya895754@gmail.com"
                className="hover:text-yellow-400 transition-all"
              >
                aditya895754@gmail.com
              </a>
            </div>
            <div className="text-lg flex justify-center items-center transition-transform transform hover:scale-105">
              <IoIosCall className="mr-3 text-teal-400" />
              <a
                href="tel:8957545504"
                className="hover:text-yellow-400 transition-all"
              >
                8957545504
              </a>
            </div>
            <div className="text-lg flex justify-center items-center transition-transform transform hover:scale-105">
              <FaLocationDot className="mr-3 text-teal-400" />
              <span>UP 52 Deoria (Uttar Pradesh)</span>
            </div>
          </div>

          <div className="gap-5 flex justify-center text-3xl">
            <a
              className="text-teal-400 hover:text-teal-500 transition-all transform hover:scale-110"
              href="https://www.linkedin.com/in/aditya-tiwari-31b785250/"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-gray-100 hover:text-gray-200 transition-all transform hover:scale-110"
              href="https://github.com/Adityatitu01"
            >
              <FaGithub />
            </a>
            <a
              className="text-teal-400 hover:text-teal-500 transition-all transform hover:scale-110"
              href="https://x.com/AdityaTituu"
            >
              <FaTwitter />
            </a>
            <a
              className="text-yellow-400 hover:text-yellow-500 transition-all transform hover:scale-110"
              href="https://leetcode.com/u/adityatitu01/"
            >
              <SiLeetcode />
            </a>
            <a
              className="text-pink-400 hover:text-pink-500 transition-all transform hover:scale-110"
              href="#"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full lg:w-1/2 flex justify-center rounded-xl py-6 px-4">
          <form
            onSubmit={onSubmit}
            className="max-w-lg w-full bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-center text-yellow-400">
              Get in Touch
            </h2>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold text-yellow-300 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full p-3 bg-teal-800 border border-teal-600 text-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold text-yellow-300 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-3 bg-teal-800 border border-teal-600 text-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-lg font-semibold text-yellow-300 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full p-3 bg-teal-800 border border-teal-600 text-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-shadow"
                id="message"
                rows="4"
                name="message"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              className="w-full py-3 bg-yellow-500 text-teal-900 rounded-lg font-semibold hover:bg-yellow-600 transition-all transform hover:scale-105"
              type="submit"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
