/* script.js */

document.addEventListener('DOMContentLoaded', () => {
    // A more complex portfolio would include a button for a mobile menu.
    // Assuming a menu button with class 'menu-toggle' and the nav with ID 'main-nav'
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('#main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

    // You could also add a subtle scroll-reveal effect for the project cards here
    // using the Intersection Observer API.
    // Example:
    // const projectCards = document.querySelectorAll('.project-card');
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('visible');
    //         }
    //     });
    // }, { threshold: 0.1 });
    //
    // projectCards.forEach(card => {
    //     observer.observe(card);
    // });
});