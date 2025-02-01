document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });

    // Smooth Hover Effects
    document.querySelectorAll('.card, .btn').forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            element.style.transform = 'translateY(-5px)';
        });

        element.addEventListener('mouseleave', (e) => {
            element.style.transform = 'translateY(0)';
        });
    });

    // Loading State Management
    const showLoading = (element) => {
        element.classList.add('loading-skeleton');
    };

    const hideLoading = (element) => {
        element.classList.remove('loading-skeleton');
    };

    // Dynamic Background Colors
    const updateBackgroundColor = () => {
        const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        document.body.style.setProperty('--scroll-progress', scrolled);
    };

    window.addEventListener('scroll', updateBackgroundColor);

    // Tooltip Initialization
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip-content';
            tooltip.textContent = element.dataset.tooltip;
            element.appendChild(tooltip);
        });

        element.addEventListener('mouseleave', (e) => {
            const tooltip = element.querySelector('.tooltip-content');
            if (tooltip) tooltip.remove();
        });
    });
}); 