import data from '../data/data.json';

document.addEventListener('DOMContentLoaded', function () {
  const refs = {
    openModalBtnsEl: document.querySelectorAll('.js-open-modal'),
  };

  refs.openModalBtnsEl.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      let modalId = this.getAttribute('data-modal');

      data.forEach(function ({ roomtype, price, id }) {
        if (modalId === id) {
          return appendModalMarkup({ id, roomtype, price });
        }
      });
    });
  });
});

function modalMarkup({ roomtype }) {
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
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
            </select>
          </div>
          <label class="price-modal__label">Кількість ночей</label>
        </div>
        <div class="price-modal__wrapper">
        <div class="price-modal__box">
        <input
          class="price-modal__select price-modal__result"
          id="js-price-modal-result"
          readonly
        />
        <p class="price-modal__discount" id="js-price-modal-discount"></p>
        </div>
          <label class="price-modal__label">грн</label>
        </div>
      </div>
      </div>
  </div>
  `;
}

function appendModalMarkup({ id, roomtype, price }) {
  const priceModalEl = document.querySelector('.price-modal-markup');

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
  const discountEl = document.getElementById('js-price-modal-discount');

  resultEl.value = (selectEl.value * `${price}`).toLocaleString('uk-UA');

  selectEl.addEventListener('change', function () {
    const quantityDays = selectEl.value;
    const discountValue = discount(selectEl.value);

    resultEl.value = (
      (`${price}` - `${price}` * (`${discountValue}` / 100)) *
      `${quantityDays}`
    ).toLocaleString('uk-UA');

    if (discountValue === 0) {
      discountEl.style.display = 'none';
    } else {
      discountEl.style.display = 'block';
      discountEl.textContent = `-${discountValue}%`;
    }
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
