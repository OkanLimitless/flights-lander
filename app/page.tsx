'use client';

import { useState } from 'react';
import Header from './components/Header';
import FlightSearchForm from './components/FlightSearchForm';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import { FaInfoCircle, FaCheckCircle, FaPhone, FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa';
import CallToAction from './components/CallToAction';

// Define the flight form data interface
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

// Sample review data
const reviews = [
  { id: 1, author: "Amanda T.", rating: 5, text: "Got an amazing last-minute deal! Saved over $300 on our family vacation." },
  { id: 2, author: "Michael S.", rating: 5, text: "The agent found us flights $200 cheaper than anything online. Fantastic service!" },
  { id: 3, author: "Jennifer D.", rating: 5, text: "Best customer service experience ever. They matched our dates and budget perfectly." },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'search' | 'results'>('search');
  const [flightFormData, setFlightFormData] = useState<FlightFormData | undefined>(undefined);

  const handleSearchComplete = (formData: FlightFormData) => {
    setFlightFormData(formData);
    setCurrentStep('results');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Use a simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-sky-50/40 to-transparent h-96 z-0"></div>
      
      <Header />
      
      <main className="flex-grow px-4 py-6 z-10 relative">
        {currentStep === 'search' ? (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h1 className="heading-1 text-3xl sm:text-4xl mb-2 text-gray-900 font-extrabold">Call Now For <span className="text-sky-600">Exclusive Deals</span></h1>
              <p className="text-body max-w-md mx-auto">Our special offers are available by phone only - save up to 30% on all major airlines</p>
            </div>

            {/* Prominent Call-to-Action Panel */}
            <div className="mb-8 max-w-md mx-auto card p-6 bg-white border border-sky-200 rounded-lg shadow-md">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                  <FaPhone className="h-8 w-8 text-sky-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">Talk to a Travel Expert Now</h2>
                <p className="text-gray-600 mb-4">Get personalized flight deals not available online</p>
                <div className="flex items-center justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-amber-400 h-5 w-5" />
                  ))}
                </div>
                <p className="text-sm text-amber-600 font-semibold mb-4">Based on 4,832 verified customer reviews</p>
                <div className="w-full">
                  <CallToAction text="Call Now for Lowest Prices Guaranteed" />
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-center text-lg font-bold text-gray-800 mb-6">Why Our Customers Choose Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-2">
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <h4 className="font-bold text-gray-800">Lowest Price Guarantee</h4>
                  </div>
                  <p className="text-sm text-gray-600">We'll beat any comparable price you find online or over the phone</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-2">
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <h4 className="font-bold text-gray-800">Exclusive Phone Deals</h4>
                  </div>
                  <p className="text-sm text-gray-600">Access special rates and discounts only available via phone</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-2">
                    <FaCheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <h4 className="font-bold text-gray-800">24/7 Expert Support</h4>
                  </div>
                  <p className="text-sm text-gray-600">Dedicated agents available around the clock for assistance</p>
                </div>
              </div>
            </div>

            {/* Google reviews section */}
            <div className="mb-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-amber-400 h-4 w-4" />
                  ))}
                </div>
                <span className="font-bold text-gray-700">4.9</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-sm text-gray-600">4,832 verified reviews on Google</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {reviews.map(review => (
                  <div key={review.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="flex-shrink-0 mr-3">
                        <FaUserCircle className="h-10 w-10 text-gray-400" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{review.author}</div>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} className="h-3 w-3 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm">
                      <FaQuoteLeft className="h-3 w-3 text-gray-300 mr-1 inline" />
                      {review.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="max-w-md mx-auto">
              <FlightSearchForm onComplete={handleSearchComplete} />
            </div>
          </div>
        ) : (
          <ResultsPage searchData={flightFormData} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}
