// Get all scale buttons
const scaleButtons = document.querySelectorAll('.scale-item');

// Add click event to each button
scaleButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Remove the 'selected' class from all buttons
        scaleButtons.forEach((btn) => {
            const circle = btn.querySelector('.circle');
            circle.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked button
        const circle = button.querySelector('.circle');
        circle.classList.add('selected');
    });
});
