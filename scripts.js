document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '!');
        // Reset form
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Ensure the form is accessible and user-friendly on mobile devices
function setResponsiveForm() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.style.fontSize = '16px'; // Ensures tap targets are large enough on mobile
    });

    const submitButton = form.querySelector('button');
    submitButton.style.padding = '10px 20px'; // Increase touch area for better user experience
}

// Call the function to set responsive form styles
setResponsiveForm();