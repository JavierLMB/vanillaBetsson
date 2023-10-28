export function initializeCarousel() {
  const carousel = $(".slider__carousel");
  const slide = $(".slider__slide");
  const slideWidth = slide.width();
  let isDragging = false;
  let dragStartX = 0;
  let dragOffset = 0;
  let intervalId;
  let direction = "left";

  function showSlide() {
    if (direction === "right") {
      const updatedFirstSlide = carousel.find(".slider__slide").first();
      carousel.append(updatedFirstSlide);
    }

    if (direction === "left") {
      const updatedLastSlide = carousel.find(".slider__slide").last();
      carousel.prepend(updatedLastSlide);
    }
  }

  carousel.on("transitionend", function () {
    showSlide();
    carousel.css({ transition: "none" });
    carousel.css({ transform: "translate(0)" });
    setTimeout(() => carousel.css({ transition: "all 0.2s ease-in" }));
  });

  function nextSlide() {
    direction = "right";
    carousel.css({ transform: `translateX(${-slideWidth}px)` });
  }

  function prevSlide() {
    direction = "left";
    carousel.css({ transform: `translateX(${slideWidth}px)` });
  }

  $(".slider__next").click(function () {
    nextSlide();
  });

  $(".slider__prev").click(function () {
    prevSlide();
  });

  carousel.on("mousedown touchstart", function (event) {
    event.preventDefault();
    isDragging = true;
    dragStartX = event.pageX || event.originalEvent.touches[0].pageX;
    dragOffset = 0;
    clearInterval(intervalId);
    carousel.css({ transition: "none" });
  });

  carousel.on("mousemove touchmove", function (event) {
    if (isDragging) {
      const dragX = event.pageX || event.originalEvent.touches[0].pageX;
      console.log(dragX);
      dragOffset = dragX - dragStartX;
      const translateValue = dragOffset + "px";
      carousel.css({ transform: `translateX(${translateValue})` });
    }
  });

  carousel.on("mouseup touchend", function () {
    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    } else {
      carousel.css({ transform: "translate(0)" }); //fix it
    }

    isDragging = false;

    carousel.css({ transition: "all 0.2s ease-in" });
    intervalId = setInterval(nextSlide, 5000);
  });

  if (!isDragging) intervalId = setInterval(nextSlide, 5000);
}
