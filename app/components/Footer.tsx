'use client';

import React from 'react';
import CallToAction from './CallToAction';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h3 className="text-sm font-bold text-gray-600 mb-3 text-center">TRUSTED BY MAJOR AIRLINES</h3>
          <div className="flex justify-between items-center">
            {/* Simple airline logo representations */}
            <div className="text-gray-500 text-xs font-bold">DELTA</div>
            <div className="text-gray-500 text-xs font-bold">AMERICAN</div>
            <div className="text-gray-500 text-xs font-bold">UNITED</div>
            <div className="text-gray-500 text-xs font-bold">SOUTHWEST</div>
            <div className="text-gray-500 text-xs font-bold">JETBLUE</div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="bg-white p-2 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="bg-white p-2 rounded-full shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-600 mb-4">
            <p className="font-bold mb-2">Need Help? Contact Us:</p>
            <CallToAction variant="inline" />
            <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-500">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} FlightsDeal. All rights reserved.
          </p>
          <div className="flex justify-center space-x-3">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700">Terms of Service</a>
            <a href="#" className="hover:text-gray-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 