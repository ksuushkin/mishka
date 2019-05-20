const orderButtonNode = document.querySelector('.weekly-good__btn');
const orderLinkNode = document.querySelector('.product__order-link');
const modalNode = document.querySelector('.modal');
const modalOverlayNode = document.querySelector('.modal-overlay');

orderButtonNode.addEventListener('click', function (e) {
  e.preventDefault();
  modalNode.classList.add('modal--opened');
  modalOverlayNode.classList.add('modal-overlay--opened');
});

// orderLinkNode.addEventListener('click', function (e) {
//   e.preventDefault();
//   modalNode.classList.add('modal--opened');
//   modalOverlayNode.classList.add('modal-overlay--opened');
// });

document.body.addEventListener('keyup', function (e) {
  var key = e.keyCode;
  if (key === 27) {
    document.querySelector('.modal.modal--opened').classList.remove('modal--opened');
    document.querySelector('.modal-overlay.modal-overlay--opened').classList.remove('modal-overlay--opened');
  }
});

modalOverlayNode.addEventListener('click', function () {
  modalNode.classList.remove('modal--opened');
  this.classList.remove('modal-overlay--opened');
});
