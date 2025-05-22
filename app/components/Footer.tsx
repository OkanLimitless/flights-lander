'use client';

import React from 'react';
import CallToAction from './CallToAction';
import { FaShieldAlt, FaMoneyBillWave, FaClock, FaCheckCircle, FaStar, FaPhoneAlt, FaCreditCard, FaPlane, FaLock, FaHeadset, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Trust indicators and partners */}
        <div className="mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-sky-50 p-2 rounded-full border border-sky-100">
              <FaPlane className="h-5 w-5 text-sky-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 ml-3">Official Airline Partner Network</h3>
          </div>
          
          <div className="grid grid-cols-5 gap-3 max-w-3xl mx-auto mb-8">
            {['DELTA', 'UNITED', 'AMERICAN', 'SOUTHWEST', 'JETBLUE'].map((airline, index) => (
              <div 
                key={index} 
                className="h-14 flex items-center justify-center bg-white rounded-lg px-2 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center">
                  <div className="bg-gray-50 p-1.5 rounded-md mr-2">
                    <FaPlane className="h-3.5 w-3.5 text-sky-600" />
                  </div>
                  <div className="text-gray-700 text-sm font-bold">{airline}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Credibility indicators */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-sky-50 p-1.5 rounded-full border border-sky-100 mr-2">
                <FaShieldAlt className="h-4 w-4 text-sky-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">Price Match Promise</span>
            </div>
            
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-green-50 p-1.5 rounded-full border border-green-100 mr-2">
                <FaLock className="h-4 w-4 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">Secure Booking</span>
            </div>
            
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
              <div className="bg-amber-50 p-1.5 rounded-full border border-amber-100 mr-2">
                <FaHeadset className="h-4 w-4 text-amber-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-slate-50 to-sky-50 rounded-xl border border-sky-100 shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <FaPhone className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center md:text-left md:flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Get the Lowest Price Guaranteed</h3>
                  <p className="text-sm text-gray-600 mb-1">Our travel experts can find you better deals than online</p>
                  
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="flex mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} className="h-3.5 w-3.5 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">Based on <span className="font-semibold">4,832</span> verified reviews</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-start">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-1">Exclusive Phone-Only Deals</p>
                      <p className="text-xs text-gray-600">Save up to 30% on flights not available online</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-start">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-800 mb-1">Personalized Service</p>
                      <p className="text-xs text-gray-600">Expert agents help find your perfect flight</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="max-w-md mx-auto">
                <CallToAction text="Call Now for Exclusive Phone Deals" />
              </div>
              
              <div className="flex justify-center items-center gap-3 mt-5">
                <div className="bg-white p-1.5 rounded shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-5 w-auto" />
                </div>
                <div className="bg-white p-1.5 rounded shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5 w-auto" />
                </div>
                <div className="bg-white p-1.5 rounded shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-5 w-auto" />
                </div>
                <div className="bg-white p-1.5 rounded shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Discover_Card_logo.svg/1280px-Discover_Card_logo.svg.png" alt="Discover" className="h-5 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer links and info */}
        <div className="border-t border-gray-100 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-3">About Us</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-600 hover:text-sky-600 transition">Our Company</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-sky-600 transition">Careers</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-sky-600 transition">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-3">Customer Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-600 hover:text-sky-600 transition">Help Center</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-sky-600 transition">Contact Us</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-sky-600 transition">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-xs text-gray-600 hover:text-sky-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-sky-600 transition">Terms of Service</a></li>
                <li><a href="#" className="text-xs text-gray-600 hover:text-sky-600 transition">Cancellation Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-gray-800 mb-3">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-xs text-gray-600"><FaPhone className="h-3 w-3 mr-2 text-sky-600" /> +1 (866) 226-8984</li>
                <li className="flex items-center text-xs text-gray-600"><FaHeadset className="h-3 w-3 mr-2 text-sky-600" /> 24/7 Customer Support</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-100 pt-6">
            <p className="text-xs text-gray-500 mb-2">
              &copy; {new Date().getFullYear()} FlightsDeal. All rights reserved.
            </p>
            <p className="text-[10px] text-gray-400 max-w-lg mx-auto">
              This site is not affiliated with any airline. Prices shown may vary and are subject to availability. Additional terms may apply.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 