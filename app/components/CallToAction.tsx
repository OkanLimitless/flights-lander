'use client';

import React from 'react';

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
        className="text-blue-600 font-bold flex items-center active-feedback hover:text-blue-700 transition"
        aria-label="Call customer service"
      >
        <div className="relative mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 relative" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        +1 (855) 792-0748
      </button>
    );
  }
  
  if (variant === 'secondary') {
    return (
      <button 
        onClick={handleCall}
        className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 active:scale-[0.98] w-full flex items-center justify-center active-feedback transition shadow-sm"
        aria-label={text}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        {text}
      </button>
    );
  }
  
  return (
    <button 
      onClick={handleCall}
      className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 active:scale-[0.98] w-full flex items-center justify-center active-feedback transition shadow-md"
      aria-label={text}
    >
      <div className="relative mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-30"></span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      </div>
      {text}
    </button>
  );
};

export default CallToAction; 