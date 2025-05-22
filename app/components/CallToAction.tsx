'use client';

import React from 'react';
import { FaPhone, FaPhoneAlt, FaHeadset } from 'react-icons/fa';

interface CallToActionProps {
  variant?: 'primary' | 'secondary' | 'inline';
  text?: string;
}

const CallToAction = ({ 
  variant = 'primary',
  text = 'Call Now For Exclusive Deals'
}: CallToActionProps) => {
  const handleCall = () => {
    window.location.href = `tel:+18662268984`;
  };

  if (variant === 'inline') {
    return (
      <button 
        onClick={handleCall}
        className="flex items-center gap-2 hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-md"
        aria-label="Call customer service"
      >
        <div className="relative flex items-center justify-center bg-sky-50 p-1.5 rounded-md border border-sky-100">
          <span className="absolute animate-ping w-3 h-3 rounded-full bg-sky-400 opacity-30"></span>
          <FaPhone className="h-3.5 w-3.5 text-sky-600 relative" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-bold text-gray-800 leading-tight">+1 (866) 226-8984</span>
          <div className="flex items-center">
            <span className="text-[10px] text-green-600 font-semibold">Toll-Free</span>
            <span className="mx-1 text-gray-300">•</span>
            <span className="text-[10px] text-gray-500">24/7 Support</span>
          </div>
        </div>
      </button>
    );
  }
  
  if (variant === 'secondary') {
    return (
      <button 
        onClick={handleCall}
        className="bg-white border border-sky-600 text-sky-700 hover:bg-sky-50 font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 active:scale-[0.98] w-full flex items-center justify-center transition shadow-sm group"
        aria-label={text}
      >
        <div className="mr-2 bg-sky-100 rounded-full p-1.5 group-hover:bg-sky-200 transition">
          <FaPhoneAlt className="h-3.5 w-3.5 text-sky-600" />
        </div>
        <div className="flex flex-col">
          <span>{text}</span>
          <span className="text-xs font-normal text-sky-600">Toll-Free • Instant Quote</span>
        </div>
      </button>
    );
  }
  
  return (
    <button 
      onClick={handleCall}
      className="relative bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold py-3.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 active:scale-[0.98] w-full flex items-center justify-center transition-all shadow-md hover:shadow-lg overflow-hidden group"
      aria-label={text}
    >
      {/* Background animation effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex items-center">
        <div className="relative mr-3 bg-white/20 p-2 rounded-full">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-30"></span>
          <FaHeadset className="h-5 w-5 relative" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-base font-bold">{text}</span>
          <div className="flex items-center">
            <span className="text-xs font-medium text-sky-100">+1 (866) 226-8984</span>
            <span className="mx-1.5 text-sky-300">•</span>
            <span className="text-xs font-medium text-sky-100">Toll-Free</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CallToAction; 