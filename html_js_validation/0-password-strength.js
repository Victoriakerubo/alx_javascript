// Get references to the form and error message element
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorElement = document.getElementById("error");

// Function to validate the password
function validatePassword() {
    // Regular expressions for checking criteria
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;

    const password = passwordInput.value;

    // Check each criterion
    const isLengthValid = password.length >= minLength;
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);

    // Check if all criteria are met
    if (
        isLengthValid &&
        hasUppercase &&
        hasLowercase &&
        hasDigit &&
        hasSpecialChar
    ) {
        return true; // Password is valid
    } else {
        // Password is invalid, display an error message
        errorElement.textContent =
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*).";
        return false;
    }
}

// Event listener for form submission
passwordForm.addEventListener("submit", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Clear any previous error messages
    errorElement.textContent = "";

    // Validate the password
    if (validatePassword()) {
        // Password is valid, you can submit the form here
        alert("Password is valid. Form submitted.");
    }
});
