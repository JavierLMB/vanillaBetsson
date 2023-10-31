export function loginPopup() {
  const enter = $(".header__enter-btn");
  const closeButton = $(".login__close");
  const closeOverlay = $(".login__overlay");
  const loginContainer = $(".login__container");

  function closeModal() {
    closeOverlay.css({ opacity: 0 });
    loginContainer.css({ opacity: 0 });
    loginContainer.css({ transform: `translate(-50%, -200%)` });

    setTimeout(() => {
      closeOverlay.css({ display: "none" });
    }, 300);
  }

  function openModal() {
    closeOverlay.css({ display: "block" });
    setTimeout(() => {
      closeOverlay.css({ opacity: 1 });
      loginContainer.css({ opacity: 1 });
      loginContainer.css({ transform: `translate(-50%, -50%)` });
    }, 0);
  }

  enter.on("click", openModal);

  closeButton.on("click", closeModal);

  closeOverlay.on("click", closeModal);

  loginContainer.on("click", (e) => e.stopPropagation());
}
