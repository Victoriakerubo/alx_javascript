// Define a variable globalVariable with the value "Welcome"
var globalVariable = "Welcome";

// Define the outer function
function outer() {
    // Alert the content of globalVariable
    alert(globalVariable);

    // Create a variable course with the value "Holberton"
    var course = "Holberton";

    // Define the inner function
    function inner() {
        // Alert the content of globalVariable and course concatenated
        alert(globalVariable + " " + course);

        // Create a variable exclamation with the value "!"
        var exclamation = "!";

        // Define the inception function
        function inception() {
            // Alert the content of globalVariable, course, and exclamation concatenated
            alert(globalVariable + " " + course + exclamation);
        }

        // Call the inception function
        inception();
    }

    // Call the inner function
    inner();
}

// Call the outer function in the main code (outside any function)
outer();

// This script will display three popups: "Welcome", "Welcome Holberton", and "Welcome Holberton!"
