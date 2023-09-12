const request = require('request');
const fs = require('fs');

// Get the URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Check if both URL and file path are provided
if (!url || !filePath) {
  console.error("Usage: node script.js <URL> <filePath>");
  process.exit(1);
}

// Send a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error(`Error requesting URL: ${error.message}`);
  } else if (response.statusCode === 200) {
    // Write the response body to the specified file
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error(`Error writing to file: ${writeError.message}`);
      } else {
        console.log(`File saved as ${filePath}`);
      }
    });
  } else {
    console.error(`Error: Received status code ${response.statusCode}`);
  }
});
