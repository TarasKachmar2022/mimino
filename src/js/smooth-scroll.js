window.addEventListener('load', function () {
  console.log(window.location.hash.substring(1));
  if (window.location.hash) {
    setTimeout(function () {
      const targetElement = document.getElementById(
        window.location.hash.substring(1)
      );
      console.log(targetElement);
      if (targetElement) {
        let topOffset = 0;
        topOffset = topOffsetSelector();

        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
        console.log(offsetPosition);
      }
    }, 100);
  }
});

document.querySelectorAll('a.hero__btn').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    console.log(href);

    let topOffset = 0;
    topOffset = topOffsetSelector();

    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
  });
});

function topOffsetSelector() {
  const viewportWidth = window.innerWidth;

  let headerTopOffset;

  if (viewportWidth >= 1024) {
    headerTopOffset = 70;
    return headerTopOffset;
  } else {
    headerTopOffset = 90;
    return headerTopOffset;
  }
}
