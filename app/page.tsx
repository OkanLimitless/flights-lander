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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow px-4 py-6">
        {currentStep === 'search' ? (
          <div>
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Find Your Perfect Flight</h1>
              <p className="text-gray-600">Search across all major airlines for the best deals</p>
            </div>
            <FlightSearchForm onComplete={handleSearchComplete} />
          </div>
        ) : (
          <ResultsPage />
        )}
      </main>
      <Footer />
    </div>
  );
}
