const fs = require('fs');
const path = require('path');

// Path to the airports.dat file
const airportsDataPath = path.join(__dirname, '../app/data/airports.dat');
// Path to output the JSON file
const outputPath = path.join(__dirname, '../app/data/airports-data.json');

// Read the airports.dat file
try {
  const data = fs.readFileSync(airportsDataPath, 'utf-8');
  const lines = data.split('\n');
  
  const airports = [];
  
  for (const line of lines) {
    if (!line.trim()) continue;
    
    // Parse the CSV fields
    const values = line.split(',');
    if (values.length < 5) continue;
    
    // Extract the relevant fields (removing quotes)
    const name = values[1].replace(/"/g, '');
    const city = values[2].replace(/"/g, '');
    const country = values[3].replace(/"/g, '');
    const code = values[4].replace(/"/g, '');
    
    // Only include airports with valid IATA codes (3 letters)
    if (code && code !== '\\N' && code.length === 3) {
      airports.push({
        code,
        name,
        city,
        country
      });
    }
  }
  
  // Sort the airports by code
  airports.sort((a, b) => a.code.localeCompare(b.code));
  
  // Write the data to a JSON file
  fs.writeFileSync(outputPath, JSON.stringify(airports, null, 2));
  
  console.log(`Successfully converted ${airports.length} airports to JSON.`);
  console.log(`Output file: ${outputPath}`);
} catch (error) {
  console.error('Error converting airports data:', error);
  process.exit(1);
} 