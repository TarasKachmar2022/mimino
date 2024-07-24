import dayjs from 'dayjs';

function bookingRoomRenderSelect() {
  const arrivalDate = document.querySelector('.js-select#arrival-date');
  const departureDate = document.querySelector('.js-select#departure-date');

  let markup = [];
  let date = dayjs();

  for (let i = 0; i < 365; i += 1) {
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
  arrivalDate.innerHTML = markup.join('');
  departureDate.innerHTML = markup.join('');
}

bookingRoomRenderSelect();

function bookingTableRenderSelect() {
  const reserveTableDatetime = document.querySelector(
    '.js-select#reserve-table-datetime'
  );

  console.log(reserveTableDatetime);
  console.log(dayjs().format('DD.MM.YYYY HH:mm'));

  let datetimeMarkup = [];
  let date = dayjs();

  for (let i = 0; i < 365; i += 1) {
    for (let hour = 0; hour < 24; hour += 1) {
      let formattedDatetime = date
        .hour(hour)
        .minute(0)
        .format('DD.MM.YYYY HH:mm');
      if (i === 0 && hour === 0) {
        datetimeMarkup.push(
          `<option value="${formattedDatetime}" selected>Сьогодні</option>`
        );
      } else {
        datetimeMarkup.push(
          `<option value="${formattedDatetime}">${formattedDatetime}</option>`
        );
      }
    }
    date = date.add(1, 'day');
  }

  reserveTableDatetime.innerHTML = datetimeMarkup.join('');
}

bookingTableRenderSelect();
