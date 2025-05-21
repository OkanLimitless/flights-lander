'use client';

import React from 'react';
import CallToAction from './CallToAction';
import { FaPlane, FaStar, FaShieldAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="flex items-center justify-between max-w-4xl mx-auto p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-600 to-sky-800 flex items-center justify-center text-white mr-2 shadow-sm">
            <FaPlane className="h-5 w-5" />
          </div>
          <div>
            <span className="font-bold text-xl text-sky-700">FlightsDeal</span>
            <div className="text-[10px] -mt-1 text-green-600 font-medium flex items-center">
              <FaShieldAlt className="h-2.5 w-2.5 mr-1" />
              Lowest Price Guaranteed
            </div>
          </div>
        </div>
        <div className="flex items-center bg-gradient-to-r from-sky-50 to-sky-100 px-3 py-2 rounded-lg border border-sky-200 shadow-sm">
          <div className="flex flex-col mr-3 items-end">
            <div className="flex items-center mb-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="h-2.5 w-2.5 text-amber-400" />
              ))}
              <span className="text-xs font-semibold text-gray-800 ml-1">4.9/5</span>
            </div>
            <span className="text-[10px] text-gray-500">4,832 reviews</span>
          </div>
          <CallToAction variant="inline" />
        </div>
      </div>
    </header>
  );
};

export default Header; 