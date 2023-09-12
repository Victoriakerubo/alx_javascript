const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Define the URL with the movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
  } else if (response.statusCode === 200) {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  } else {
    console.error(`Error: ${response.statusCode}`);
  }
});
