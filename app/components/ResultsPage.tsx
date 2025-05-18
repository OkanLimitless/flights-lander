'use client';

import React, { useState, useEffect } from 'react';
import CallToAction from './CallToAction';
import Image from 'next/image';

const ResultsPage = () => {
  const [loading, setLoading] = useState(true);
  const [showCallPrompt, setShowCallPrompt] = useState(false);
  
  // Fake flight results
  const flights = [
    {
      id: 1,
      airline: 'Delta Airlines',
      price: '$489',
      originalPrice: '$639',
      duration: '2h 45m',
      departure: '8:30 AM',
      departureCode: 'JFK',
      arrival: '11:15 AM',
      arrivalCode: 'LAX',
      stops: 'Nonstop',
      logo: '/delta-logo.svg'
    },
    {
      id: 2,
      airline: 'American Airlines',
      price: '$512',
      originalPrice: '$689',
      duration: '3h 10m',
      departure: '11:45 AM',
      departureCode: 'JFK',
      arrival: '2:55 PM',
      arrivalCode: 'LAX',
      stops: '1 stop (ATL)',
      logo: '/american-logo.svg'
    },
    {
      id: 3,
      airline: 'United Airlines',
      price: '$472',
      originalPrice: '$599',
      duration: '3h 30m',
      departure: '2:15 PM',
      departureCode: 'JFK',
      arrival: '5:45 PM',
      arrivalCode: 'LAX',
      stops: 'Nonstop',
      logo: '/united-logo.svg'
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-700">Searching for the best flight deals across all major airlines...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      {showCallPrompt ? (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full animate-slide-up shadow-xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Exclusive Phone-Only Deals!</h3>
              <div className="relative mt-3 mx-auto max-w-max">
                <div className="absolute -top-3 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">SAVE 30%</div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 mb-2 text-center shadow-sm">
                  <p className="text-lg font-bold text-blue-700">+1 (855) 792-0748</p>
                  <p className="text-xs text-blue-600 mt-1 font-medium">Travel agents available 24/7</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-center">
              We found even better deals that are only available by phone! Call now to access exclusive discounts up to 30% off the listed prices.
            </p>
            <div className="mb-2">
              <CallToAction text="Call Now For Better Deals" />
            </div>
            <button 
              onClick={() => setShowCallPrompt(false)}
              className="text-sm text-gray-500 w-full text-center mt-3 py-2"
            >
              Continue without calling
            </button>
          </div>
        </div>
      ) : null}

      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Available Flights</h2>
          <div className="bg-blue-100 rounded-full px-2.5 py-1 text-xs font-medium text-blue-800">
            3 results
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">Sorted by best value • JFK → LAX</p>
      </div>

      {flights.map(flight => (
        <div key={flight.id} className="bg-white rounded-lg shadow-md p-4 mb-4 card-hover">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-2 overflow-hidden flex items-center justify-center">
                {/* Use text fallback if image fails to load */}
                <div className="text-sm font-bold text-gray-500">{flight.airline.charAt(0)}</div>
              </div>
              <span className="font-bold text-gray-800">{flight.airline}</span>
            </div>
            <div className="text-right">
              <div className="flex items-baseline">
                <span className="text-xs line-through text-gray-400 mr-1">{flight.originalPrice}</span>
                <span className="text-lg font-bold text-blue-600">{flight.price}</span>
              </div>
              <div className="text-xs text-green-600 font-medium">Save ${parseInt(flight.originalPrice.substring(1)) - parseInt(flight.price.substring(1))}</div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <span className="text-lg font-semibold text-gray-800">{flight.departure}</span>
              <div className="text-xs text-gray-500 font-medium">{flight.departureCode}</div>
            </div>
            
            <div className="flex-1 px-4">
              <div className="text-xs text-center text-gray-500 font-medium mb-1">{flight.duration}</div>
              <div className="flex items-center">
                <div className="h-0.5 flex-1 bg-gray-300"></div>
                <div className="mx-1 w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="h-0.5 flex-1 bg-gray-300"></div>
              </div>
              <div className="text-xs text-center text-gray-500 mt-1">{flight.stops}</div>
            </div>
            
            <div className="text-center">
              <span className="text-lg font-semibold text-gray-800">{flight.arrival}</span>
              <div className="text-xs text-gray-500 font-medium">{flight.arrivalCode}</div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 active-feedback transition">
              Select
            </button>
            <button className="px-3 py-2.5 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 active-feedback transition">
              Details
            </button>
          </div>
        </div>
      ))}

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 mb-6 shadow-sm border border-blue-100">
        <div className="flex items-start">
          <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-blue-800 text-lg">Looking for better deals?</h3>
            <p className="text-blue-700 text-sm mt-1 mb-3">
              Our travel agents have access to exclusive discounts not available online. Call now and save up to 30%!
            </p>
            <div>
              <CallToAction variant="secondary" text="Call +1 (855) 792-0748" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 