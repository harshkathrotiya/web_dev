document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for all anchor links
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

    // Animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Adventure preview card interactions
    const adventureCards = document.querySelectorAll('.adventure-preview-card');
    adventureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const overlay = card.querySelector('.adventure-overlay');
            overlay.style.transform = 'translateY(0)';
        });
        card.addEventListener('mouseleave', () => {
            const overlay = card.querySelector('.adventure-overlay');
            overlay.style.transform = 'translateY(100px)';
        });
    });

    // Gallery image preview
    const galleryItems = document.querySelectorAll('.gallery-item img');
    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('gallery-modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(modal);

            // Close modal functionality
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.feature-card, .fact-card, .gallery-item');
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                revealOnScroll.unobserve(entry.target);
            }
        });
    });

    revealElements.forEach(element => {
        element.classList.add('reveal-hidden');
        revealOnScroll.observe(element);
    });
}); 