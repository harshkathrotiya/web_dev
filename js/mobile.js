document.addEventListener('DOMContentLoaded', () => {
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (event) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Handle mobile menu
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');
    const navLinks = document.querySelectorAll('.navigation a');

    menuBtn.addEventListener('click', () => {
        navigation.classList.toggle('active');
        document.body.style.overflow = navigation.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Handle orientation change
    window.addEventListener('orientationchange', () => {
        // Reset any necessary styles
        navigation.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Improve scroll performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Handle scroll-based animations
                ticking = false;
            });
            ticking = true;
        }
    });

    // Handle touch events for galleries
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('touchstart', () => {
            item.classList.add('touch-active');
        });

        item.addEventListener('touchend', () => {
            item.classList.remove('touch-active');
        });
    });
}); 