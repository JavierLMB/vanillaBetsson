export function initializeCarousel() {
  const slide = $(".slider__slide");
  let currentIndex = 0;
  let startX, startY;

  slide.on("touchstart", function (e) {
    const touch = e.originalEvent.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  });

  slide.on("touchmove", function (e) {
    if (!startX || !startY) {
      return;
    }

    const touch = e.originalEvent.touches[0];
    const deltaX = startX - touch.clientX;
    const deltaY = startY - touch.clientY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe detected
      if (deltaX > 0) {
        // Swipe left, show next slide
        nextSlide();
      } else {
        // Swipe right, show previous slide
        prevSlide();
      }
    }

    // Reset start coordinates to detect next swipe
    startX = null;
    startY = null;
  });

  function nextSlide() {
    currentIndex = (currentIndex + slide.length) % slide.length;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlide();
  }

  function updateSlide() {
    slide.removeClass("slider__slide-active");
    slide.eq(currentIndex).addClass("slider__slide-active");
  }

  setInterval(nextSlide, 5000);
}

// export function initializeCarousel() {
//   const slide = $(".slider__slide");
//   let currentIndex = 0;

//   function showSlide(index) {
//     currentIndex = (index + slide.length) % slide.length;

//     slide.removeClass("slider__slide-active");
//     slide.eq(currentIndex).addClass("slider__slide-active");
//   }

//   function nextSlide() {
//     showSlide(currentIndex + 1);
//   }

//   function prevSlide() {
//     showSlide(currentIndex - 1);
//   }

//   $(".slider__prev").click(function () {
//     prevSlide();
//   });

//   $(".slider__next").click(function () {
//     nextSlide();
//   });

//   setInterval(nextSlide, 5000);
// }
