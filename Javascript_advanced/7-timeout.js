// Log to the console: Start of the execution queue
console.log("Start of the execution queue");

// Log to the console: Final code block to be executed using setTimeout (with a delay of 0)
setTimeout(function () {
    console.log("Final code block to be executed");
}, 0);

// Use a loop to log numbers 1 to 100
for (var i = 1; i <= 100; i++) {
    console.log(i);
}

// Log to the console: End of the loop printing
console.log("End of the loop printing");
