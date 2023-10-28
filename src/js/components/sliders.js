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

// export function initializeCarousel() {
//   const carousel = $(".slider__carousel");
//   const slide = $(".slider__slide");
//   const slideWidth = slide.width();
//   let currentIndex = 0;

//   function showSlide(index) {
//     currentIndex = (index + slide.length) % slide.length;
//     const translateValue = -slideWidth * currentIndex + "px";
//     carousel.css({ transform: `translateX(${translateValue})` });
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

export function initializeCarousel() {
  const carousel = $(".slider__carousel");
  const slide = $(".slider__slide");
  const slideWidth = slide.width();
  let currentIndex = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragOffset = 0;
  let intervalId;

  function showSlide(index) {
    currentIndex = (index + slide.length) % slide.length;
    const translateValue = -slideWidth * currentIndex + "px";
    carousel.css({ transform: `translateX(${translateValue})` });
  }

  function nextSlide() {
    if (!isDragging) {
      showSlide(currentIndex + 1);
    }
  }

  function prevSlide() {
    if (!isDragging) {
      showSlide(currentIndex - 1);
    }
  }

  $(".slider__prev").click(function () {
    prevSlide();
  });

  $(".slider__next").click(function () {
    nextSlide();
  });

  carousel.on("mousedown touchstart", function (event) {
    isDragging = true;
    dragStartX = event.pageX || event.originalEvent.touches[0].pageX;
    dragOffset = 0;

    clearInterval(intervalId);
  });

  carousel.on("mousemove touchmove", function (event) {
    if (isDragging) {
      const dragX = event.pageX || event.originalEvent.touches[0].pageX;
      dragOffset = dragX - dragStartX;
      const translateValue = -slideWidth * currentIndex + dragOffset + "px";
      carousel.css({ transform: `translateX(${translateValue})` });
    }
  });

  carousel.on("mouseup touchend", function () {
    isDragging = false;

    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    } else {
      showSlide(currentIndex);
    }

    intervalId = setInterval(nextSlide, 5000);
  });

  intervalId = setInterval(nextSlide, 5000);
}
