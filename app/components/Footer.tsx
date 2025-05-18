'use client';

import React from 'react';
import CallToAction from './CallToAction';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 mt-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-600 mb-4 text-center">TRUSTED BY MAJOR AIRLINES</h3>
          <div className="grid grid-cols-5 gap-2">
            {/* Airline logos */}
            {['DELTA', 'UNITED', 'AMERICAN', 'SOUTHWEST', 'JETBLUE'].map((airline, index) => (
              <div 
                key={index} 
                className="h-10 flex items-center justify-center bg-gray-50 rounded-md px-1 border border-gray-100"
              >
                <div className="text-gray-600 text-xs font-bold">{airline}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-blue-50 to-white p-3 rounded-full shadow-sm mb-2 border border-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">Secure Booking</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-green-50 to-white p-3 rounded-full shadow-sm mb-2 border border-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">Best Price Guarantee</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-yellow-50 to-white p-3 rounded-full shadow-sm mb-2 border border-yellow-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">24/7 Support</span>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6 text-center border border-blue-100">
            <p className="font-bold text-blue-800 mb-2">Need Help? Contact Us:</p>
            <div className="inline-block">
              <CallToAction variant="inline" />
            </div>
            <p className="text-xs text-blue-600 mt-1 font-medium">Travel agents available 24/7</p>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          <p className="mb-3">
            &copy; {new Date().getFullYear()} FlightsDeal. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition">Contact</a>
          </div>
          <p className="text-gray-400 text-[10px] max-w-xs mx-auto">
            This site is not affiliated with any airline. Prices shown may vary and are subject to availability. Additional terms may apply.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 