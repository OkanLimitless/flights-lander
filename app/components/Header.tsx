'use client';

import React from 'react';
import CallToAction from './CallToAction';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md p-4">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center text-blue-600 font-bold text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>FlightsDeal</span>
        </div>
        <div>
          <CallToAction variant="inline" />
        </div>
      </div>
    </header>
  );
};

export default Header; 