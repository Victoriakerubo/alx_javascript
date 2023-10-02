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

// Function to set cookies with a 10-day expiration
function setCookies() {
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');

    // Get values from inputs
    const firstname = firstnameInput.value;
    const email = emailInput.value;

    // Calculate the expiration date (10 days from now)
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);

    // Set cookies with values and expiration date
    document.cookie = `firstname=${firstname}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}; path=/`;

    // Clear input fields
    firstnameInput.value = '';
    emailInput.value = '';
}
// Function to get the value of a specific cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return '';
}
// Function to display cookies in a specific format
function showCookies() {
    // Get cookie values
    const firstname = getCookie('firstname');
    const email = getCookie('email');

    // Create a paragraph element
    const paragraph = document.createElement('p');

    // Set the inner HTML with the desired format
    paragraph.innerHTML = `Email: ${email} - Firstname: ${firstname}`;

    // Append the paragraph at the bottom of the page
    document.getElementById('cookieDisplay').appendChild(paragraph);
}
function showForm() {
    // Remove the welcome message if it exists
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }

    // Show the login form
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'block';
}
function hideForm() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';
}
function deleteCookiesAndShowForm() {
    // Remove the firstname and email cookies using js-cookie
    Cookies.remove('firstname');
    Cookies.remove('email');
    // Show the login form
    showForm();
function deleteCookiesAndShowForm() {
    // Remove the firstname and email cookies using js-cookie
    Cookies.remove('firstname');
    Cookies.remove('email');

    // Show the login form
    showForm();
}

function showWelcomeMessageOrForm() {
    const firstname = getCookie('firstname');

    if (firstname) {
        // User is logged in, display welcome message
        const welcomeMessage = document.createElement('h1');
        welcomeMessage.id = 'welcomeMessage';
        welcomeMessage.textContent = `Welcome ${firstname} (logout)`;

        // Create a link for logout
        const logoutLink = document.createElement('a');
        logoutLink.textContent = 'logout';
        logoutLink.style.fontWeight = 'normal';
        logoutLink.style.fontStyle = 'italic';
        logoutLink.style.marginLeft = '10px';
        logoutLink.href = '#';

        // Add a click event to the logout link
        logoutLink.addEventListener('click', function () {
            deleteCookiesAndShowForm();
            hideWelcomeMessage();
        });

        // Append the welcome message and logout link
        welcomeMessage.appendChild(logoutLink);
        document.body.innerHTML = '';
        document.body.appendChild(welcomeMessage);
    } else {
        // User is not logged in, show the login form
        showForm();
    }
// Function to set cookies and show the welcome message or form
function setCookiesAndShowWelcomeMessage() {
    const firstnameInput = document.getElementById('loginUsername');
    const emailInput = document.getElementById('loginPassword');

    // Get values from inputs
    const firstname = firstnameInput.value;
    const email = emailInput.value;

    // Set cookies using js-cookie
    Cookies.set('firstname', firstname, { expires: 10 });
    Cookies.set('email', email, { expires: 10 });

    // Call the function to show the welcome message or form
    showWelcomeMessageOrForm();
}
const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];
if (typeof Storage === "undefined") {
    alert("Sorry, your browser does not support Web storage. Try again with a better one.");
} else {
    // Local storage is supported, proceed with the application
    createStore();
    displayCart();
}
function addItemToCart(item) {
    localStorage.setItem(item, "true");
    displayCart();
}
function createStore() {
    const ul = document.createElement("ul");

    availableItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => {
            addItemToCart(item);
        });
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}
function displayCart() {
    const cartItemCount = Object.keys(localStorage).length;

    if (cartItemCount > 0) {
        const cartMessage = `You previously had ${cartItemCount} item${cartItemCount > 1 ? "s" : ""} in your cart.`;
        const p = document.createElement("p");
        p.textContent = cartMessage;

        // Remove any existing cart message before adding a new one
        const existingCartMessage = document.querySelector("#cartMessage");
        if (existingCartMessage) {
            existingCartMessage.remove();
        }

        p.id = "cartMessage";
        document.body.appendChild(p);
    }
}


