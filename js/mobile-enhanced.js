document.addEventListener('DOMContentLoaded', () => {
    // Touch Event Handling
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
        touchEndY = e.touches[0].clientY;
        
        // Prevent overscroll
        if (document.scrollTop === 0 && touchEndY > touchStartY) {
            e.preventDefault();
        }
    }, { passive: false });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-full-menu';
    
    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
        mobileMenu.classList.toggle('active');
    });

    // Smooth Scrolling
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            const headerOffset = 60;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Image Lazy Loading
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Prevent Double Tap Zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // Handle Device Orientation
    window.addEventListener('orientationchange', () => {
        // Reset scroll position and menu state
        window.scrollTo(0, 0);
        document.body.classList.remove('menu-open');
        mobileMenu.classList.remove('active');
    });

    // Performance Optimization
    const debouncedScroll = debounce(() => {
        // Handle scroll animations
        const scrolled = window.scrollY;
        document.documentElement.style.setProperty('--scroll', scrolled);
    }, 10);

    window.addEventListener('scroll', debouncedScroll);

    // Utility function for debouncing
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}); 