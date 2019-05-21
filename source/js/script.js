const cartBtns = document.querySelectorAll('.to-cart');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal-overlay');


for (var i = 0; i < cartBtns.length; i++) {
  cartBtns[i].addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('modal--opened');
    modalOverlay.classList.add('modal-overlay--opened');
  });
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    if (modal.classList.contains('modal--opened')) {
      modal.classList.remove('modal--opened');
      modalOverlay.classList.remove('modal-overlay--opened');
    }
  }
});

modalOverlay.addEventListener('click', function () {
  modal.classList.remove('modal--opened');
  this.classList.remove('modal-overlay--opened');
});
