'use client';

import { useState } from 'react';
import Header from './components/Header';
import FlightSearchForm from './components/FlightSearchForm';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import { FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

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

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'search' | 'results'>('search');
  const [flightFormData, setFlightFormData] = useState<FlightFormData | undefined>(undefined);

  const handleSearchComplete = (formData: FlightFormData) => {
    setFlightFormData(formData);
    setCurrentStep('results');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Use a simple gradient background instead of the problematic SVG pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-sky-50/40 to-transparent h-96 z-0"></div>
      
      <Header />
      
      <main className="flex-grow px-4 py-6 z-10 relative">
        {currentStep === 'search' ? (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h1 className="heading-1 text-3xl sm:text-4xl mb-2 text-gray-900 font-extrabold">Find Your <span className="text-sky-600">Perfect Flight</span></h1>
              <p className="text-body max-w-md mx-auto">Search across all major airlines for exclusive deals and offers</p>
            </div>
            <FlightSearchForm onComplete={handleSearchComplete} />
            
            <div className="mt-8 max-w-md mx-auto card p-5 bg-white border border-sky-100 shadow-soft">
              <div className="flex items-center mb-3">
                <FaInfoCircle className="h-5 w-5 text-sky-500 mr-2" />
                <h3 className="font-bold text-gray-800">Why Book With Us?</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex items-start">
                  <FaCheckCircle className="h-4 w-4 text-sky-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Exclusive flight deals not available anywhere else</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-4 w-4 text-sky-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>24/7 customer support from travel experts</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="h-4 w-4 text-sky-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Special offers on major airlines</span>
                </li>
              </ul>
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
