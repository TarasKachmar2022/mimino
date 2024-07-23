import dayjs from 'dayjs';

const firstDate = document.querySelector('.js-select#first-date');
const lastDate = document.querySelector('.js-select#last-date');

function bookingRoomRenderSelect() {
  let markup = [];
  let date = dayjs();

  for (let i = 0; i < 365; i++) {
    let formattedDate = date.format('DD.MM.YYYY');

    if (i === 0) {
      markup.push(
        `<option value="${formattedDate}" selected>Сьогодні</option>`
      );
    } else {
      markup.push(`<option value="${formattedDate}">${formattedDate}</option>`);
    }
    date = date.add(1, 'day');
  }
  firstDate.innerHTML = markup.join('');
  lastDate.innerHTML = markup.join('');
}

bookingRoomRenderSelect();
