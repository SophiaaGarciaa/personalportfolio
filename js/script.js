// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
});

// Hamburger menu toggle
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close menu when clicking on a navigation link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('navMenu');
            const hamburger = document.querySelector('.hamburger');
            
            if (menu && hamburger) {
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
});

document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                const menu = document.getElementById('navMenu');
                const hamburger = document.querySelector('.hamburger');
                menu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });