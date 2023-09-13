function welcome(firstName, lastName) {
    // Create a variable fullName using lexical scoping
    const fullName = `${firstName} ${lastName}`;

    // Define a function named displayFullName within the welcome function
    function displayFullName() {
        // Display an alert with the welcome message
        alert(`Welcome ${fullName}!`);
    }

    // Call the displayFullName function at the end of the welcome function
    displayFullName();
}

// Test the welcome function
welcome('Holberton', 'School');

// Attempting to access fullName outside the welcome function will result in a reference error
// Uncomment the following line to see the reference error
// alert(fullName); // This will result in a reference error
