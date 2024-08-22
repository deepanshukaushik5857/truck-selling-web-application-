// scripts.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Change input background color on focus and blur
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.backgroundColor = 'yellow';
        });
        input.addEventListener('blur', function() {
            this.style.backgroundColor = 'white';
        });
    });

    // Change button background color on hover
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'lightblue';
        });
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = ''; // Resets to original
        });
    });
});
