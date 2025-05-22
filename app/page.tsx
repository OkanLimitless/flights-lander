'use client';

import { useState } from 'react';
import Header from './components/Header';
import FlightSearchForm from './components/FlightSearchForm';
import ResultsPage from './components/ResultsPage';
import Footer from './components/Footer';
import { FaInfoCircle, FaCheckCircle, FaPhone, FaStar, FaQuoteLeft, FaUserCircle, FaShieldAlt, FaHeadset, FaMedal } from 'react-icons/fa';
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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/70 via-white to-white opacity-80 z-0"></div>
      <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657l1.415 1.414L13.857 0H11.03zm32.284 0l6.364 6.364-1.414 1.414L41.2 0h2.114zM16.686 0L10.322 6.364l1.414 1.414L20.8 0h-4.114zM22.343 0l5.657 5.657-1.414 1.414L20.8 0h1.543zM32 0l-1.543 0 7.07 7.07-1.414 1.415L30 2.373 23.83 8.544l-1.414-1.414L30 0h2zM0 5.373l1.414 1.415L9.67 0H8.2L0 8.2V5.374zM0 11.03l1.414 1.414L13.857 0h-2.827L0 11.03zm0 5.657l1.414 1.414L20.8 0h-2.113L0 18.686V16.687zM0 22.343l1.414 1.414L30 0h-2.113L0 27.97v-5.626zm0 5.657l1.414 1.415L40 0H37.17L0 37.17v-9.17zm0 5.657l1.414 1.415L50 0h-2.113L0 47.97v-14.3zm0 5.657l1.414 1.415L60 0h-2.113L0 57.97v-18.63zM54.627 60l.83-.828-1.415-1.415L51.8 60h2.827zM5.373 60l-.83-.828L5.96 57.757 8.2 60H5.374zM48.97 60l3.657-3.657-1.414-1.414L46.143 60h2.828zM11.03 60L7.372 56.343l1.415-1.414L13.857 60H11.03zm32.284 0l6.364-6.364-1.414-1.414L41.2 60h2.114zM16.686 60L10.322 53.636l1.414-1.414L20.8 60h-4.114zM22.343 60L28 54.343l-1.414-1.414L20.8 60h1.543zM32 60l-1.543 0 7.07-7.07-1.414-1.415L30 57.627l-6.17-6.17-1.414 1.414L30 60h2zM0 54.627l1.414-1.415L9.67 60H8.2L0 51.8v2.827zM0 48.97l1.414-1.414L13.857 60h-2.827L0 48.97zm0-5.657l1.414-1.414L20.8 60h-2.113L0 41.314v2zm0-5.657l1.414-1.414L30 60h-2.113L0 32.03v5.626zm0-5.657l1.414-1.415L40 60H37.17L0 22.83v9.17zm0-5.657l1.414-1.415L50 60h-2.113L0 12.03v14.3zm0-5.657l1.414-1.415L60 60h-2.113L0 2.03v18.63z\' fill=\'%239C92AC\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
      
      <Header />
      
      <main className="flex-grow px-4 py-8 z-10 relative">
        {currentStep === 'search' ? (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center mb-3">
                <div className="bg-sky-50 p-2 rounded-full border border-sky-100">
                  <FaHeadset className="h-6 w-6 text-sky-600" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 text-gray-900 font-extrabold tracking-tight">
                <span className="text-sky-700">Exclusive Deals</span> Available by Phone
              </h1>
              <p className="text-lg text-gray-600 max-w-xl mx-auto font-normal">Our special rates are up to 30% lower than online prices on all major airlines</p>
            </div>

            {/* Credibility indicators */}
            <div className="max-w-4xl mx-auto mb-12 flex justify-center">
              <div className="bg-white border border-gray-100 rounded-lg shadow-md py-3 px-6 flex items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center">
                  <div className="flex mr-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className="h-4 w-4 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-xs text-gray-600">
                    <span className="font-bold text-gray-800">4.9/5</span> (4,832 reviews)
                  </div>
                </div>
                <div className="h-8 border-r border-gray-200"></div>
                <div className="flex items-center">
                  <FaShieldAlt className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-xs font-medium text-gray-800">Best Price Guarantee</span>
                </div>
                <div className="h-8 border-r border-gray-200 hidden sm:block"></div>
                <div className="hidden sm:flex items-center">
                  <FaMedal className="h-4 w-4 text-amber-500 mr-1" />
                  <span className="text-xs font-medium text-gray-800">Official Partner of Major Airlines</span>
                </div>
              </div>
            </div>

            {/* Main content two-column layout */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
              {/* Call-to-action column */}
              <div className="md:col-span-2">
                <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-4 text-white">
                    <div className="flex items-center">
                      <FaPhone className="h-5 w-5 mr-2" />
                      <h2 className="font-bold text-lg">Speak to a Travel Expert</h2>
                    </div>
                    <p className="text-sky-100 text-sm mt-1">Access exclusive deals not available online</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-5">
                      <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center border border-sky-100 shadow-sm">
                        <FaPhone className="h-7 w-7 text-sky-600" />
                      </div>
                    </div>
                    
                    <div className="mb-5">
                      <div className="flex items-center justify-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar key={star} className="h-5 w-5 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-center text-sm text-amber-600 font-medium">Based on 4,832 verified reviews</p>
                    </div>
                    
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 mb-5">
                      <div className="flex items-start mb-3">
                        <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Save up to 30% on all major airlines</p>
                      </div>
                      <div className="flex items-start mb-3">
                        <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Access unpublished deals & special rates</p>
                      </div>
                      <div className="flex items-start">
                        <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-sm text-gray-700">No booking fees & free cancellation options</p>
                      </div>
                    </div>
                    
                    <CallToAction text="Call Now for Exclusive Rates" />
                    <p className="text-center text-xs text-gray-500 mt-3">Toll-free 24/7 customer service</p>
                  </div>
                </div>
                
                {/* Google reviews section */}
                <div className="mt-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-white p-1.5 rounded-full border border-gray-200 shadow-sm mr-3">
                      <svg viewBox="0 0 24 24" width="18" height="18" className="text-gray-800">
                        <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800">Customer Reviews</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {reviews.map(review => (
                      <div key={review.id} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center mb-2">
                          <div className="flex-shrink-0 mr-3">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                              <FaUserCircle className="h-7 w-7" />
                            </div>
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
                          <FaQuoteLeft className="h-3 w-3 text-gray-300 mr-1 inline-block align-text-bottom" />
                          {review.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Search form column */}
              <div className="md:col-span-3">
                <div className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-700 to-sky-600 p-4 text-white">
                    <h2 className="font-bold text-lg">Find Your Perfect Flight</h2>
                    <p className="text-sky-100 text-sm">We'll search all airlines for the best deals</p>
                  </div>
                  <div className="p-6">
                    <FlightSearchForm onComplete={handleSearchComplete} />
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center mr-3 border border-sky-100">
                        <FaShieldAlt className="h-4 w-4 text-sky-600" />
                      </div>
                      <h4 className="font-bold text-gray-800">Price Match Promise</h4>
                    </div>
                    <p className="text-sm text-gray-600">We'll beat any comparable price you find elsewhere</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mr-3 border border-green-100">
                        <FaHeadset className="h-4 w-4 text-green-600" />
                      </div>
                      <h4 className="font-bold text-gray-800">Expert Support</h4>
                    </div>
                    <p className="text-sm text-gray-600">24/7 assistance from our travel specialists</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mr-3 border border-amber-100">
                        <FaMedal className="h-4 w-4 text-amber-500" />
                      </div>
                      <h4 className="font-bold text-gray-800">Official Partner</h4>
                    </div>
                    <p className="text-sm text-gray-600">Direct access to airline inventory and special rates</p>
                  </div>
                </div>
              </div>
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
