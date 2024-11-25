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
    <div className="py-16 px-6 sm:px-12 w-full lg:px-24 bg-gray-50">
      {/* Notification Message */}
      {showNotification && (
        <div
          className={`fixed top-5 right-5 text-white py-3 px-6 rounded-lg shadow-lg transition-opacity duration-300 ${submitted ? "bg-green-500" : "bg-red-500"}`}
        >
          <span>{result}</span>
        </div>
      )}

      {/* Heading */}
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  text-center mb-10">
        Contact Me
      </h1>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
        {/* Left - Contact Details */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-8 px-4">
          <h2 className="text-2xl sm:text-3xl text-center font-semibold">
            Let's discuss something <span className="text-blue-500">Cool</span> Together
          </h2>

          <div className="space-y-6 text-center">
            <div className="text-lg flex justify-center items-center">
              <IoIosMail className="mr-3 text-orange-500" />
              <a href="mailto:aditya895754@gmail.com" className="hover:text-blue-500 transition-all">
                aditya895754@gmail.com
              </a>
            </div>
            <div className="text-lg flex justify-center items-center">
              <IoIosCall className="mr-3 text-cyan-400" />
              <a href="tel:8957545504" className="hover:text-blue-500 transition-all">
                8957545504
              </a>
            </div>
            <div className="text-lg flex justify-center items-center">
              <FaLocationDot className="mr-3 text-blue-600" />
              <span>UP 52 Deoria (Uttar Pradesh)</span>
            </div>
          </div>

          <div className="gap-6 flex justify-center text-2xl">
            <a
              className="text-blue-500 hover:text-blue-700 transition-all"
              href="https://www.linkedin.com/in/aditya-tiwari-31b785250/"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-gray-800 hover:text-gray-900 transition-all"
              href="https://github.com/Adityatitu01"
            >
              <FaGithub />
            </a>
            <a
              className="text-cyan-500 hover:text-cyan-600 transition-all"
              href="https://x.com/AdityaTituu"
            >
              <FaTwitter />
            </a>
            <a
              className="text-yellow-500 hover:text-yellow-600 transition-all"
              href="https://leetcode.com/u/adityatitu01/"
            >
              <SiLeetcode />
            </a>
            <a
              className="text-pink-500 hover:text-pink-600 transition-all"
              href="#"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full lg:w-1/2 flex justify-center rounded-xl py-8 px-4">
          <form
            onSubmit={onSubmit}
            className="max-w-lg w-full bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
              Get in Touch
            </h2>
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                rows="4"
                name="message"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all"
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
