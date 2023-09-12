const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Send a GET request to the specified API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error.message);
  } else if (response.statusCode === 200) {
    const todos = JSON.parse(body);

    // Create an object to store the count of completed tasks for each user
    const completedTasksByUser = {};

    // Loop through the todos and count completed tasks for each user
    todos.forEach((todo) => {
      if (todo.completed) {
        if (!completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId] = 1;
        } else {
          completedTasksByUser[todo.userId]++;
        }
      }
    });

    // Print the count of completed tasks for each user
    console.log(completedTasksByUser);
  } else {
    console.error(`Error: ${response.statusCode}`);
  }
});
