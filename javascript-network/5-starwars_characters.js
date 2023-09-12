const request = require('request');

// Get the Movie ID from the command line arguments
const movieId = process.argv[2];

// Star Wars API URL
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

// Send a GET request to the specified API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
  } else if (response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    // Function to fetch character names and print them one by one
    function fetchCharacterNames(characterUrls, index) {
      if (index >= characterUrls.length) {
        return;
      }

      const characterUrl = characterUrls[index];

      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error(charError.message);
        } else if (charResponse.statusCode === 200) {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);

          // Continue fetching the next character
          fetchCharacterNames(characterUrls, index + 1);
        } else {
          console.error(`Error: ${charResponse.statusCode}`);
        }
      });
    }

    // Start fetching character names
    fetchCharacterNames(characters, 0);
  } else {
    console.error(`Error: ${response.statusCode}`);
  }
});
