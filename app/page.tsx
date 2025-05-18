'use client';

import { useState } from 'react';
import Header from './components/Header';
import FlightSearchForm from './components/FlightSearchForm';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'search' | 'results'>('search');

  const handleSearchComplete = () => {
    setCurrentStep('results');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent h-64 z-0"></div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5 z-0 pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-grow px-4 py-6 z-10">
        {currentStep === 'search' ? (
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <h1 className="heading-1 text-3xl mb-2 text-blue-800">Find Your Perfect Flight</h1>
              <p className="text-body max-w-md mx-auto">Search across all major airlines for exclusive deals and discounts</p>
            </div>
            <FlightSearchForm onComplete={handleSearchComplete} />
            
            <div className="mt-8 max-w-md mx-auto card p-4 bg-blue-50 border border-blue-100">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <h3 className="font-bold text-blue-800">Why Book With Us?</h3>
              </div>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Exclusive flight deals not available anywhere else
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  24/7 customer support from travel experts
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Special discounts on major airlines
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <ResultsPage />
        )}
      </main>
      
      <Footer />
    </div>
  );
}
