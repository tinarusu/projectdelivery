document.addEventListener('DOMContentLoaded', () => {
    const contButton = document.getElementById('contButton');
    const contDropdown = document.getElementById('contDropdown');
    const menuButton = document.getElementById('menuButton');
    const menuDropdown = document.getElementById('menuDropdown');
    const themeSwitch = document.getElementById('themeSwitch');
    const languageButton = document.getElementById('languageButton');
    const body = document.body;

    // Toggle dropdown visibility
    function toggleDropdown(button, dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    // Event listeners for button clicks
    contButton.addEventListener('click', () => {
        toggleDropdown(contButton, contDropdown);
    });

    menuButton.addEventListener('click', () => {
        toggleDropdown(menuButton, menuDropdown);
    });

    // Close dropdowns when clicking outside of them
    document.addEventListener('click', (event) => {
        if (!contButton.contains(event.target) && !contDropdown.contains(event.target)) {
            contDropdown.style.display = 'none';
        }
        if (!menuButton.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.style.display = 'none';
        }
    });

    // Toggle theme
    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('light-theme');
    });

    


    const cards = document.querySelectorAll('.card');
    const gif = document.getElementById('titleGif');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('zoomed'));
            card.classList.add('zoomed');
            const gifSrc = gif.src;
            gif.src = '';
            gif.src = gifSrc;
        });
    });
});