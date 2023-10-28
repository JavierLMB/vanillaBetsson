export function initializeCarousel() {
  const slide = $(".slider__slide");
  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = (index + slide.length) % slide.length;

    slide.removeClass("slider__slide-active");
    slide.eq(currentIndex).addClass("slider__slide-active");
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  $(".slider__prev").click(function () {
    prevSlide();
  });

  $(".slider__next").click(function () {
    nextSlide();
  });

  setInterval(nextSlide, 5000);
}
