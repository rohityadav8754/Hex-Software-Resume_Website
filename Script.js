// Smooth scroll for navigation links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Donate button action
document.getElementById('donateBtn').addEventListener('click', function() {
    alert("Thank you for your interest in donating! Please visit our donation page for more information.");
});
