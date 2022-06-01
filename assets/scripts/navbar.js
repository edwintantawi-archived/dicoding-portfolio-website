const navbarToggler = document.getElementById('navbar-toggler');
const navbarNav = document.getElementById('navbar-nav');

navbarToggler.addEventListener('click', toggleHandler)

function toggleHandler(){
    const TOGGLE_OPEN_CLASS = 'navbar__toggler--open';
    const NAV_OPEN_CLASS = 'navbar__nav--open';


    navbarToggler.classList.toggle(TOGGLE_OPEN_CLASS);
    navbarNav.classList.toggle(NAV_OPEN_CLASS)
}