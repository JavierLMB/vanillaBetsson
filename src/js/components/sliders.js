export function carousel() {
  const slide = $(".slider__slide");
  const buttonNext = $(".slider__next");
  const buttonPrev = $(".slider__prev");
  let sectionIndex = 0;
  let intervalId;

  const reset = () => {
    slide.fadeTo(200, 0);
    slide.css({ "z-index": 0 });
  };

  const nextSlide = () => {
    reset();
    sectionIndex = (sectionIndex + 1) % slide.length;
    slide.eq(sectionIndex).fadeTo(0, 1).css({ "z-index": 1 });
  };

  const previousSlide = () => {
    reset();
    sectionIndex = (sectionIndex - 1 + slide.length) % slide.length;
    slide.eq(sectionIndex).fadeTo(0, 1).css({ "z-index": 1 });
  };

  const startCarousel = () => {
    intervalId = setInterval(nextSlide, 5000);
  };

  const stopCarousel = () => {
    clearInterval(intervalId);
  };

  buttonNext.on("click", nextSlide);
  buttonPrev.on("click", previousSlide);

  startCarousel();

  slide.mouseenter(stopCarousel).mouseleave(startCarousel);
}
