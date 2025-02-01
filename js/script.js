// Specific JavaScript for the home page parallax effects
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

// Enhanced parallax effect with smooth animation
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    
    // Using requestAnimationFrame for smoother animations
    requestAnimationFrame(() => {
        if (text) text.style.transform = `translateY(${value * 2.5}px)`;
        if (leaf) {
            leaf.style.transform = `translate(${value * 1.5}px, ${value * -1.5}px)`;
            leaf.style.rotate = `${value * 0.1}deg`;
        }
        if (hill5) hill5.style.transform = `translateX(${value * 1.5}px)`;
        if (hill4) hill4.style.transform = `translateX(${value * -1.5}px)`;
        if (hill1) hill1.style.transform = `translateY(${value * 1}px)`;
    });
});

// Add interactive elements to services cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealOnScroll); 