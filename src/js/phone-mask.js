import IMask from 'imask';

const btPhoneEl = document.querySelector('#btphone');
const brPhoneEl = document.querySelector('#brphone');

const btMask = new IMask(btPhoneEl, {
  mask: '+{38}(000)000-00-00',
});

const brMask = new IMask(brPhoneEl, {
  mask: '+{38}(000)000-00-00',
});
