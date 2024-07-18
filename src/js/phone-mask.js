const phoneInputEl = document.querySelector('#phone');
console.log(phoneInputEl);

const mask = new IMask(phoneInputEl, {
  mask: '+{38}(000)000-00-00',
});
