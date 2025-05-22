'use client';

import React, { useState, useEffect } from 'react';
import CallToAction from './CallToAction';
import { FaPhoneAlt, FaInfoCircle, FaPlane, FaArrowRight, FaCheck, FaGift, FaStar, FaTag, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';
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

    // Show the call prompt immediately after results load
    const promptTimer = setTimeout(() => {
      setShowCallPrompt(true);
    }, 2500);

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
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Initial Call Prompt */}
      {showCallPrompt ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-85 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-xl p-0 max-w-md w-full shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-5 text-white relative">
              <div className="absolute -right-6 -top-6 bg-red-500 w-20 h-20 rounded-full flex items-center justify-center rotate-12 shadow-lg">
                <div className="text-center -rotate-12">
                  <div className="text-xs font-bold">SAVE UP TO</div>
                  <div className="text-xl font-bold">30%</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Exclusive Phone-Only Deal</h3>
              <p className="text-sky-100 text-sm">Limited time offer for your search</p>
            </div>

            <div className="p-6">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 border-sky-100 shadow-md">
                  <div className="bg-gradient-to-r from-sky-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <FaPlane className="h-4 w-4 text-sky-600 mr-2" />
                    <span className="text-sm font-medium text-gray-800">Your Search</span>
                  </div>
                  <div className="bg-green-100 rounded-full px-2 py-0.5">
                    <span className="text-xs font-semibold text-green-700">SPECIAL RATE</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-700">{routeDisplay}</p>
                  <div className="text-right">
                    <p className="text-xs line-through text-gray-400">Online: $639</p>
                    <p className="text-lg font-bold text-green-600">Call: $459</p>
                  </div>
                </div>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <div className="flex items-center text-xs text-gray-500">
                    <FaInfoCircle className="h-3 w-3 mr-1 text-gray-400" />
                    <span>Only available by phone - limited time offer</span>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} className="h-3.5 w-3.5 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">4.9/5 (4,832 reviews)</span>
                  </div>
                  <div className="bg-blue-50 rounded-full px-2 py-0.5">
                    <span className="text-xs font-medium text-blue-700">TRUSTED SERVICE</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Agent-exclusive deals not shown online</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">No booking fees when you call</p>
                  </div>
                  <div className="flex items-start">
                    <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-700">Access to special airline promotions</p>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <CallToAction text="CALL NOW: SAVE UP TO 30%" />
              </div>
              
              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="bg-white p-1 rounded shadow-sm border border-gray-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 w-auto" />
                </div>
                <div className="bg-white p-1 rounded shadow-sm border border-gray-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4 w-auto" />
                </div>
                <div className="bg-white p-1 rounded shadow-sm border border-gray-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png" alt="American Express" className="h-4 w-auto" />
                </div>
              </div>
              
              <button 
                onClick={closeInitialPrompt}
                className="text-sm text-gray-500 w-full text-center py-2 hover:text-gray-700 transition-colors"
              >
                Continue without calling
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}

      {/* Flight Selection Prompt - Shown when a user selects a flight after declining the initial call */}
      {showFlightSelectionPrompt && selectedFlight ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-85 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
            className="bg-white rounded-xl p-0 max-w-sm w-full shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-5 text-white relative">
              <div className="absolute -right-6 -top-6 bg-red-500 w-20 h-20 rounded-full flex items-center justify-center rotate-12 shadow-lg">
                <div className="text-center -rotate-12">
                  <div className="text-xs font-bold">SAVE</div>
                  <div className="text-xl font-bold">30%</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Secret Deal Found!</h3>
              <p className="text-green-100 text-sm">Exclusive rate for your selected flight</p>
            </div>

            <div className="p-6">
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mr-3">
                    <FaPlane className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{selectedFlight.airline}</p>
                    <p className="text-xs text-gray-500">
                      {selectedFlight.departureCode} → {selectedFlight.arrivalCode}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500">Online Price:</p>
                    <p className="text-sm font-medium text-gray-700 line-through">{selectedFlight.originalPrice}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-600 font-medium">Phone Special:</p>
                    <p className="text-xl font-bold text-green-600">
                      ${Math.floor(parseInt(selectedFlight.price.substring(1)) * 0.7)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} className="h-3.5 w-3.5 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">Trusted Service</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-4">
                  We found an exclusive phone-only deal for this flight! Call now to lock in this special rate before it expires.
                </p>
              </div>

              <div className="mb-4">
                <CallToAction text="Call Now To Book This Deal" />
              </div>
              
              <button 
                onClick={() => setShowFlightSelectionPrompt(false)}
                className="text-sm text-gray-500 w-full text-center py-2 hover:text-gray-700 transition-colors"
              >
                No thanks, continue at regular price
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}

      {/* Search summary card */}
      <div className="bg-white rounded-xl shadow-md p-5 mb-6 border border-gray-100">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Flight Results</h2>
            <p className="text-sm text-gray-600 mt-1">{routeDisplay}</p>
            {searchData?.date && (
              <div className="mt-1 flex items-center text-sm text-gray-500">
                <FaCalendarAlt className="h-3 w-3 mr-1" />
                <span>
                  {new Date(searchData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  {searchData.returnDate && searchData.tripType === 'roundtrip' ? 
                    ` - ${new Date(searchData.returnDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}` : 
                    ''}
                </span>
                {tripDuration !== null && (
                  <span className="ml-2 font-medium text-sky-600">
                    {tripDuration === 0 ? 'Same day' : tripDuration === 1 ? '1 day trip' : `${tripDuration} days trip`}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="bg-sky-50 rounded-full px-3 py-1 text-xs font-medium text-sky-700 border border-sky-100">
            {flights.length} results
          </div>
        </div>
        
        <div className="flex items-center text-xs text-gray-600 border-t border-gray-100 pt-3">
          <FaInfoCircle className="h-3 w-3 text-sky-500 mr-1.5" />
          <span>Sorted by best value • Prices may be lower when you call</span>
        </div>
      </div>

      {/* Flights list */}
      {flights.map((flight, index) => (
        <motion.div 
          key={flight.id} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl shadow-md p-5 mb-4 border border-gray-100 hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mr-3">
                <div className="text-sm font-bold text-sky-600">{flight.airline.charAt(0)}</div>
              </div>
              <div>
                <div className="font-bold text-gray-800">{flight.airline}</div>
                <div className="text-xs text-gray-500">{flight.stops}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-sky-700">{flight.price}</div>
              <div className="text-xs text-gray-500 line-through">{flight.originalPrice}</div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-5">
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800">{flight.departure}</div>
              <div className="text-xs text-gray-500 font-medium">{flight.departureCode}</div>
            </div>
            
            <div className="flex-1 px-6">
              <div className="text-xs text-center text-gray-500 font-medium mb-1">{flight.duration}</div>
              <div className="flex items-center">
                <div className="h-0.5 flex-1 bg-gray-200 rounded-full"></div>
                <div className="mx-1 w-2 h-2 rounded-full bg-sky-600"></div>
                <div className="h-0.5 flex-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800">{flight.arrival}</div>
              <div className="text-xs text-gray-500 font-medium">{flight.arrivalCode}</div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button 
              onClick={() => handleFlightSelect(flight)}
              className="flex-1 py-2.5 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 active:scale-[0.98] transition shadow-sm hover:shadow-md"
            >
              Select
            </button>
            <button className="px-3 py-2.5 border border-sky-600 text-sky-700 hover:bg-sky-50 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 active:scale-[0.98] transition">
              Details
            </button>
          </div>
        </motion.div>
      ))}

      {/* Call to action card */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6 mb-6 shadow-md border border-sky-100">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-5 flex-shrink-0">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                <FaPhoneAlt className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 mb-4 md:mb-0 text-center md:text-left">
            <h3 className="font-bold text-gray-800 text-lg mb-1">Looking for better deals?</h3>
            <p className="text-sm text-gray-600 mb-1">
              Our travel experts have access to exclusive discounts not available online. 
              Call now and save up to 30% off listed prices!
            </p>
            
            <div className="flex items-center justify-center md:justify-start mt-2">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} className="h-3 w-3 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-gray-600">4.9/5 from 4,832 reviews</span>
            </div>
          </div>
          
          <div className="md:ml-4 md:w-48">
            <CallToAction variant="secondary" text="Call For Best Rates" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 