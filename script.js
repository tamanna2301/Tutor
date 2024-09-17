
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav-flex .icon-bar');
    const mobileMenu = document.querySelector('.nav-flex .mobile-menu-items');
    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    })
})


window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-flex');

    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});
