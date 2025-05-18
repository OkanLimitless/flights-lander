'use client';

import React from 'react';
import CallToAction from './CallToAction';
import { FaShieldAlt, FaMoneyBillWave, FaClock, FaCheckCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-600 mb-4 text-center">TRUSTED BY MAJOR AIRLINES</h3>
          <div className="grid grid-cols-5 gap-3">
            {/* Use text for airline logos instead of potentially problematic SVGs */}
            {['DELTA', 'UNITED', 'AMERICAN', 'SOUTHWEST', 'JETBLUE'].map((airline, index) => (
              <div 
                key={index} 
                className="h-12 flex items-center justify-center bg-gradient-subtle rounded-md px-1 border border-gray-200 shadow-soft"
              >
                <div className="text-gray-700 text-xs font-bold">{airline}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-sky-50 to-white p-3 rounded-full shadow-soft mb-2 border border-sky-100">
                <FaShieldAlt className="h-6 w-6 text-sky-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Secure Booking</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-green-50 to-white p-3 rounded-full shadow-soft mb-2 border border-green-100">
                <FaMoneyBillWave className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Best Price Guarantee</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-amber-50 to-white p-3 rounded-full shadow-soft mb-2 border border-amber-100">
                <FaClock className="h-6 w-6 text-amber-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">24/7 Support</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-lg p-5 mb-6 text-center border border-sky-100 shadow-soft">
            <p className="font-bold text-sky-800 mb-2">Need Help? Contact Us:</p>
            <div className="inline-block">
              <CallToAction variant="inline" />
            </div>
            <p className="text-xs text-sky-600 mt-1 font-medium">Travel agents available 24/7</p>
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