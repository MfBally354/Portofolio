// ==================== HAMBURGER MENU ====================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Toggle menu saat hamburger diklik
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu saat nav link diklik
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = '#fff';
    }
});

// ==================== LOADING ANIMATION (OPTIONAL) ====================
// Uncomment jika ingin menambahkan loading screen
/*
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
*/

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Hi there!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my portfolio!', 'color: #6b7280; font-size: 14px;');
console.log('%cBuilt with ❤️ by Iqbal Guntur Bismoko', 'color: #6b7280; font-size: 12px;');
