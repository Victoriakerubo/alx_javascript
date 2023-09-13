// Define the studentHogwarts module
var studentHogwarts = (function () {
    // Private variables
    var privateScore = 0;
    var name = null;

    // Private method to change the score
    function changeScoreBy(points) {
        privateScore += points;
    }

    // Public methods
    return {
        // Set the name of the student
        setName: function (newName) {
            name = newName;
        },

        // Reward the student by adding 1 to the score
        rewardStudent: function () {
            changeScoreBy(1);
        },

        // Penalize the student by subtracting 1 from the score
        penalizeStudent: function () {
            changeScoreBy(-1);
        },

        // Get the student's score
        getScore: function () {
            return name + ': ' + privateScore;
        },
    };
})();

// Create an instance of studentHogwarts named harry
var harry = Object.create(studentHogwarts);

// Set the name of Harry
harry.setName('Harry');

// Reward the student four times
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Log the name and score of Harry
console.log(harry.getScore()); // Should display "Harry: 4"

// Create another instance of studentHogwarts named draco
var draco = Object.create(studentHogwarts);

// Set the name of Draco
draco.setName('Draco');

// Reward the student one time and penalize three times
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log the name and score of Draco
console.log(draco.getScore()); // Should display "Draco: -2"
