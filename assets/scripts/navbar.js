const navbarToggler = document.getElementById('navbar-toggler');
const navbarNav = document.getElementById('navbar-nav');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementsByClassName('navbar__link');

function toggleHandler(){
    const TOGGLE_OPEN_CLASS = 'navbar__toggler--open';
    const NAV_OPEN_CLASS = 'navbar__nav--open';
    const NAVBAR_OPEN_CLASS = 'navbar--open';

    navbarToggler.classList.toggle(TOGGLE_OPEN_CLASS);
    navbarNav.classList.toggle(NAV_OPEN_CLASS)
    navbar.classList.toggle(NAVBAR_OPEN_CLASS)
}

navbarToggler.addEventListener('click', toggleHandler)
Array(...navLinks).forEach((navLink) => navLink.addEventListener('click', toggleHandler))