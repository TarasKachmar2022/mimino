window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  // const mobileHeader = document.querySelector('[data-mobile-header]');
  // const logo = document.querySelector('[data-header-logo]');
  const headerOffsetTrigger = header.offsetHeight;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    // mobileHeader.classList.add('header-mobile--no-transparency');
    header.classList.add('header--no-transparency');
    // logo.classList.add('logo--white');
  } else {
    // mobileHeader.classList.remove('header-mobile--no-transparency');
    header.classList.remove('header--no-transparency');
    // logo.classList.remove('logo--white');
  }
}
