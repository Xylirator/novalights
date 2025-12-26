document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple interaction for "Buy" buttons to show it's a demo
    const buyButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Check if it's the hero button or product button
            if(e.target.tagName === 'A') return; // Let links work naturally
            
            // alert('This is a demo site for Novalights rebrand.');
        });
    });
});
