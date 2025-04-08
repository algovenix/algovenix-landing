document.addEventListener('DOMContentLoaded', function() {
    // Set the fixed launch date - July 1, 2025
    const launchDate = new Date('July 1, 2025 00:00:00');
    
    // Update countdown
    function updateCountdown() {
        const currentDate = new Date();
        const difference = launchDate - currentDate;
        
        // Calculate time components
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Create HTML for countdown
        const countdownHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">days</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">hours</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">minutes</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">seconds</span>
            </div>
        `;
        
        // Update the countdown display
        document.getElementById('countdown').innerHTML = countdownHTML;
    }
    
    // Update countdown immediately
    updateCountdown();
    
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    
    // Handle newsletter form submission with Formspree
    const emailForm = document.getElementById('email-form');
    const successMessage = document.getElementById('success-message');
    
    // We'll add a success message when the user is redirected back
    // Check if the URL has a "success" parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        successMessage.textContent = 'Thanks! We\'ll notify you when we launch.';
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.textContent = '';
            // Remove the query parameter without refreshing the page
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 5000);
    }
    
    // Add some animation to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});