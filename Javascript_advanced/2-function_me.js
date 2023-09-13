// Define the welcomeMessage function
function welcomeMessage(fullName) {
    // This function is a closure that displays a welcome message with the provided fullName
    return function() {
        alert(`Welcome ${fullName}`);
    };
}

// Create three variables with different names and call welcomeMessage with each name
var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");

// Test the functions by calling them
guillaume(); // This will display "Welcome Guillaume" in an alert
alex();      // This will display "Welcome Alex" in an alert
fred();      // This will display "Welcome Fred" in an alert
