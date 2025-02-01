document.addEventListener('DOMContentLoaded', () => {
    // Booking Modal Functionality
    const bookButtons = document.querySelectorAll('.book-btn');
    const body = document.body;

    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const adventureTitle = button.parentElement.querySelector('h3').textContent;
            
            // Create Modal
            const modal = document.createElement('div');
            modal.className = 'booking-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>Book ${adventureTitle}</h2>
                    <form class="booking-form">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="date">Preferred Date</label>
                            <input type="date" id="date" required>
                        </div>
                        <div class="form-group">
                            <label for="participants">Number of Participants</label>
                            <input type="number" id="participants" min="1" required>
                        </div>
                        <button type="submit" class="submit-btn">Book Now</button>
                    </form>
                </div>
            `;

            body.appendChild(modal);
            
            // Close Modal
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });

            // Form Submission
            const form = modal.querySelector('.booking-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // Add your booking logic here
                alert('Booking submitted successfully!');
                modal.remove();
            });
        });
    });

    // Animate adventure cards on scroll
    const cards = document.querySelectorAll('.adventure-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}); 