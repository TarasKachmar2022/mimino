// import Swiper JS
import Swiper, { Navigation, Autoplay } from 'swiper';
// import Swiper styles
import 'swiper/swiper.scss';

// const swiper = new Swiper('.swiper-ltr', {
//   // modules: [Navigation, Autoplay],
//   speed: 3500,
//   slidesPerView: 2,
//   spaceBetween: 20,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     reverseDirection: true,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // breakpoints: {
//   //   1024: {
//   //     spaceBetween: 40,
//   //   },
//   // },
// });

const rtl = new Swiper('.swiper-rtl', {
  modules: [Navigation, Autoplay],
  speed: 2000,
  slidesPerView: 1.3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

const ltr = new Swiper('.swiper-ltr', {
  modules: [Navigation, Autoplay],
  speed: 2000,
  slidesPerView: 2,
  initialSlide: 3,
  spaceBetween: 25,
  loop: true,
  autoplay: {
    delay: 2000,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

const dr = new Swiper('.details-restaurant__swiper', {
  modules: [Navigation, Autoplay],
  speed: 4000,
  slidesPerView: 1.3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

const dh = new Swiper('.details-hotel__swiper', {
  modules: [Navigation, Autoplay],
  speed: 4000,
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button__next',
    prevEl: '.swiper-button__prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});
