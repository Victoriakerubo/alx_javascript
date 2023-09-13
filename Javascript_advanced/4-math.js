// Define the divideBy function
function divideBy(firstNumber) {
    // Return a function that divides the provided number by firstNumber
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

// Define the addBy function
function addBy(firstNumber) {
    // Return a function that adds the provided number to firstNumber
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// Create four closures using the divideBy and addBy functions
var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);

// Test the closures with different values
console.log(addBy100(20));    // Should display 120
console.log(divideBy10(20));  // Should display 2
console.log(divideBy100(200)); // Should display 2
console.log(addBy1000(20));   // Should display 1020
