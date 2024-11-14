  // Wait for the DOM content to load
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(.intro)'); // Exclude the .intro section

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Adjust as needed to control when the animation triggers
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});