const request = require('request');

// Get the URL from command line arguments
const url = process.argv[2];

// Send a GET request to the specified URL
request(url, (error, response) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
