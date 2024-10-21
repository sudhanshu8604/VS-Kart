document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form'); // Select the login form

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the input fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Check if the email and password are not empty
        if (email && password) {
            // Display a login successful message
            alert('Login successful!');

            // Redirect to the home page
            window.location.href = 'index.html'; // Change this to your home page URL
        } else {
            alert('Please enter both email and password.'); // Show an error message if fields are empty
        }
    });
});
