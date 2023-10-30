export function carousel() {
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

  carousel.on("transitionend", function (e) {
    if (e.originalEvent.propertyName !== "transform") return;

    showSlide();
    carousel.css({ transition: "none" });

    carousel.css({ transform: "translate(0)" });
    setTimeout(() =>
      carousel.css({
        transition: "transform 0.7s cubic-bezier(0.1, 0.25, 0.1, 1)",
      })
    );
  });

  function nextSlide() {
    direction = "right";
    carousel.css({ transform: `translateX(${-slideWidth}px)` });
  }

  function prevSlide() {
    direction = "left";
    carousel.css({ transform: `translateX(${slideWidth}px)` });
  }

  $(".slider__next").click(function (e) {
    nextSlide();
  });

  $(".slider__prev").click(function (e) {
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
    } else if (dragOffset < 50 && dragOffset > -50) {
      carousel.css({ transform: "translateX(0)" });

      setTimeout(() => {
        carousel.css({
          transition: "transform 0.7s cubic-bezier(0.1, 0.25, 0.1, 1)",
        });
      });
    }

    if (dragOffset > 50 || dragOffset < -50 || dragOffset === 0)
      carousel.css({
        transition: "transform 0.7s cubic-bezier(0.1, 0.25, 0.1, 1)",
      });

    isDragging = false;

    intervalId = setInterval(nextSlide, 5000);
  });

  if (!isDragging) intervalId = setInterval(nextSlide, 5000);
}
