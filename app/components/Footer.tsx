'use client';

import React from 'react';
import CallToAction from './CallToAction';
import { FaShieldAlt, FaMoneyBillWave, FaClock, FaCheckCircle, FaStar, FaPhoneAlt, FaCreditCard, FaPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 mt-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h3 className="text-sm font-bold text-gray-600 mb-4 text-center">PARTNERED WITH ALL MAJOR AIRLINES</h3>
          <div className="grid grid-cols-5 gap-3">
            {['DELTA', 'UNITED', 'AMERICAN', 'SOUTHWEST', 'JETBLUE'].map((airline, index) => (
              <div 
                key={index} 
                className="h-12 flex items-center justify-center bg-gradient-to-r from-gray-50 to-white rounded-md px-1 border border-gray-200 shadow-sm"
              >
                <div className="flex items-center">
                  <FaPlane className="h-3 w-3 text-sky-600 mr-1" />
                  <div className="text-gray-700 text-xs font-bold">{airline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          {/* Google Review Badge */}
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm flex items-center">
              <div className="mr-3 bg-white p-2 rounded-full border border-gray-100 shadow-sm">
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-gray-800">
                  <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="h-4 w-4 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-800">4.9 stars on Google - 4,832 reviews</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-sky-50 to-white p-3 rounded-full shadow-sm mb-2 border border-sky-100">
                <FaShieldAlt className="h-6 w-6 text-sky-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Lowest Price Guarantee</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-green-50 to-white p-3 rounded-full shadow-sm mb-2 border border-green-100">
                <FaMoneyBillWave className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">Exclusive Phone Deals</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-b from-amber-50 to-white p-3 rounded-full shadow-sm mb-2 border border-amber-100">
                <FaClock className="h-6 w-6 text-amber-600" />
              </div>
              <span className="text-xs text-gray-600 font-medium">24/7 Expert Support</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-sky-50 rounded-lg p-5 mb-6 text-center border border-sky-100 shadow-md">
            <div className="mb-3 inline-flex items-center justify-center bg-white p-2 rounded-full shadow-sm">
              <FaPhoneAlt className="h-5 w-5 text-sky-600" />
            </div>
            <p className="font-bold text-gray-800 text-lg mb-2">Speak to a Travel Expert Now:</p>
            <div className="mb-2">
              <CallToAction variant="primary" text="Call Now for Exclusive Phone Deals" />
            </div>
            <div className="flex justify-center items-center gap-2 mt-3">
              <FaCheckCircle className="h-3 w-3 text-green-600" />
              <p className="text-xs text-green-600 font-medium">SAVE up to 30% compared to online prices</p>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((paymentMethod) => (
                <div key={paymentMethod} className="bg-white p-1 rounded shadow-sm">
                  <FaCreditCard className="h-4 w-4 mx-auto text-gray-400" />
                </div>
              ))}
            </div>
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