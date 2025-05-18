'use client';

import React from 'react';
import { FaPhone, FaPhoneAlt } from 'react-icons/fa';

interface CallToActionProps {
  variant?: 'primary' | 'secondary' | 'inline';
  text?: string;
}

const CallToAction = ({ 
  variant = 'primary',
  text = 'Call Now For Exclusive Deals'
}: CallToActionProps) => {
  const handleCall = () => {
    window.location.href = `tel:+18557920748`;
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
        +1 (855) 792-0748
      </button>
    );
  }
  
  if (variant === 'secondary') {
    return (
      <button 
        onClick={handleCall}
        className="bg-white border border-sky-600 text-sky-600 hover:bg-sky-50 font-bold py-2.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 active:scale-[0.98] w-full flex items-center justify-center active-feedback transition shadow-sm"
        aria-label={text}
      >
        <FaPhoneAlt className="h-4 w-4 mr-2" />
        {text}
      </button>
    );
  }
  
  return (
    <button 
      onClick={handleCall}
      className="bg-gradient-primary text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 active:scale-[0.98] w-full flex items-center justify-center active-feedback transition shadow-md"
      aria-label={text}
    >
      <div className="relative mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-30"></span>
        <FaPhone className="h-5 w-5 relative" />
      </div>
      {text}
    </button>
  );
};

export default CallToAction; 