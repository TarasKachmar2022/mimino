const refs = {
  formEl: document.querySelectorAll('.form'),
};
console.log(refs.formEl);

refs.formEl.forEach(function (item) {
  item.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('Форма відправлена, але не на сервер');
    new FormData(event.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );
  });
});
