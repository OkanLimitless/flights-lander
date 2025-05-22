'use client';

import React from 'react';
import CallToAction from './CallToAction';
import { FaPlane, FaStar, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-lg">
      <div className="max-w-6xl mx-auto p-3">
        <div className="flex items-center justify-between">
          {/* Logo and brand */}
          <div className="flex items-center">
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-600 to-blue-700 flex items-center justify-center text-white shadow-md overflow-hidden">
                <FaPlane className="h-5 w-5 transform -rotate-45" />
              </div>
              <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full flex items-center justify-center">
                <FaCheckCircle className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="ml-2.5">
              <div className="flex items-center">
                <span className="font-bold text-xl text-gray-800">FlightsDeal</span>
                <div className="ml-1.5 bg-sky-50 px-1.5 py-0.5 rounded text-[10px] font-semibold text-sky-700 border border-sky-100">OFFICIAL</div>
              </div>
              <div className="text-[10px] -mt-0.5 text-green-600 font-medium flex items-center">
                <FaShieldAlt className="h-2.5 w-2.5 mr-1" />
                <span>Best Price Guarantee • Trusted by 500K+ Travelers</span>
              </div>
            </div>
          </div>
          
          {/* Right side with ratings and phone */}
          <div className="flex items-center">
            {/* Trust badge */}
            <div className="hidden md:flex mr-4 items-center px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg">
              <div className="flex items-center mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="h-3 w-3 text-amber-400" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-800">4.9/5 Rating</span>
                <span className="text-[10px] text-gray-500">4,832 verified reviews</span>
              </div>
            </div>
            
            {/* Call to action */}
            <div className="bg-white shadow-sm rounded-lg border border-gray-100 p-2">
              <CallToAction variant="inline" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 