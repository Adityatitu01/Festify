import React from 'react';
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

const contactInfo = () => {
  return (
    <div>
       <div className='space-y-4 text-center lg:hidden '>
            <div className='text-lg'>
              <IoIosMail className='inline mr-2 text-orange-500' /> 
              <a href="mailto:aditya895754@gmail.com">aditya895754@gmail.com</a>
            </div>
            <div className='text-lg'>
              <IoIosCall className='inline mr-2 text-cyan-400' /> 
              <a href="tel:8957545504">8957545504</a>
            </div>
            <div className='text-lg'>
              <FaLocationDot className='inline mr-2 text-blue-600' /> 
              <span>UP 52 Deoria (Uttar Pradesh)</span>
            </div>
          </div>
          <div className=" gap-4 lg:hidden flex justify-center items-center text-center py-4  text-2xl">
            <a className='text-blue-500' href="https://www.linkedin.com/in/aditya-tiwari-31b785250/"><FaLinkedin /></a>
            <a  href="https://github.com/Adityatitu01"><FaGithub /></a>
            <a className='text-cyan-500' href="https://x.com/AdityaTituu"><FaTwitter /></a>
            <a className='text-yellow-500' href="https://leetcode.com/u/adityatitu01/"><SiLeetcode /></a>
            <a className='text-pink-500' href="#"><FaInstagram /></a>
          </div>
        </div>
  )
}

export default contactInfo
