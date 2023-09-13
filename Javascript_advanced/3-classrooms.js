// Define the createClassRoom function
function createClassRoom(numberOfStudents) {
    // Define the studentSeat function inside createClassRoom
    function studentSeat(seat) {
        // Return a function that returns the seat number
        return function() {
            return seat;
        };
    }

    // Create an empty array to store students
    var students = [];

    // Use a loop to populate the students array with seat functions
    for (var i = 1; i <= numberOfStudents; i++) {
        students.push(studentSeat(i));
    }

    // Return the students array
    return students;
}

// Create a closure named classRoom by calling createClassRoom with 10 students
var classRoom = createClassRoom(10);

// Test the classRoom by calling the seat functions
console.log(classRoom[0]()); // Should return 1
console.log(classRoom[3]()); // Should return 4
console.log(classRoom[9]()); // Should return 10
