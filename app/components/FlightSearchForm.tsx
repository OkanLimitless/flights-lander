'use client';

import React, { useState } from 'react';

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
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <div className="flex justify-between mb-4">
          <div className={`text-center flex-1 pb-2 ${step === 1 ? 'border-b-2 border-blue-500 font-bold text-blue-600' : 'text-gray-500'}`}>
            Flight Details
          </div>
          <div className={`text-center flex-1 pb-2 ${step === 2 ? 'border-b-2 border-blue-500 font-bold text-blue-600' : 'text-gray-500'}`}>
            Travel Dates
          </div>
          <div className={`text-center flex-1 pb-2 ${step === 3 ? 'border-b-2 border-blue-500 font-bold text-blue-600' : 'text-gray-500'}`}>
            Passengers
          </div>
        </div>
      </div>

      <form onSubmit={handleNext}>
        {step === 1 && (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tripType">
                Trip Type
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="tripType"
                    value="roundtrip"
                    checked={formData.tripType === 'roundtrip'}
                    onChange={handleChange}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">Round Trip</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="tripType"
                    value="oneway"
                    checked={formData.tripType === 'oneway'}
                    onChange={handleChange}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">One Way</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="departure">
                From
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="departure"
                name="departure"
                type="text"
                placeholder="City or Airport"
                value={formData.departure}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination">
                To
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        )}

        {step === 2 && (
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                Departure Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            {formData.tripType === 'roundtrip' && (
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="returnDate">
                  Return Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="returnDate"
                  name="returnDate"
                  type="date"
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passengers">
                Passengers
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <p className="text-sm text-gray-600 mb-4">
              We&apos;re searching for the best deals across all major airlines. Ready to find your perfect flight?
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
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