document.querySelector('.next-button').addEventListener('click', function() {
    document.querySelector('.projects-grid').scrollBy({
        left: 320, /* Adjust scroll amount as needed */
        behavior: 'smooth'
    });
});

document.querySelector('.prev-button').addEventListener('click', function() {
    document.querySelector('.projects-grid').scrollBy({
        left: -320, /* Adjust scroll amount as needed */
        behavior: 'smooth'
    });
});