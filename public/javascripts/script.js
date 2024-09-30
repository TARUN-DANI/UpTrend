document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const desktopMenu = document.getElementById('desktop-menu');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');

    // Toggle Menu for all screens
    hamburgerBtn.addEventListener('click', () => {
        if (window.innerWidth >= 1024) {
            // Show/Hide desktop menu for large screens
            desktopMenu.classList.toggle('hidden');
        } else {
            // Show/Hide mobile menu for small screens
            mobileMenu.style.transform = 'translateX(0)';
        }
    });

    // Close Mobile Menu on Close Button Click
    closeBtn.addEventListener('click', () => {
        mobileMenu.style.transform = 'translateX(-100%)';
    });

    // Close Mobile Menu on outside click
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            mobileMenu.style.transform = 'translateX(-100%)';
        }
    });
});

// colorUtils.js
function hexToRGB(hex) {
    hex = hex.replace(/^#/, '');
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.grid-item').forEach(item => {
        let bgColor = item.getAttribute('data-bgcolor');
        let panelColor = item.getAttribute('data-panelcolor');
        let textColor = item.getAttribute('data-textcolor');

        item.querySelector('.rounded-t-lg').style.backgroundColor = hexToRGB(bgColor);
        item.querySelector('.rounded-b-lg').style.backgroundColor = hexToRGB(panelColor);
        item.querySelector('.rounded-b-lg').style.color = hexToRGB(textColor);
    });
});
