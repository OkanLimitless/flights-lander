'use client';

import React, { useState, useEffect } from 'react';
import CallToAction from './CallToAction';
import { FaPhoneAlt, FaInfoCircle, FaPlane, FaArrowRight, FaCheck, FaGift, FaStar, FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { generateFakeFlightResults, getAirportByCode } from '../data/airports';

interface FlightFormData {
  departureCode: string;
  departureName: string;
  destinationCode: string;
  destinationName: string;
  date: string;
  returnDate?: string;
  passengers: string;
  tripType: 'roundtrip' | 'oneway';
}

interface FlightResult {
  id: number;
  airline: string;
  price: string;
  originalPrice: string;
  duration: string;
  departure: string;
  departureCode: string;
  arrival: string;
  arrivalCode: string;
  stops: string;
  logo: string;
}

interface ResultsPageProps {
  searchData?: FlightFormData;
}

const ResultsPage = ({ searchData }: ResultsPageProps) => {
  const [loading, setLoading] = useState(true);
  const [showCallPrompt, setShowCallPrompt] = useState(false);
  const [hasClosedInitialPrompt, setHasClosedInitialPrompt] = useState(false);
  const [showFlightSelectionPrompt, setShowFlightSelectionPrompt] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<FlightResult | null>(null);
  const [flights, setFlights] = useState<FlightResult[]>([]);
  
  const departureAirport = searchData?.departureCode ? getAirportByCode(searchData.departureCode) : null;
  const destinationAirport = searchData?.destinationCode ? getAirportByCode(searchData.destinationCode) : null;
  
  // Calculate trip duration if roundtrip
  const tripDuration = (() => {
    if (searchData?.date && searchData?.returnDate && searchData.tripType === 'roundtrip') {
      const departureDate = new Date(searchData.date);
      const returnDate = new Date(searchData.returnDate);
      const diffTime = Math.abs(returnDate.getTime() - departureDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return null;
  })();
  
  // Format the display route
  const routeDisplay = searchData ? 
    `${departureAirport?.city || 'Origin'} (${searchData.departureCode}) → ${destinationAirport?.city || 'Destination'} (${searchData.destinationCode})` :
    'JFK → LAX';

  useEffect(() => {
    // Simulate loading results
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Generate flight results based on search data if available
      if (searchData?.departureCode && searchData?.destinationCode) {
        const generatedFlights = generateFakeFlightResults(
          searchData.departureCode,
          searchData.destinationCode
        );
        setFlights(generatedFlights);
      } else {
        // Fallback to default sample flights
        setFlights([
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
        ]);
      }
    }, 2000);

    // After showing results for a bit, show the call prompt
    const promptTimer = setTimeout(() => {
      setShowCallPrompt(true);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(promptTimer);
    };
  }, [searchData]);

  // Handle flight selection
  const handleFlightSelect = (flight: FlightResult) => {
    setSelectedFlight(flight);
    
    // If user previously declined the call prompt, show the flight selection prompt
    if (hasClosedInitialPrompt) {
      setShowFlightSelectionPrompt(true);
    } else {
      // Just show the call prompt if they haven't seen it yet
      setShowCallPrompt(true);
    }
  };

  // Handle closing the initial call prompt
  const closeInitialPrompt = () => {
    setShowCallPrompt(false);
    setHasClosedInitialPrompt(true);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-6 min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-600"></div>
        <p className="mt-4 text-gray-700">Searching for the best flight deals across all major airlines...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      {/* Initial Call Prompt */}
      {showCallPrompt ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-xl p-6 max-w-sm w-full shadow-floating"
          >
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 mb-4 shadow-sm">
                <FaPhoneAlt className="h-7 w-7 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Phone-Only Deals Available!</h3>
              <div className="relative mt-3 mx-auto max-w-max">
                <div className="absolute -top-3 -right-2 bg-gradient-premium text-white text-xs font-bold px-2 py-1 rounded-full">EXCLUSIVE</div>
                <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-lg p-3 mb-2 text-center shadow-sm">
                  <p className="text-lg font-bold text-sky-700">+1 (855) 792-0748</p>
                  <p className="text-xs text-sky-600 mt-1 font-medium">Travel agents available 24/7</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4 text-center">
              We found even better deals that are only available by phone! Call now to access exclusive offers not available online.
            </p>
            <div className="mb-2">
              <CallToAction text="Call Now For Better Deals" />
            </div>
            <button 
              onClick={closeInitialPrompt}
              className="text-sm text-gray-500 w-full text-center mt-3 py-2"
            >
              Continue without calling
            </button>
          </motion.div>
        </motion.div>
      ) : null}

      {/* Flight Selection Prompt - Shown when a user selects a flight after declining the initial call */}
      {showFlightSelectionPrompt && selectedFlight ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-xl p-6 max-w-sm w-full shadow-floating"
          >
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-100 to-sky-100 mb-4 shadow-sm">
                <FaTag className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Price Drop Alert!</h3>
              <div className="flex justify-center items-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="text-amber-400 h-4 w-4" />
                ))}
              </div>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-600">{selectedFlight.airline}</p>
                  <p className="text-lg font-bold text-gray-800">
                    {selectedFlight.departureCode} → {selectedFlight.arrivalCode}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs line-through text-gray-400">{selectedFlight.originalPrice}</p>
                  <p className="text-xl font-bold text-green-600">{selectedFlight.price}</p>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-center mb-2">
                <FaGift className="h-4 w-4 text-sky-600 mr-2" />
                <p className="text-sm font-medium text-gray-700">Limited-time phone offer available!</p>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Our system just detected a <span className="font-bold text-green-600">special offer</span> for this flight! This exclusive pricing is only available through our call center.
              </p>
              <p className="text-gray-600 text-sm">
                Call now to lock in this rate before it expires!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-lg p-3 mb-4 text-center shadow-sm">
              <p className="text-lg font-bold text-sky-700">+1 (855) 792-0748</p>
              <p className="text-xs text-sky-600 mt-1 font-medium">Mention booking code: {selectedFlight.departureCode}{selectedFlight.arrivalCode}-SAVE{Math.floor(Math.random() * 900) + 100}</p>
            </div>

            <div className="space-y-2">
              <CallToAction text="Call To Book Now" />
              <button 
                onClick={() => setShowFlightSelectionPrompt(false)}
                className="text-sm text-gray-500 w-full text-center py-2 hover:underline"
              >
                Return to search results
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}

      <div className="bg-white rounded-lg shadow-soft p-4 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Available Flights</h2>
          <div className="bg-sky-100 rounded-full px-2.5 py-1 text-xs font-medium text-sky-800">
            {flights.length} results
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">Sorted by best value • {routeDisplay}</p>
        {searchData?.date && (
          <div className="mt-1">
            <p className="text-xs text-gray-500">
              {new Date(searchData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              {searchData.returnDate && searchData.tripType === 'roundtrip' ? 
                ` - ${new Date(searchData.returnDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}` : 
                ''}
            </p>
            {tripDuration !== null && (
              <p className="text-xs font-medium text-sky-600">
                {tripDuration === 0 ? 'Same day' : tripDuration === 1 ? '1 day trip' : `${tripDuration} days trip`}
              </p>
            )}
          </div>
        )}
      </div>

      {flights.map((flight, index) => (
        <motion.div 
          key={flight.id} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-soft p-4 mb-4 card-hover"
        >
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
            <div className="flex items-center">
              <div className="w-8 h-8 mr-2 overflow-hidden flex items-center justify-center rounded-md bg-gradient-subtle">
                <div className="text-sm font-bold text-gray-700">{flight.airline.charAt(0)}</div>
              </div>
              <span className="font-bold text-gray-800">{flight.airline}</span>
            </div>
            <div className="text-right">
              <div className="flex items-baseline">
                <span className="text-xs line-through text-gray-400 mr-1">{flight.originalPrice}</span>
                <span className="text-lg font-bold text-sky-600">{flight.price}</span>
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
                <FaPlane className="mx-1 h-3 w-3 text-gray-400" />
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
            <button 
              onClick={() => handleFlightSelect(flight)}
              className="flex-1 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 active-feedback transition"
            >
              Select
            </button>
            <button className="px-3 py-2.5 border border-sky-600 text-sky-600 hover:bg-sky-50 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 active-feedback transition">
              Details
            </button>
          </div>
        </motion.div>
      ))}

      <div className="bg-gradient-to-r from-sky-50 to-indigo-50 rounded-lg p-5 mb-6 shadow-soft border border-sky-100">
        <div className="flex items-start">
          <div className="bg-sky-100 rounded-full p-2 mr-3 flex-shrink-0">
            <FaInfoCircle className="h-5 w-5 text-sky-600" />
          </div>
          <div>
            <h3 className="font-bold text-sky-800 text-lg">Looking for better deals?</h3>
            <p className="text-sky-700 text-sm mt-1 mb-3">
              Our travel agents have access to exclusive offers not available online. Call now to find out more!
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