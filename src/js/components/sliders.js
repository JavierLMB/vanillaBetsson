export function carousel() {
  const slide = $(".slider__slide");
  const buttonNext = $(".slider__next");
  const buttonPrev = $(".slider__prev");
  let sectionIndex = 0;
  let intervalId;

  function reset() {
    slide.fadeTo(200, 0);
    slide.css({ "z-index": 0 });
  }

  function nextSlide() {
    reset();
    sectionIndex = (sectionIndex + 1) % slide.length;
    slide.eq(sectionIndex).fadeTo(0, 1).css({ "z-index": 1 });
  }

  function previousSlide() {
    reset();
    sectionIndex = (sectionIndex - 1 + slide.length) % slide.length;
    slide.eq(sectionIndex).fadeTo(0, 1).css({ "z-index": 1 });
  }

  function startCarousel() {
    intervalId = setInterval(nextSlide, 5000);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  buttonNext.on("click", nextSlide);
  buttonPrev.on("click", previousSlide);

  startCarousel();

  slide.mouseenter(stopCarousel).mouseleave(startCarousel);
}
