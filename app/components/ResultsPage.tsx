'use client';

import React, { useState, useEffect } from 'react';
import CallToAction from './CallToAction';

const ResultsPage = () => {
  const [loading, setLoading] = useState(true);
  const [showCallPrompt, setShowCallPrompt] = useState(false);
  
  // Fake flight results
  const flights = [
    {
      id: 1,
      airline: 'Delta Airlines',
      price: '$489',
      duration: '2h 45m',
      departure: '8:30 AM',
      arrival: '11:15 AM',
      stops: 'Nonstop'
    },
    {
      id: 2,
      airline: 'American Airlines',
      price: '$512',
      duration: '3h 10m',
      departure: '11:45 AM',
      arrival: '2:55 PM',
      stops: '1 stop (ATL)'
    },
    {
      id: 3,
      airline: 'United Airlines',
      price: '$472',
      duration: '3h 30m',
      departure: '2:15 PM',
      arrival: '5:45 PM',
      stops: 'Nonstop'
    }
  ];

  useEffect(() => {
    // Simulate loading results
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // After showing results for a bit, show the call prompt
    const promptTimer = setTimeout(() => {
      setShowCallPrompt(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(promptTimer);
    };
  }, []);



  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-6 min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-700">Searching for the best flight deals across all major airlines...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {showCallPrompt ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Exclusive Phone-Only Deals!</h3>
              <div className="mt-2 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              We found even better deals that are only available by phone! Call now to access exclusive discounts up to 30% off the listed prices.
            </p>
            <div className="bg-gray-100 rounded-lg p-3 mb-4 text-center">
              <p className="text-lg font-bold text-blue-600">+1 (855) 792-0748</p>
              <p className="text-xs text-gray-500 mt-1">Travel agents available 24/7</p>
            </div>
            <CallToAction text="Call Now For Better Deals" />
          </div>
        </div>
      ) : null}

      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Available Flights</h2>
        <p className="text-sm text-gray-600 mb-2">3 results found • Sorted by best value</p>
      </div>

      {flights.map(flight => (
        <div key={flight.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-gray-800">{flight.airline}</span>
            <span className="text-lg font-bold text-blue-600">{flight.price}</span>
          </div>
          
          <div className="flex justify-between items-center mb-3">
            <div>
              <span className="text-lg font-semibold">{flight.departure}</span>
              <div className="text-xs text-gray-600">JFK</div>
            </div>
            
            <div className="flex-1 px-4">
              <div className="text-xs text-center text-gray-600">{flight.duration}</div>
              <div className="flex items-center">
                <div className="h-0.5 flex-1 bg-gray-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mx-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11.43a1 1 0 00-.725-.962l-5-1.428a1 1 0 01.725-1.962l15 4.286a1 1 0 01-.725 1.962l-5-1.429A1 1 0 008 13.571v4.143a1 1 0 00.894.553h2.211a1 1 0 00.894-.553l7-14a1 1 0 00-1.788 0l-7 14a1 1 0 01-1.789 0l-7-14a1 1 0 00-1.789 0l7 14a1 1 0 001.789 0z" />
                </svg>
                <div className="h-0.5 flex-1 bg-gray-300"></div>
              </div>
              <div className="text-xs text-center text-gray-600">{flight.stops}</div>
            </div>
            
            <div>
              <span className="text-lg font-semibold">{flight.arrival}</span>
              <div className="text-xs text-gray-600">LAX</div>
            </div>
          </div>
          
          <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Select
          </button>
        </div>
      ))}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <div className="flex items-start">
          <div className="bg-blue-100 rounded-full p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-blue-800">Looking for better deals?</h3>
            <p className="text-blue-600 text-sm mt-1">
              Call our travel experts for exclusive discounts not available online!
            </p>
            <div className="mt-3">
              <CallToAction variant="secondary" text="Call +1 (855) 792-0748" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 