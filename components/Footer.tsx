// components/Footer.tsx

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import social icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-4">My Oneway Cab</h2>
          <p className="text-xl font-bold mt-4 truncate">At My Oneway Cab, we’re more than just a cab rental service <br />  we’re your ticket to hassle-free travel <br /> With a commitment to reliability, safety, and affordability <br /> we’re here to make every journey a memorable one.</p>
        
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
        <ul className='flex space-x-6 mt-4 md:mt-0'>
            <li>Phone: <a href="tel:9284747083" className="hover:underline">9284747083</a></li>
            <li>Email: <a href="mailto:shivcabservice01@gmail.com" className="hover:underline">shivcabservice01@gmail.com</a></li>
       
          <a href="#" aria-label="Facebook" className="hover:text-gray-400"><FaFacebook size={24} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400"><FaInstagram size={24} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400"><FaTwitter size={24} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-400"><FaLinkedin size={24} /></a>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-center py-4 border-t border-gray-700">
        <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved. Designed by <a href="https://digihand.co.in" className="hover:underline">digihand.co.in</a></p>
      </div>
    </footer>
  );
};

export default Footer;

