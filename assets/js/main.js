// BibTeX toggle functionality
function showBibtex(paperId) {
    const bibtexDiv = document.getElementById(paperId + '-bibtex');
    if (bibtexDiv) {
        if (bibtexDiv.style.display === 'none' || bibtexDiv.style.display === '') {
            bibtexDiv.style.display = 'block';
        } else {
            bibtexDiv.style.display = 'none';
        }
    }
    return false; // Prevent default link behavior
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only prevent default for actual anchor links, not for onclick handlers
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    function highlightNavigation() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Call once on load
});

// Optional: Add copy to clipboard for email
document.addEventListener('DOMContentLoaded', function() {
    const emailElement = document.querySelector('#contact p strong');
    if (emailElement && emailElement.textContent.includes('Email:')) {
        const emailText = emailElement.nextSibling;
        if (emailText) {
            // You can add click-to-copy functionality here if desired
        }
    }
});