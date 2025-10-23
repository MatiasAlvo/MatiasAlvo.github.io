function showBibtex(paperId) {
    const bibtexDiv = document.getElementById(paperId + '-bibtex');
    if (bibtexDiv.style.display === 'none') {
        bibtexDiv.style.display = 'block';
    } else {
        bibtexDiv.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
