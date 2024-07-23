document.addEventListener('DOMContentLoaded', function () {
  const refs = {
    openModalBtns: document.querySelectorAll('.js-open-modal'),
    closeModalBtns: document.querySelectorAll('.js-modal-close'),
    backdrop: document.querySelectorAll('.js-backdrop'),
    modals: document.querySelectorAll('.js-modal'),
    body: document.querySelector('.js-page'),
  };

  refs.openModalBtns.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      let modalElem = '';

      let modalId = this.getAttribute('data-modal');
      modalElem = document.querySelector(
        '.backdrop[data-modal="' + modalId + '"]'
      );

      if (!modalElem) {
        modalElem = document.querySelector(
          '.backdrop[data-modal="price-modal"]'
        );
      }

      modalElem.classList.remove('is-hidden');
      refs.body.classList.add('no-scroll');

      let parentModal = this.closest('.backdrop');

      if (parentModal) {
        parentModal.classList.add('is-hidden');
        parentModal.classList.remove('no-scroll');
      }
    });
  });

  refs.closeModalBtns.forEach(function (item) {
    item.addEventListener('click', function (e) {
      let parentModal = this.closest('.backdrop');

      parentModal.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
    });
  });

  window.addEventListener('keydown', function (e) {
    if (e.code !== 'Escape') {
      return;
    }

    refs.backdrop.forEach(function (item) {
      if (item.classList.contains('is-hidden')) {
        return;
      }
      item.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
    });
  });

  refs.backdrop.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.currentTarget !== e.target) {
        return;
      }

      let parentModal = this.closest('.backdrop');

      parentModal.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
    });
  });
});
