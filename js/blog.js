document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.getElementById('blogGrid');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const categoryButtons = document.querySelectorAll('.category-btn');
    let currentCategory = 'all';

    // Simulated API endpoint (replace with your actual API)
    const API_URL = 'https://api.example.com/blog-posts';

    // Sample blog data (replace with API call)
    const blogPosts = [
        {
            id: 1,
            title: 'Wildlife Conservation Success Stories',
            excerpt: 'Discover how dedicated conservation efforts are helping endangered species recover...',
            category: 'conservation',
            image: '../images/blog/wildlife-conservation.jpg',
            date: 'March 15, 2024',
            author: 'John Doe'
        },
        // Add more blog posts...
    ];

    function createBlogCard(post) {
        return `
            <div class="blog-card" data-category="${post.category}">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="blog-category">${post.category}</div>
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span><i class="far fa-calendar"></i> ${post.date}</span>
                        <span><i class="far fa-user"></i> By ${post.author}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="blog-post.html?id=${post.id}" class="read-more">
                        Read More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;
    }

    function filterPosts(category) {
        const cards = document.querySelectorAll('.blog-card');
        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    async function loadBlogPosts() {
        loadingSpinner.style.display = 'block';
        try {
            // Replace this with actual API call
            // const response = await fetch(API_URL);
            // const posts = await response.json();
            const posts = blogPosts; // Using sample data

            blogGrid.innerHTML = posts.map(post => createBlogCard(post)).join('');
            filterPosts(currentCategory);
        } catch (error) {
            console.error('Error loading blog posts:', error);
            blogGrid.innerHTML = '<p class="error-message">Failed to load blog posts. Please try again later.</p>';
        } finally {
            loadingSpinner.style.display = 'none';
        }
    }

    // Category filter functionality
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            filterPosts(currentCategory);
        });
    });

    // Initial load
    loadBlogPosts();
}); 