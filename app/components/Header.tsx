'use client';

import React from 'react';
import CallToAction from './CallToAction';
import { FaPlane } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-soft">
      <div className="flex items-center justify-between max-w-4xl mx-auto p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-premium flex items-center justify-center text-white mr-2 shadow-sm">
            <FaPlane className="h-5 w-5" />
          </div>
          <div>
            <span className="font-bold text-xl text-sky-700">FlightsDeal</span>
            <div className="text-[10px] -mt-1 text-sky-500 font-medium">Best Rates Guaranteed</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-sky-50 p-1.5 rounded-lg border border-sky-100 mr-1">
            <CallToAction variant="inline" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 