const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Character ID for Wedge Antilles
const characterId = 18;

// Send a GET request to the Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
  } else if (response.statusCode === 200) {
    const filmData = JSON.parse(body);
    let count = 0;

    // Loop through each film and count appearances of Wedge Antilles
    filmData.results.forEach((film) => {
      film.characters.forEach((character) => {
        if (character.includes(`/people/${characterId}/`)) {
          count++;
        }
      });
    });

    console.log(count);
  } else {
    console.error(`Error: ${response.statusCode}`);
  }
});
