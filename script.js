function toggleCSS() {
    const toggle = document.getElementById('cssToggle');
    const stylesheet = document.getElementById('stylesheet');

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            stylesheet.href = 'css/skeleton-dark.css';
        } else {
            stylesheet.href = 'css/skeleton-auto.css';
        }
    });
}

toggleCSS(); // Call the function to enable the toggle functionality
