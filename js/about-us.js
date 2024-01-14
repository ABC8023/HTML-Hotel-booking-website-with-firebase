document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var form = document.getElementById('contact-form');

    // Attach an event listener to the form's submit event
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Show a pop-up message
        alert('Your message has been sent!');

        // Optionally, you can add code here to handle the form submission using AJAX or other methods
    });
});