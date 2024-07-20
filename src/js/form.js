const refs = {
  formEl: document.querySelectorAll('.form'),
  body: document.querySelector('.js-page'),
};

refs.formEl.forEach(function (item) {
  item.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('Форма відправлена, але не на сервер');
    new FormData(event.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    let parentModal = this.closest('.backdrop');

    parentModal.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  });
});
