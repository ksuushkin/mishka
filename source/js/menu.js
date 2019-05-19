const menuNode = document.querySelector('.main-nav');
const burgerNode = document.querySelector('.main-nav__toggler');

menuNode.classList.remove('main-nav--nojs');

burgerNode.addEventListener('click', function () {
  burgerNode.classList.toggle('main-nav__toggler--opened');
  menuNode.classList.toggle('main-nav--opened')
});
