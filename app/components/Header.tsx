'use client';

import React from 'react';
import CallToAction from './CallToAction';

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-md">
      <div className="flex items-center justify-between max-w-md mx-auto p-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11.43a1 1 0 00-.725-.962l-5-1.428a1 1 0 01.725-1.962l15 4.286a1 1 0 01-.725 1.962l-5-1.429A1 1 0 008 13.571v4.143a1 1 0 00.894.553h2.211a1 1 0 00.894-.553l7-14a1 1 0 00-1.788 0l-7 14a1 1 0 01-1.789 0l-7-14a1 1 0 00-1.789 0l7 14a1 1 0 001.789 0z" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-xl text-blue-700">FlightsDeal</span>
            <div className="text-[10px] -mt-1 text-blue-500 font-medium">Best Rates Guaranteed</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-50 p-1.5 rounded-lg border border-blue-100 mr-1">
            <CallToAction variant="inline" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 