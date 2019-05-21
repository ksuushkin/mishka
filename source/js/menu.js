const menuElement = document.querySelector('.main-nav');
const burgerElement = menuElement.querySelector('.main-nav__toggler');

menuElement.classList.remove('main-nav--nojs');

burgerElement.addEventListener('click', function () {
  burgerElement.classList.toggle('main-nav__toggler--opened');
  menuElement.classList.toggle('main-nav--opened')
});
