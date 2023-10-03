// Get references to form elements and error message element
const dynamicForm = document.getElementById("dynamicForm");
const numFieldsSelect = document.getElementById("numFields");
const inputContainer = document.getElementById("inputContainer");
const errorElement = document.getElementById("error");

// Function to generate dynamic input fields
function generateInputFields(numFields) {
    inputContainer.innerHTML = ''; // Clear existing input fields

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}

// Function to validate the form before submission
function validateForm() {
    const numFields = parseInt(numFieldsSelect.value, 10);
    let isValid = true;

    // Check if any dynamically generated fields are empty
    for (let i = 1; i <= numFields; i++) {
        const inputField = document.querySelector('input[name="field' + i + '"]');
        if (!inputField.value) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        errorElement.textContent = "Please fill in all fields.";
    }

    return isValid;
}

// Event listener for form submission
dynamicForm.addEventListener("submit", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Clear any previous error messages
    errorElement.textContent = "";

    // Validate the form before submission
    if (validateForm()) {
        // Form is valid, you can submit the form here
        alert("Form submitted successfully!");
    }
});

// Event listener for changes in the number of fields selection
numFieldsSelect.addEventListener("change", function () {
    const numFields = parseInt(numFieldsSelect.value, 10);
    generateInputFields(numFields);
});

// Generate initial input fields based on the default selected value
generateInputFields(1); // Change this value to match the default selection
