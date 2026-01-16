document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const toggle = this.querySelector('.faq-toggle');
        
        content.classList.toggle('active');
        toggle.classList.toggle('active');
    });
});