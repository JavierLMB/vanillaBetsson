export function carousel() {
  const slide = $(".slider__slide");
  const btnNext = $(".slider__next");
  const btnPrev = $(".slider__prev");
  let sectionIndex = 0;

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

  btnNext.click(nextSlide);
  btnPrev.click(previousSlide);

  setInterval(nextSlide, 5000);
}
