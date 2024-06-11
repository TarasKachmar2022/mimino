import $ from 'jquery';
import 'slick-carousel';

$('.slider-right').slick({
  dots: false, // Пагінація
  // adaptiveHeight: true, // Адаптація слайдера по висоті зображення
  slidesToShow: 2, // Скільки слайдів відображається
  // slidesToScroll: 1,   // Скільки слайдів змінюється за раз
  // speed: 100,          // Швидкість зміни слайда
  // easing: 'ease',      // Кубік бізіер зміни слайда
  // infinite: true,      // Безкінечна прокрутка
  initialSlide: 0, // Початковий слайд
  autoplay: true, // Автоперегортання
  autoplaySpeed: 7000, // Затримка між перегортанням
  pauseOnFocus: true,
  pauseOnHover: true,
  // pauseOnDotsHover: true,
  draggable: true, // Зміна слайдів за допомогою миші по картинках (свайпи)
  swipe: true, // Свайпи за допомогою touchscreen
  touchThreshold: 10, // Відстань щоб спрацював свайп
  touchMove: true, // Включеє можливасті touchScreen
  waitForAnimate: true, // Обмеження швидкості переключання слайдів
  // centerMode: true, // Активний слайд по центру
  variableWidth: true, // Ширина по контенту
  // rows: 1, // Ряди
  // slidesPerRow: 1, // Слайди в ряді
  // vertical: true, // Вертикальний слайдер
  // verticalSwiping: true, // Пертикальне свайпання
  // fade: true, // Слайди заміняються
  // asNavFor: ".імя" // Звязування двох слайдерів (в кожномі слайдері вказується клас слайдера з яким звязується) Має бути одинакова кількість слайдів
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false, // Стрілки
  //       dots: false, // Пагінація
  //     },
  //   },
  // ],
  // mobileFirst: true, // Міняє з max-width на min-width
});

$('.slider-left').slick({
  dots: false, // Пагінація
  // adaptiveHeight: true, // Адаптація слайдера по висоті зображення
  slidesToShow: 2, // Скільки слайдів відображається
  // slidesToScroll: 1,   // Скільки слайдів змінюється за раз
  // speed: 100,          // Швидкість зміни слайда
  // easing: 'ease',      // Кубік бізіер зміни слайда
  // infinite: true,      // Безкінечна прокрутка
  initialSlide: 0, // Початковий слайд
  autoplay: true, // Автоперегортання
  autoplaySpeed: 7000, // Затримка між перегортанням
  pauseOnFocus: true,
  pauseOnHover: true,
  // pauseOnDotsHover: true,
  draggable: true, // Зміна слайдів за допомогою миші по картинках (свайпи)
  swipe: true, // Свайпи за допомогою touchscreen
  touchThreshold: 10, // Відстань щоб спрацював свайп
  touchMove: true, // Включеє можливасті touchScreen
  waitForAnimate: true, // Обмеження швидкості переключання слайдів
  // centerMode: true, // Активний слайд по центру
  variableWidth: true, // Ширина по контенту
  // rows: 1, // Ряди
  // slidesPerRow: 1, // Слайди в ряді
  // vertical: true, // Вертикальний слайдер
  // verticalSwiping: true, // Пертикальне свайпання
  // fade: true, // Слайди заміняються
  // asNavFor: ".імя" // Звязування двох слайдерів (в кожномі слайдері вказується клас слайдера з яким звязується) Має бути одинакова кількість слайдів
  // responsive: [
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       arrows: false, // Стрілки
  //       dots: false, // Пагінація
  //     },
  //   },
  // ],
  // mobileFirst: true, // Міняє з max-width на min-width
});
