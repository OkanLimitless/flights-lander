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
        className="text-sky-600 font-bold flex items-center active-feedback hover:text-sky-700 transition"
        aria-label="Call customer service"
      >
        <div className="relative mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-30"></span>
          <FaPhone className="h-4 w-4 relative" />
        </div>
        <span className="whitespace-nowrap">+1 (866) 226-8984</span>
        <span className="ml-1 text-xs whitespace-nowrap bg-green-100 text-green-700 px-1 py-0.5 rounded font-medium">Toll-Free</span>
      </button>
    );
  }
  
  if (variant === 'secondary') {
    return (
      <button 
        onClick={handleCall}
        className="bg-white border border-sky-600 text-sky-600 hover:bg-sky-50 font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 active:scale-[0.98] w-full flex items-center justify-center active-feedback transition shadow-sm"
        aria-label={text}
      >
        <FaPhoneAlt className="h-4 w-4 mr-2" />
        {text}
        <span className="ml-2 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">Toll-Free</span>
      </button>
    );
  }
  
  return (
    <button 
      onClick={handleCall}
      className="bg-gradient-to-r from-green-600 to-sky-600 text-white font-bold py-3.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 active:scale-[0.98] w-full flex items-center justify-center active-feedback transition shadow-md hover:shadow-lg"
      aria-label={text}
    >
      <div className="relative mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-30"></span>
        <FaHeadset className="h-5 w-5 relative" />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-base">{text}</span>
        <span className="text-xs font-normal opacity-90">+1 (866) 226-8984 • Toll-Free</span>
      </div>
    </button>
  );
};

export default CallToAction; 