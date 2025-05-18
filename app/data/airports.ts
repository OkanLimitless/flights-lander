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
  { code: "BHM", name: "Birmingham International Airport", city: "Birmingham", country: "United States" },
  { code: "DHN", name: "Dothan Regional Airport", city: "Dothan", country: "United States" },
  { code: "HSV", name: "Huntsville International Airport", city: "Huntsville", country: "United States" },
  { code: "MOB", name: "Mobile Regional Airport", city: "Mobile", country: "United States" },
  { code: "MGM", name: "Montgomery Regional Airport", city: "Montgomery", country: "United States" },
  { code: "ANC", name: "Anchorage International Airport", city: "Anchorage", country: "United States" },
  { code: "FAI", name: "Fairbanks International Airport", city: "Fairbanks", country: "United States" },
  { code: "JNU", name: "Juneau International Airport", city: "Juneau", country: "United States" },
  { code: "FLG", name: "Flagstaff Pulliam Airport", city: "Flagstaff", country: "United States" },
  { code: "TUS", name: "Tucson International Airport", city: "Tucson", country: "United States" },
  { code: "YUM", name: "Yuma International Airport", city: "Yuma", country: "United States" },
  { code: "FYV", name: "Fayetteville Regional Airport", city: "Fayetteville", country: "United States" },
  { code: "LIT", name: "Little Rock National Airport", city: "Little Rock", country: "United States" },
  { code: "XNA", name: "Northwest Arkansas Regional Airport", city: "Bentonville", country: "United States" },
  { code: "BUR", name: "Hollywood Burbank Airport", city: "Burbank", country: "United States" },
  { code: "FAT", name: "Fresno Yosemite International Airport", city: "Fresno", country: "United States" },
  { code: "LGB", name: "Long Beach Airport", city: "Long Beach", country: "United States" },
  { code: "OAK", name: "Oakland International Airport", city: "Oakland", country: "United States" },
  { code: "ONT", name: "Ontario International Airport", city: "Ontario", country: "United States" },
  { code: "PSP", name: "Palm Springs International Airport", city: "Palm Springs", country: "United States" },
  { code: "SMF", name: "Sacramento International Airport", city: "Sacramento", country: "United States" },
  { code: "SAN", name: "San Diego International Airport", city: "San Diego", country: "United States" },
  { code: "SJC", name: "San Jose International Airport", city: "San Jose", country: "United States" },
  { code: "SNA", name: "John Wayne Airport", city: "Santa Ana", country: "United States" },
  { code: "ASE", name: "Aspen-Pitkin County Airport", city: "Aspen", country: "United States" },
  { code: "COS", name: "Colorado Springs Airport", city: "Colorado Springs", country: "United States" },
  { code: "GJT", name: "Grand Junction Regional Airport", city: "Grand Junction", country: "United States" },
  { code: "PUB", name: "Pueblo Memorial Airport", city: "Pueblo", country: "United States" },
  { code: "BDL", name: "Bradley International Airport", city: "Hartford", country: "United States" },
  { code: "HVN", name: "Tweed New Haven Airport", city: "New Haven", country: "United States" },
  { code: "IAD", name: "Dulles International Airport", city: "Washington", country: "United States" },
  { code: "DCA", name: "Ronald Reagan Washington National Airport", city: "Washington", country: "United States" },
  { code: "DAB", name: "Daytona Beach International Airport", city: "Daytona Beach", country: "United States" },
  { code: "FLL", name: "Fort Lauderdale-Hollywood International Airport", city: "Fort Lauderdale", country: "United States" },
  { code: "RSW", name: "Southwest Florida International Airport", city: "Fort Myers", country: "United States" },
  { code: "JAX", name: "Jacksonville International Airport", city: "Jacksonville", country: "United States" },
  { code: "EYW", name: "Key West International Airport", city: "Key West", country: "United States" },
  { code: "PNS", name: "Pensacola International Airport", city: "Pensacola", country: "United States" },
  { code: "PIE", name: "St. Petersburg-Clearwater International Airport", city: "St. Petersburg", country: "United States" },
  { code: "SRQ", name: "Sarasota-Bradenton International Airport", city: "Sarasota", country: "United States" },
  { code: "TPA", name: "Tampa International Airport", city: "Tampa", country: "United States" },
  { code: "PBI", name: "Palm Beach International Airport", city: "West Palm Beach", country: "United States" },
  { code: "PFN", name: "Panama City-Bay County International Airport", city: "Panama City", country: "United States" },
  { code: "AGS", name: "Augusta Regional Airport", city: "Augusta", country: "United States" },
  { code: "SAV", name: "Savannah/Hilton Head International Airport", city: "Savannah", country: "United States" },
  { code: "ITO", name: "Hilo International Airport", city: "Hilo", country: "United States" },
  { code: "HNL", name: "Honolulu International Airport", city: "Honolulu", country: "United States" },
  { code: "OGG", name: "Kahului Airport", city: "Kahului", country: "United States" },
  { code: "KOA", name: "Kona International Airport", city: "Kailua", country: "United States" },
  { code: "LIH", name: "Lihue Airport", city: "Lihue", country: "United States" },
  { code: "BOI", name: "Boise Airport", city: "Boise", country: "United States" },
  { code: "MDW", name: "Chicago Midway Airport", city: "Chicago", country: "United States" },
  { code: "MLI", name: "Quad Cities International Airport", city: "Moline", country: "United States" },
  { code: "PIA", name: "General Wayne A. Downing Peoria International Airport", city: "Peoria", country: "United States" },
  { code: "EVV", name: "Evansville Regional Airport", city: "Evansville", country: "United States" },
  { code: "FWA", name: "Fort Wayne International Airport", city: "Fort Wayne", country: "United States" },
  { code: "IND", name: "Indianapolis International Airport", city: "Indianapolis", country: "United States" },
  { code: "SBN", name: "South Bend International Airport", city: "South Bend", country: "United States" },
  { code: "CID", name: "The Eastern Iowa Airport", city: "Cedar Rapids", country: "United States" },
  { code: "DSM", name: "Des Moines International Airport", city: "Des Moines", country: "United States" },
  { code: "ICT", name: "Wichita Dwight D. Eisenhower National Airport", city: "Wichita", country: "United States" },
  { code: "LEX", name: "Blue Grass Airport", city: "Lexington", country: "United States" },
  { code: "SDF", name: "Louisville International Airport", city: "Louisville", country: "United States" },
  { code: "BTR", name: "Baton Rouge Metropolitan Airport", city: "Baton Rouge", country: "United States" },
  { code: "MSY", name: "Louis Armstrong New Orleans International Airport", city: "New Orleans", country: "United States" },
  { code: "SHV", name: "Shreveport Regional Airport", city: "Shreveport", country: "United States" },
  { code: "AUG", name: "Augusta State Airport", city: "Augusta", country: "United States" },
  { code: "BGR", name: "Bangor International Airport", city: "Bangor", country: "United States" },
  { code: "PWM", name: "Portland International Jetport", city: "Portland", country: "United States" },
  { code: "BWI", name: "Baltimore/Washington International Thurgood Marshall Airport", city: "Baltimore", country: "United States" },
  { code: "HYA", name: "Cape Cod Gateway Airport", city: "Hyannis", country: "United States" },
  { code: "ACK", name: "Nantucket Memorial Airport", city: "Nantucket", country: "United States" },
  { code: "ORH", name: "Worcester Regional Airport", city: "Worcester", country: "United States" },
  { code: "BTL", name: "Battle Creek Executive Airport", city: "Battle Creek", country: "United States" },
  { code: "DTW", name: "Detroit Metropolitan Airport", city: "Detroit", country: "United States" },
  { code: "DET", name: "Coleman A. Young International Airport", city: "Detroit", country: "United States" },
  { code: "FNT", name: "Bishop International Airport", city: "Flint", country: "United States" },
  { code: "GRR", name: "Gerald R. Ford International Airport", city: "Grand Rapids", country: "United States" },
  { code: "AZO", name: "Kalamazoo-Battle Creek International Airport", city: "Kalamazoo", country: "United States" },
  { code: "LAN", name: "Capital Region International Airport", city: "Lansing", country: "United States" },
  { code: "MBS", name: "MBS International Airport", city: "Saginaw", country: "United States" },
  { code: "DLH", name: "Duluth International Airport", city: "Duluth", country: "United States" },
  { code: "MSP", name: "Minneapolis-Saint Paul International Airport", city: "Minneapolis", country: "United States" },
  { code: "RST", name: "Rochester International Airport", city: "Rochester", country: "United States" },
  { code: "GPT", name: "Gulfport-Biloxi International Airport", city: "Gulfport", country: "United States" },
  { code: "JAN", name: "Jackson-Medgar Wiley Evers International Airport", city: "Jackson", country: "United States" },
  { code: "MCI", name: "Kansas City International Airport", city: "Kansas City", country: "United States" },
  { code: "STL", name: "St. Louis Lambert International Airport", city: "St. Louis", country: "United States" },
  { code: "SGF", name: "Springfield-Branson National Airport", city: "Springfield", country: "United States" },
  { code: "BIL", name: "Billings Logan International Airport", city: "Billings", country: "United States" },
  { code: "LNK", name: "Lincoln Airport", city: "Lincoln", country: "United States" },
  { code: "OMA", name: "Eppley Airfield", city: "Omaha", country: "United States" },
  { code: "RNO", name: "Reno-Tahoe International Airport", city: "Reno", country: "United States" },
  { code: "MHT", name: "Manchester-Boston Regional Airport", city: "Manchester", country: "United States" },
  { code: "ACY", name: "Atlantic City International Airport", city: "Atlantic City", country: "United States" },
  { code: "TTN", name: "Trenton-Mercer Airport", city: "Trenton", country: "United States" },
  { code: "ABQ", name: "Albuquerque International Sunport", city: "Albuquerque", country: "United States" },
  { code: "ALM", name: "Alamogordo-White Sands Regional Airport", city: "Alamogordo", country: "United States" },
  { code: "ALB", name: "Albany International Airport", city: "Albany", country: "United States" },
  { code: "BUF", name: "Buffalo Niagara International Airport", city: "Buffalo", country: "United States" },
  { code: "ISP", name: "Long Island MacArthur Airport", city: "Islip", country: "United States" },
  { code: "LGA", name: "LaGuardia Airport", city: "New York", country: "United States" },
  { code: "SWF", name: "New York Stewart International Airport", city: "Newburgh", country: "United States" },
  { code: "ROC", name: "Frederick Douglass Greater Rochester International Airport", city: "Rochester", country: "United States" },
  { code: "SYR", name: "Syracuse Hancock International Airport", city: "Syracuse", country: "United States" },
  { code: "HPN", name: "Westchester County Airport", city: "White Plains", country: "United States" },
  { code: "AVL", name: "Asheville Regional Airport", city: "Asheville", country: "United States" },
  { code: "CLT", name: "Charlotte Douglas International Airport", city: "Charlotte", country: "United States" },
  { code: "FAY", name: "Fayetteville Regional Airport", city: "Fayetteville", country: "United States" },
  { code: "GSO", name: "Piedmont Triad International Airport", city: "Greensboro", country: "United States" },
  { code: "RDU", name: "Raleigh-Durham International Airport", city: "Raleigh", country: "United States" },
  { code: "INT", name: "Smith Reynolds Airport", city: "Winston-Salem", country: "United States" },
  { code: "BIS", name: "Bismarck Municipal Airport", city: "Bismarck", country: "United States" },
  { code: "FAR", name: "Hector International Airport", city: "Fargo", country: "United States" },
  { code: "CAK", name: "Akron-Canton Airport", city: "Akron", country: "United States" },
  { code: "CVG", name: "Cincinnati/Northern Kentucky International Airport", city: "Cincinnati", country: "United States" },
  { code: "CLE", name: "Cleveland Hopkins International Airport", city: "Cleveland", country: "United States" },
  { code: "CMH", name: "John Glenn Columbus International Airport", city: "Columbus", country: "United States" },
  { code: "DAY", name: "Dayton International Airport", city: "Dayton", country: "United States" },
  { code: "TOL", name: "Toledo Express Airport", city: "Toledo", country: "United States" },
  { code: "OKC", name: "Will Rogers World Airport", city: "Oklahoma City", country: "United States" },
  { code: "TUL", name: "Tulsa International Airport", city: "Tulsa", country: "United States" },
  { code: "EUG", name: "Eugene Airport", city: "Eugene", country: "United States" },
  { code: "PDX", name: "Portland International Airport", city: "Portland", country: "United States" },
  { code: "HIO", name: "Portland-Hillsboro Airport", city: "Hillsboro", country: "United States" },
  { code: "SLE", name: "Salem Municipal Airport", city: "Salem", country: "United States" },
  { code: "ABE", name: "Lehigh Valley International Airport", city: "Allentown", country: "United States" },
  { code: "ERI", name: "Erie International Airport", city: "Erie", country: "United States" },
  { code: "MDT", name: "Harrisburg International Airport", city: "Harrisburg", country: "United States" },
  { code: "PHL", name: "Philadelphia International Airport", city: "Philadelphia", country: "United States" },
  { code: "PIT", name: "Pittsburgh International Airport", city: "Pittsburgh", country: "United States" },
  { code: "AVP", name: "Wilkes-Barre/Scranton International Airport", city: "Scranton", country: "United States" },
  { code: "PVD", name: "T.F. Green Airport", city: "Providence", country: "United States" },
  { code: "CHS", name: "Charleston International Airport", city: "Charleston", country: "United States" },
  { code: "CAE", name: "Columbia Metropolitan Airport", city: "Columbia", country: "United States" },
  { code: "GSP", name: "Greenville-Spartanburg International Airport", city: "Greenville", country: "United States" },
  { code: "MYR", name: "Myrtle Beach International Airport", city: "Myrtle Beach", country: "United States" },
  { code: "PIR", name: "Pierre Regional Airport", city: "Pierre", country: "United States" },
  { code: "RAP", name: "Rapid City Regional Airport", city: "Rapid City", country: "United States" },
  { code: "FSD", name: "Sioux Falls Regional Airport", city: "Sioux Falls", country: "United States" },
  { code: "TRI", name: "Tri-Cities Airport", city: "Bristol", country: "United States" },
  { code: "CHA", name: "Chattanooga Metropolitan Airport", city: "Chattanooga", country: "United States" },
  { code: "TYS", name: "McGhee Tyson Airport", city: "Knoxville", country: "United States" },
  { code: "MEM", name: "Memphis International Airport", city: "Memphis", country: "United States" },
  { code: "BNA", name: "Nashville International Airport", city: "Nashville", country: "United States" },
  { code: "AMA", name: "Rick Husband Amarillo International Airport", city: "Amarillo", country: "United States" },
  { code: "AUS", name: "Austin-Bergstrom International Airport", city: "Austin", country: "United States" },
  { code: "CRP", name: "Corpus Christi International Airport", city: "Corpus Christi", country: "United States" },
  { code: "DAL", name: "Dallas Love Field", city: "Dallas", country: "United States" },
  { code: "ELP", name: "El Paso International Airport", city: "El Paso", country: "United States" },
  { code: "HOU", name: "William P. Hobby Airport", city: "Houston", country: "United States" },
  { code: "LBB", name: "Lubbock Preston Smith International Airport", city: "Lubbock", country: "United States" },
  { code: "MAF", name: "Midland International Air and Space Port", city: "Midland", country: "United States" },
  { code: "SAT", name: "San Antonio International Airport", city: "San Antonio", country: "United States" },
  { code: "SLC", name: "Salt Lake City International Airport", city: "Salt Lake City", country: "United States" },
  { code: "BTV", name: "Burlington International Airport", city: "Burlington", country: "United States" },
  { code: "MPV", name: "Edward F. Knapp State Airport", city: "Montpelier", country: "United States" },
  { code: "RUT", name: "Rutland Southern Vermont Regional Airport", city: "Rutland", country: "United States" },
  { code: "PHF", name: "Newport News/Williamsburg International Airport", city: "Newport News", country: "United States" },
  { code: "ORF", name: "Norfolk International Airport", city: "Norfolk", country: "United States" },
  { code: "RIC", name: "Richmond International Airport", city: "Richmond", country: "United States" },
  { code: "ROA", name: "Roanoke-Blacksburg Regional Airport", city: "Roanoke", country: "United States" },
  { code: "PSC", name: "Tri-Cities Airport", city: "Pasco", country: "United States" },
  { code: "GEG", name: "Spokane International Airport", city: "Spokane", country: "United States" },
  { code: "CRW", name: "West Virginia International Yeager Airport", city: "Charleston", country: "United States" },
  { code: "CKB", name: "North Central West Virginia Airport", city: "Clarksburg", country: "United States" },
  { code: "HTS", name: "Huntington Tri-State Airport", city: "Huntington", country: "United States" },
  { code: "GRB", name: "Green Bay Austin Straubel International Airport", city: "Green Bay", country: "United States" },
  { code: "MSN", name: "Dane County Regional Airport", city: "Madison", country: "United States" },
  { code: "MKE", name: "Milwaukee Mitchell International Airport", city: "Milwaukee", country: "United States" },
  { code: "CPR", name: "Casper-Natrona County International Airport", city: "Casper", country: "United States" },
  { code: "CYS", name: "Cheyenne Regional Airport", city: "Cheyenne", country: "United States" },
  { code: "JAC", name: "Jackson Hole Airport", city: "Jackson Hole", country: "United States" },
  { code: "RKS", name: "Southwest Wyoming Regional Airport", city: "Rock Springs", country: "United States" },
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