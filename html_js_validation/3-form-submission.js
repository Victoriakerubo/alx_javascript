// Get references to form elements and error/success message elements
const submitForm = document.getElementById("submitForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("error");
const successElement = document.getElementById("success");

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve values entered in the form fields
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validate form fields
    if (name === "" || email === "") {
        errorElement.textContent = "Please fill in all required fields.";
        successElement.textContent = ""; // Clear any previous success message
    } else {
        // Form is valid, you can submit the form here
        // In this example, we'll display a success message
        successElement.textContent = "Form submitted successfully!";
        errorElement.textContent = ""; // Clear any previous error message
    }
}

// Add an event listener to the form for form submission
submitForm.addEventListener("submit", handleFormSubmit);
