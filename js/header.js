document.addEventListener('DOMContentLoaded', function () {
    // Get the necessary elements
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');

    // Check if the elements exist on the current page
    if (hamburger && menu && closeMenu) {
        // Open the menu when the hamburger is clicked
        hamburger.addEventListener('click', function () {
            menu.classList.add('active'); // Show the menu
        });

        // Close the menu when the close icon is clicked
        closeMenu.addEventListener('click', function () {
            menu.classList.remove('active'); // Hide the menu
            closeMenu.classList.toggle('rotated'); // Optional: Rotate the close button
        });
    } else {
        console.log('Menu elements not found on this page.');
    }
});
