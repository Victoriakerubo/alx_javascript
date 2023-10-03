// Get references to the form and error message element
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("error");

// Function to validate the email format
function validateEmail() {
    // Regular expression for checking email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const email = emailInput.value;

    // Check if the email format is valid
    if (emailRegex.test(email)) {
        return true; // Email is valid
    } else {
        // Email format is invalid, display an error message
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    }
}

// Event listener for form submission
emailForm.addEventListener("submit", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Clear any previous error messages
    errorElement.textContent = "";

    // Validate the email format
    if (validateEmail()) {
        // Email format is valid, you can submit the form here
        alert("Email format is valid. Form submitted.");
    }
});
