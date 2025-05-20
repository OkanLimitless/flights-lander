import airportsData from './airports-data.json';

export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

// Type assertion for imported JSON data
const airports = airportsData as Airport[];

export function searchAirports(query: string): Airport[] {
  if (!query || query.length < 2) return [];
  
  const lowercasedQuery = query.toLowerCase();
  
  return airports.filter(airport => 
    airport.code.toLowerCase().includes(lowercasedQuery) ||
    airport.city.toLowerCase().includes(lowercasedQuery) ||
    airport.name.toLowerCase().includes(lowercasedQuery) ||
    airport.country.toLowerCase().includes(lowercasedQuery)
  ).slice(0, 10); // Limit to 10 results for performance
}

export function getAirportByCode(code: string): Airport | undefined {
  return airports.find(airport => airport.code === code);
}

export function generateFakeFlightResults(departureCode: string, arrivalCode: string): any[] {
  const departureAirport = getAirportByCode(departureCode);
  const arrivalAirport = getAirportByCode(arrivalCode);
  
  if (!departureAirport || !arrivalAirport) {
    return [];
  }
  
  // Calculate realistic duration based on airport locations
  const calculateRealisticDuration = () => {
    // Estimate flight duration based on common flight times between regions
    // This is a simplified model - in reality would use coordinates and distance calculation
    
    // Same country (domestic flight)
    if (departureAirport.country === arrivalAirport.country) {
      // US domestic flights
      if (departureAirport.country === "United States") {
        const eastCoastAirports = ["JFK", "EWR", "BOS", "ATL", "MIA", "IAD", "DCA", "CLT", "PHL", "MCO", "FLL"];
        const westCoastAirports = ["LAX", "SFO", "SEA", "PDX", "SAN", "LAS", "PHX", "DEN"];
        const midwestAirports = ["ORD", "DTW", "MSP", "MCI", "STL", "CVG", "IND"];
        
        // Cross-country (East to West or vice versa)
        if ((eastCoastAirports.includes(departureCode) && westCoastAirports.includes(arrivalCode)) ||
            (westCoastAirports.includes(departureCode) && eastCoastAirports.includes(arrivalCode))) {
          return { hours: 5 + Math.floor(Math.random() * 2), mins: Math.floor(Math.random() * 4) * 15 }; // 5-6h
        }
        // Midwest to either coast
        else if ((midwestAirports.includes(departureCode) && (eastCoastAirports.includes(arrivalCode) || westCoastAirports.includes(arrivalCode))) ||
                ((eastCoastAirports.includes(departureCode) || westCoastAirports.includes(departureCode)) && midwestAirports.includes(arrivalCode))) {
          return { hours: 2 + Math.floor(Math.random() * 2), mins: Math.floor(Math.random() * 4) * 15 }; // 2-3h
        }
        // Regional flights (same coast or shorter distances)
        else {
          return { hours: 1 + Math.floor(Math.random()), mins: 30 + Math.floor(Math.random() * 2) * 15 }; // 1h30m-2h
        }
      } 
      // Other domestic flights
      else {
        return { hours: 1 + Math.floor(Math.random() * 2), mins: Math.floor(Math.random() * 4) * 15 }; // 1-2h
      }
    }
    // International flights
    else {
      // Transatlantic (US/Canada to Europe or vice versa)
      if ((departureAirport.country === "United States" && arrivalAirport.country.match(/Kingdom|France|Germany|Spain|Italy|Netherlands/)) ||
          (arrivalAirport.country === "United States" && departureAirport.country.match(/Kingdom|France|Germany|Spain|Italy|Netherlands/))) {
        return { hours: 7 + Math.floor(Math.random() * 3), mins: Math.floor(Math.random() * 4) * 15 }; // 7-9h
      }
      // US to Asia
      else if ((departureAirport.country === "United States" && ["China", "Japan", "South Korea", "Singapore", "Thailand"].includes(arrivalAirport.country)) ||
               (arrivalAirport.country === "United States" && ["China", "Japan", "South Korea", "Singapore", "Thailand"].includes(departureAirport.country))) {
        return { hours: 12 + Math.floor(Math.random() * 5), mins: Math.floor(Math.random() * 4) * 15 }; // 12-16h
      }
      // Europe to Asia
      else if ((departureAirport.country.match(/Kingdom|France|Germany|Spain|Italy|Netherlands/) && 
                ["China", "Japan", "South Korea", "Singapore", "Thailand"].includes(arrivalAirport.country)) ||
               (arrivalAirport.country.match(/Kingdom|France|Germany|Spain|Italy|Netherlands/) && 
                ["China", "Japan", "South Korea", "Singapore", "Thailand"].includes(departureAirport.country))) {
        return { hours: 10 + Math.floor(Math.random() * 3), mins: Math.floor(Math.random() * 4) * 15 }; // 10-12h
      }
      // Default international
      else {
        return { hours: 3 + Math.floor(Math.random() * 4), mins: Math.floor(Math.random() * 4) * 15 }; // 3-6h
      }
    }
  };
  
  // Generate departure time with preference for common flight hours
  const getRealisticDepartureTime = () => {
    // More common departure hours: early morning, mid-morning, early afternoon, evening
    const commonHours = [6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 18, 19];
    const hour = commonHours[Math.floor(Math.random() * commonHours.length)];
    const mins = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, 45
    return { hour, mins };
  };
  
  // Calculate arrival time based on departure and duration
  const calculateArrivalTime = (departureHour: number, departureMins: number, durationHours: number, durationMins: number) => {
    let arrivalHour = (departureHour + durationHours) % 24;
    let arrivalMins = (departureMins + durationMins) % 60;
    
    if (departureMins + durationMins >= 60) {
      arrivalHour = (arrivalHour + 1) % 24;
    }
    
    return {
      hour: arrivalHour,
      mins: arrivalMins
    };
  };
  
  // Format time as HH:MM AM/PM
  const formatTime = (hour: number, mins: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:${mins.toString().padStart(2, '0')} ${period}`;
  };
  
  // Airlines
  const airlines = [
    { name: 'Delta Airlines', logo: '/delta-logo.svg' },
    { name: 'American Airlines', logo: '/american-logo.svg' },
    { name: 'United Airlines', logo: '/united-logo.svg' },
    { name: 'British Airways', logo: '/ba-logo.svg' },
    { name: 'Lufthansa', logo: '/lufthansa-logo.svg' },
    { name: 'Emirates', logo: '/emirates-logo.svg' },
    { name: 'Qatar Airways', logo: '/qatar-logo.svg' },
    { name: 'Singapore Airlines', logo: '/singapore-logo.svg' }
  ];
  
  // Generate 3-5 random flights
  const numFlights = Math.floor(Math.random() * 3) + 3;
  const flights = [];
  
  for (let i = 0; i < numFlights; i++) {
    const airline = airlines[Math.floor(Math.random() * airlines.length)];
    const price = Math.floor(Math.random() * 400) + 300; // $300-700
    // For the price drop alert modal - calculate a higher original price (15-30% higher)
    const originalPrice = Math.floor(price * (1 + (Math.random() * 0.15 + 0.15)));
    
    // Calculate realistic duration
    const duration = calculateRealisticDuration();
    const durationHours = duration.hours;
    const durationMins = duration.mins;
    
    // Generate departure time
    const departureTime = getRealisticDepartureTime();
    
    // Calculate arrival time
    const arrivalTime = calculateArrivalTime(
      departureTime.hour, 
      departureTime.mins, 
      durationHours, 
      durationMins
    );
    
    const hasStop = Math.random() > 0.6; // 40% chance of nonstop
    const stopAirports = ["ATL", "ORD", "DFW", "FRA", "AMS", "CDG"];
    const randomStop = stopAirports[Math.floor(Math.random() * stopAirports.length)];
    
    flights.push({
      id: i + 1,
      airline: airline.name,
      price: `$${price}`,
      originalPrice: `$${originalPrice}`,
      duration: `${durationHours}h ${durationMins}m`,
      departure: formatTime(departureTime.hour, departureTime.mins),
      departureCode: departureCode,
      arrival: formatTime(arrivalTime.hour, arrivalTime.mins),
      arrivalCode: arrivalCode,
      stops: hasStop ? `1 stop (${randomStop})` : 'Nonstop',
      logo: airline.logo
    });
  }
  
  return flights;
} 