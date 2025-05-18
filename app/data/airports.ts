export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
}

export const airports: Airport[] = [
  // North America
  { code: "ATL", name: "Hartsfield-Jackson Atlanta International Airport", city: "Atlanta", country: "United States" },
  { code: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "United States" },
  { code: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "United States" },
  { code: "DFW", name: "Dallas/Fort Worth International Airport", city: "Dallas", country: "United States" },
  { code: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "United States" },
  { code: "DEN", name: "Denver International Airport", city: "Denver", country: "United States" },
  { code: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "United States" },
  { code: "LAS", name: "Harry Reid International Airport", city: "Las Vegas", country: "United States" },
  { code: "SEA", name: "Seattle-Tacoma International Airport", city: "Seattle", country: "United States" },
  { code: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada" },
  { code: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada" },
  { code: "MEX", name: "Mexico City International Airport", city: "Mexico City", country: "Mexico" },
  
  // Europe
  { code: "LHR", name: "London Heathrow Airport", city: "London", country: "United Kingdom" },
  { code: "CDG", name: "Paris Charles de Gaulle Airport", city: "Paris", country: "France" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
  { code: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands" },
  { code: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport", city: "Madrid", country: "Spain" },
  { code: "FCO", name: "Leonardo da Vinci–Fiumicino Airport", city: "Rome", country: "Italy" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },
  { code: "BCN", name: "Barcelona–El Prat Airport", city: "Barcelona", country: "Spain" },
  { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland" },
  { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany" },
  
  // Asia
  { code: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China" },
  { code: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan" },
  { code: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates" },
  { code: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore" },
  { code: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea" },
  { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand" },
  { code: "DEL", name: "Indira Gandhi International Airport", city: "New Delhi", country: "India" },
  { code: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia" },
  { code: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "China" },
  
  // Australia & Oceania
  { code: "SYD", name: "Sydney Airport", city: "Sydney", country: "Australia" },
  { code: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia" },
  { code: "BNE", name: "Brisbane Airport", city: "Brisbane", country: "Australia" },
  { code: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand" },
  
  // Africa
  { code: "JNB", name: "O.R. Tambo International Airport", city: "Johannesburg", country: "South Africa" },
  { code: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa" },
  { code: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt" },
  { code: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia" },
  { code: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya" },
  
  // South America
  { code: "GRU", name: "São Paulo/Guarulhos International Airport", city: "São Paulo", country: "Brazil" },
  { code: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina" },
  { code: "BOG", name: "El Dorado International Airport", city: "Bogotá", country: "Colombia" },
  { code: "SCL", name: "Santiago International Airport", city: "Santiago", country: "Chile" },
  { code: "LIM", name: "Jorge Chávez International Airport", city: "Lima", country: "Peru" }
];

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
  
  // Generate random flight times
  const getRandomTime = () => {
    const hours = Math.floor(Math.random() * 24);
    const mins = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, 45
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
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
    const basePrice = Math.floor(Math.random() * 400) + 300; // $300-700
    const discountAmount = Math.floor(Math.random() * 150) + 50; // $50-200 discount
    const originalPrice = basePrice + discountAmount;
    
    const durationHours = Math.floor(Math.random() * 5) + 2; // 2-7 hours
    const durationMins = Math.floor(Math.random() * 4) * 15; // 0, 15, 30, 45
    
    const hasStop = Math.random() > 0.6; // 40% chance of nonstop
    const stopAirports = ["ATL", "ORD", "DFW", "FRA", "AMS", "CDG"];
    const randomStop = stopAirports[Math.floor(Math.random() * stopAirports.length)];
    
    flights.push({
      id: i + 1,
      airline: airline.name,
      price: `$${basePrice}`,
      originalPrice: `$${originalPrice}`,
      duration: `${durationHours}h ${durationMins}m`,
      departure: getRandomTime(),
      departureCode: departureCode,
      arrival: getRandomTime(),
      arrivalCode: arrivalCode,
      stops: hasStop ? `1 stop (${randomStop})` : 'Nonstop',
      logo: airline.logo
    });
  }
  
  return flights;
} 