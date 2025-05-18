'use client';

import React, { useState } from 'react';
import { FaPlane, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaInfoCircle, FaExchangeAlt, FaArrowRight, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const FlightSearchForm = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    date: '',
    passengers: '1',
    tripType: 'roundtrip'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-soft p-6 animate-slide-up">
      <div className="mb-6">
        <div className="flex mb-1">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex-1 flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 text-sm font-bold
                  ${step === stepNumber ? 'bg-sky-600 text-white shadow-md' : 
                    step > stepNumber ? 'bg-green-100 text-green-700 border-2 border-green-500' : 
                    'bg-gray-100 text-gray-500 border border-gray-300'}`}
              >
                {step > stepNumber ? (
                  <FaCheckCircle className="h-4 w-4" />
                ) : stepNumber}
              </div>
              <div className={`text-xs font-medium text-center ${step === stepNumber ? 'text-sky-700' : step > stepNumber ? 'text-green-700' : 'text-gray-500'}`}>
                {stepNumber === 1 ? 'Flight Details' : stepNumber === 2 ? 'Travel Dates' : 'Passengers'}
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex h-1 mb-4">
          <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
          <div 
            className="absolute inset-y-0 left-0 bg-sky-600 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleNext} className="space-y-4">
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tripType">
                Trip Type
              </label>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <label 
                  className={`flex items-center justify-center p-3 rounded-lg cursor-pointer text-center border 
                    ${formData.tripType === 'roundtrip' 
                      ? 'bg-sky-50 border-sky-500 text-sky-700' 
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  <input
                    type="radio"
                    name="tripType"
                    value="roundtrip"
                    checked={formData.tripType === 'roundtrip'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div>
                    <FaExchangeAlt className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm">Round Trip</span>
                  </div>
                </label>
                <label 
                  className={`flex items-center justify-center p-3 rounded-lg cursor-pointer text-center border 
                    ${formData.tripType === 'oneway' 
                      ? 'bg-sky-50 border-sky-500 text-sky-700' 
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                >
                  <input
                    type="radio"
                    name="tripType"
                    value="oneway"
                    checked={formData.tripType === 'oneway'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div>
                    <FaArrowRight className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm">One Way</span>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departure">
                From
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="form-input pl-10"
                  id="departure"
                  name="departure"
                  type="text"
                  placeholder="City or Airport"
                  value={formData.departure}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
                To
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="form-input pl-10"
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="City or Airport"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Departure Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="form-input pl-10"
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {formData.tripType === 'roundtrip' && (
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="returnDate">
                  Return Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="form-input pl-10"
                    id="returnDate"
                    name="returnDate"
                    type="date"
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passengers">
                Passengers
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  className="form-select pl-10"
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-100">
              <div className="flex items-start">
                <FaInfoCircle className="h-5 w-5 text-sky-500 mt-0.5 mr-2" />
                <p className="text-sm text-sky-700">
                  We&apos;re searching for the best deals across all major airlines. Ready to find your perfect flight?
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-center pt-4">
          <button
            className="btn btn-primary py-3 w-full"
            type="submit"
          >
            {step < 3 ? 'Continue' : 'Find Flights'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightSearchForm; 