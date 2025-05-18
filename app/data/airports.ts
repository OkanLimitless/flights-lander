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
  { code: "MCO", name: "Orlando International Airport", city: "Orlando", country: "United States" },
  { code: "BOS", name: "Boston Logan International Airport", city: "Boston", country: "United States" },
  { code: "PHX", name: "Phoenix Sky Harbor International Airport", city: "Phoenix", country: "United States" },
  { code: "IAH", name: "George Bush Intercontinental Airport", city: "Houston", country: "United States" },
  { code: "MIA", name: "Miami International Airport", city: "Miami", country: "United States" },
  { code: "EWR", name: "Newark Liberty International Airport", city: "Newark", country: "United States" },
  { code: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada" },
  { code: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada" },
  { code: "YUL", name: "Montréal-Pierre Elliott Trudeau International Airport", city: "Montreal", country: "Canada" },
  { code: "YYC", name: "Calgary International Airport", city: "Calgary", country: "Canada" },
  { code: "MEX", name: "Mexico City International Airport", city: "Mexico City", country: "Mexico" },
  { code: "CUN", name: "Cancún International Airport", city: "Cancún", country: "Mexico" },
  
  // Europe
  { code: "LHR", name: "London Heathrow Airport", city: "London", country: "United Kingdom" },
  { code: "LGW", name: "London Gatwick Airport", city: "London", country: "United Kingdom" },
  { code: "STN", name: "London Stansted Airport", city: "London", country: "United Kingdom" },
  { code: "MAN", name: "Manchester Airport", city: "Manchester", country: "United Kingdom" },
  { code: "CDG", name: "Paris Charles de Gaulle Airport", city: "Paris", country: "France" },
  { code: "ORY", name: "Paris Orly Airport", city: "Paris", country: "France" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
  { code: "MUC", name: "Munich Airport", city: "Munich", country: "Germany" },
  { code: "BER", name: "Berlin Brandenburg Airport", city: "Berlin", country: "Germany" },
  { code: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands" },
  { code: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport", city: "Madrid", country: "Spain" },
  { code: "BCN", name: "Barcelona–El Prat Airport", city: "Barcelona", country: "Spain" },
  { code: "FCO", name: "Leonardo da Vinci–Fiumicino Airport", city: "Rome", country: "Italy" },
  { code: "MXP", name: "Milan Malpensa Airport", city: "Milan", country: "Italy" },
  { code: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },
  { code: "SAW", name: "Istanbul Sabiha Gökçen International Airport", city: "Istanbul", country: "Turkey" },
  { code: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland" },
  { code: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria" },
  { code: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark" },
  { code: "ARN", name: "Stockholm Arlanda Airport", city: "Stockholm", country: "Sweden" },
  { code: "OSL", name: "Oslo Airport", city: "Oslo", country: "Norway" },
  { code: "HEL", name: "Helsinki Airport", city: "Helsinki", country: "Finland" },
  { code: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland" },
  { code: "LIS", name: "Lisbon Airport", city: "Lisbon", country: "Portugal" },
  { code: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece" },
  { code: "PRG", name: "Václav Havel Airport Prague", city: "Prague", country: "Czech Republic" },
  { code: "WAW", name: "Warsaw Chopin Airport", city: "Warsaw", country: "Poland" },
  { code: "BUD", name: "Budapest Ferenc Liszt International Airport", city: "Budapest", country: "Hungary" },
  
  // Asia
  { code: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China" },
  { code: "PKX", name: "Beijing Daxing International Airport", city: "Beijing", country: "China" },
  { code: "PVG", name: "Shanghai Pudong International Airport", city: "Shanghai", country: "China" },
  { code: "SHA", name: "Shanghai Hongqiao International Airport", city: "Shanghai", country: "China" },
  { code: "CAN", name: "Guangzhou Baiyun International Airport", city: "Guangzhou", country: "China" },
  { code: "SZX", name: "Shenzhen Bao'an International Airport", city: "Shenzhen", country: "China" },
  { code: "CTU", name: "Chengdu Shuangliu International Airport", city: "Chengdu", country: "China" },
  { code: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan" },
  { code: "NRT", name: "Tokyo Narita International Airport", city: "Tokyo", country: "Japan" },
  { code: "KIX", name: "Kansai International Airport", city: "Osaka", country: "Japan" },
  { code: "ITM", name: "Osaka International Airport", city: "Osaka", country: "Japan" },
  { code: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea" },
  { code: "GMP", name: "Gimpo International Airport", city: "Seoul", country: "South Korea" },
  { code: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates" },
  { code: "DWC", name: "Al Maktoum International Airport", city: "Dubai", country: "United Arab Emirates" },
  { code: "AUH", name: "Abu Dhabi International Airport", city: "Abu Dhabi", country: "United Arab Emirates" },
  { code: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar" },
  { code: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore" },
  { code: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand" },
  { code: "DMK", name: "Don Mueang International Airport", city: "Bangkok", country: "Thailand" },
  { code: "DEL", name: "Indira Gandhi International Airport", city: "New Delhi", country: "India" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", country: "India" },
  { code: "MAA", name: "Chennai International Airport", city: "Chennai", country: "India" },
  { code: "BLR", name: "Kempegowda International Airport", city: "Bangalore", country: "India" },
  { code: "HYD", name: "Rajiv Gandhi International Airport", city: "Hyderabad", country: "India" },
  { code: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia" },
  { code: "CGK", name: "Soekarno–Hatta International Airport", city: "Jakarta", country: "Indonesia" },
  { code: "MNL", name: "Ninoy Aquino International Airport", city: "Manila", country: "Philippines" },
  { code: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "China" },
  { code: "TPE", name: "Taiwan Taoyuan International Airport", city: "Taipei", country: "Taiwan" },
  
  // Australia & Oceania
  { code: "SYD", name: "Sydney Airport", city: "Sydney", country: "Australia" },
  { code: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia" },
  { code: "BNE", name: "Brisbane Airport", city: "Brisbane", country: "Australia" },
  { code: "PER", name: "Perth Airport", city: "Perth", country: "Australia" },
  { code: "ADL", name: "Adelaide Airport", city: "Adelaide", country: "Australia" },
  { code: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand" },
  { code: "CHC", name: "Christchurch Airport", city: "Christchurch", country: "New Zealand" },
  { code: "WLG", name: "Wellington International Airport", city: "Wellington", country: "New Zealand" },
  { code: "NAN", name: "Nadi International Airport", city: "Nadi", country: "Fiji" },
  { code: "PPT", name: "Faa'a International Airport", city: "Papeete", country: "French Polynesia" },
  
  // Africa
  { code: "JNB", name: "O.R. Tambo International Airport", city: "Johannesburg", country: "South Africa" },
  { code: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa" },
  { code: "DUR", name: "King Shaka International Airport", city: "Durban", country: "South Africa" },
  { code: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt" },
  { code: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos", country: "Nigeria" },
  { code: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia" },
  { code: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya" },
  { code: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco" },
  { code: "ALG", name: "Houari Boumediene Airport", city: "Algiers", country: "Algeria" },
  { code: "TUN", name: "Tunis-Carthage International Airport", city: "Tunis", country: "Tunisia" },
  { code: "ACC", name: "Kotoka International Airport", city: "Accra", country: "Ghana" },
  { code: "DAR", name: "Julius Nyerere International Airport", city: "Dar es Salaam", country: "Tanzania" },
  
  // South America
  { code: "GRU", name: "São Paulo/Guarulhos International Airport", city: "São Paulo", country: "Brazil" },
  { code: "CGH", name: "São Paulo/Congonhas Airport", city: "São Paulo", country: "Brazil" },
  { code: "GIG", name: "Rio de Janeiro/Galeão International Airport", city: "Rio de Janeiro", country: "Brazil" },
  { code: "BSB", name: "Brasília International Airport", city: "Brasília", country: "Brazil" },
  { code: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina" },
  { code: "AEP", name: "Jorge Newbery Airpark", city: "Buenos Aires", country: "Argentina" },
  { code: "SCL", name: "Santiago International Airport", city: "Santiago", country: "Chile" },
  { code: "BOG", name: "El Dorado International Airport", city: "Bogotá", country: "Colombia" },
  { code: "LIM", name: "Jorge Chávez International Airport", city: "Lima", country: "Peru" },
  { code: "CCS", name: "Simón Bolívar International Airport", city: "Caracas", country: "Venezuela" },
  { code: "UIO", name: "Mariscal Sucre International Airport", city: "Quito", country: "Ecuador" },
  { code: "GYE", name: "José Joaquín de Olmedo International Airport", city: "Guayaquil", country: "Ecuador" },
  { code: "MVD", name: "Carrasco International Airport", city: "Montevideo", country: "Uruguay" },
  { code: "ASU", name: "Silvio Pettirossi International Airport", city: "Asunción", country: "Paraguay" },
  
  // Central America & Caribbean
  { code: "PTY", name: "Tocumen International Airport", city: "Panama City", country: "Panama" },
  { code: "SJO", name: "Juan Santamaría International Airport", city: "San José", country: "Costa Rica" },
  { code: "SAL", name: "Monseñor Óscar Arnulfo Romero International Airport", city: "San Salvador", country: "El Salvador" },
  { code: "GUA", name: "La Aurora International Airport", city: "Guatemala City", country: "Guatemala" },
  { code: "BZE", name: "Philip S. W. Goldson International Airport", city: "Belize City", country: "Belize" },
  { code: "MBJ", name: "Sangster International Airport", city: "Montego Bay", country: "Jamaica" },
  { code: "PUJ", name: "Punta Cana International Airport", city: "Punta Cana", country: "Dominican Republic" },
  { code: "SDQ", name: "Las Américas International Airport", city: "Santo Domingo", country: "Dominican Republic" },
  { code: "NAS", name: "Lynden Pindling International Airport", city: "Nassau", country: "Bahamas" },
  { code: "HAV", name: "José Martí International Airport", city: "Havana", country: "Cuba" },
  { code: "AUA", name: "Queen Beatrix International Airport", city: "Oranjestad", country: "Aruba" },
  { code: "SXM", name: "Princess Juliana International Airport", city: "Sint Maarten", country: "Sint Maarten" }
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