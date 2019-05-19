const menuNode = document.querySelector('.main-nav');
const buttonNode = document.querySelector('.main-nav__toggler');

menuNode.classList.remove('main-nav--nojs');

buttonNode.addEventListener('click', function () {
        buttonNode.classList.toggle('main-nav__toggler--opened');
        menuNode.classList.toggle('main-nav--opened')
    });
