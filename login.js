// Get the form and input elements
const loginform = document.querySelector(loginform);
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

// Define the predefined username and password
const username = 'admin';
const password = 'password';

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the entered username and password values
  const enteredUsername = usernameInput.value.trim();
  const enteredPassword = passwordInput.value.trim();

  // Check if the entered values match the predefined ones
  if (enteredUsername === username && enteredPassword === password) {
    // If they match, redirect to the dashboard page
    window.location.href = 'home.html ';
  } else {
    // If they don't match, show an error message
    alert('Invalid username or password');
  }
});