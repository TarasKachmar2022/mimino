import data from '../data/data.json';

document.addEventListener('DOMContentLoaded', function () {
  const refs = {
    openModalBtnsEl: document.querySelectorAll('.js-open-modal'),
  };

  refs.openModalBtnsEl.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      let modalId = this.getAttribute('data-modal');
      // modalElem = document.querySelector(
      //   '.backdrop[data-modal="' + modalId + '"]'
      // );
      console.log(item);
      console.log(refs.openModalBtnsEl);
      console.log(modalId);
      // console.log(priceModalEl);

      // console.log(modalElem.querySelector('.price-modal__title'));
      // console.log(modalElem);

      data.forEach(function ({ roomtype, price, id }) {
        if (modalId === id) {
          console.log(roomtype);
          console.log(price);
          console.log(id);

          return appendModalMarkup({ id, roomtype, price });
          // modalMarkup({
          //   id,
          //   roomtype,
          //   price,
          // });
          // const priceModalTitleEl = modalElem.querySelector(
          //   '.price-modal__title'
          // );

          // priceModalTitleEl.textContent = `${roomtype}`;
          // console.log(priceModalTitleEl);
        }
      });
    });
  });
});

function modalMarkup({ id, roomtype, price }) {
  return `
      <strong class="modal__title">ЦІНИ НА НОМЕР</strong>
   
    <p class="price-modal__title">${roomtype}</p>
    <p class="price-modal__title-label">Категорія номеру</p>
      <div class="price-modal__list">
        <div class="price-modal__wrapper">
          <div class="price-modal__thumb">
            <select class="price-modal__select " id="js-price-modal-select" name="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
            </select>
          </div>
          <label class="price-modal__label">Кількість ночей</label>
        </div>
        <div class="price-modal__wrapper">
        <input
          class="price-modal__select"
          id="js-price-modal-result"
          readonly
        />
          
          <label class="price-modal__label">грн</label>
        </div>
      </div>
      <button class="form-btn" type="button">
        ЗАБРОНЮВАТИ НОМЕР
      </button>
      </div>
  </div>
      
      
  `;
}

function appendModalMarkup({ id, roomtype, price }) {
  const priceModalEl = document.querySelector('.price-modal');
  console.log(priceModalEl);
  priceModalEl.innerHTML = '';
  priceModalEl.insertAdjacentHTML(
    'beforeend',
    modalMarkup({
      id,
      roomtype,
      price,
    })
  );
  totalPrice(price);
}

function totalPrice(price) {
  const selectEl = document.getElementById('js-price-modal-select');
  const resultEl = document.getElementById('js-price-modal-result');

  resultEl.value = (selectEl.value * `${price}`).toLocaleString('uk-UA');

  selectEl.addEventListener('change', function () {
    console.log(resultEl.value);
    const quantityDays = selectEl.value;
    console.log(quantityDays);
    const discountValue = discount(selectEl.value);
    console.log(discountValue);
    resultEl.value = (
      (`${price}` - `${price}` * (`${discountValue}` / 100)) *
      `${quantityDays}`
    ).toLocaleString('uk-UA');
  });
}

function discount(days) {
  if (days < 7) {
    return 0;
  } else if (days >= 30) {
    return 20;
  } else if (days >= 21) {
    return 15;
  } else if (days >= 14) {
    return 10;
  } else if (days >= 7) {
    return 5;
  }
}
