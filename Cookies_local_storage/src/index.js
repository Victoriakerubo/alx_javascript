// Function to set cookies
function setCookies() {
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');

    // Get values from inputs
    const firstname = firstnameInput.value;
    const email = emailInput.value;

    // Set cookies with values
    document.cookie = `firstname=${firstname}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    document.cookie = `email=${email}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    
    // Clear input fields
    firstnameInput.value = '';
    emailInput.value = '';
}

// Function to show cookies
function showCookies() {
    // Get the cookie values
    const cookies = document.cookie.split(';');

    // Create a paragraph element
    const paragraph = document.createElement('p');

    // Build the inner HTML with cookie values
    let cookieText = 'Cookies: ';
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        cookieText += `${name}: ${value}, `;
    }

    // Remove the trailing comma and space
    cookieText = cookieText.slice(0, -2);

    // Set the inner HTML of the paragraph
    paragraph.innerHTML = cookieText;

    // Append the paragraph at the bottom of the page
    document.getElementById('cookieDisplay').appendChild(paragraph);
}
