const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error(error.message);
  } else if (response.statusCode === 200) {
    // Write the response body to the specified file path (UTF-8 encoded)
    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
      if (writeError) {
        console.error(writeError.message);
      } else {
        console.log(`File saved as ${filePath}`);
      }
    });
  } else {
    console.error(`Error: ${response.statusCode}`);
  }
});
