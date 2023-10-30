export function loginPopup() {
  const Enter = $(".header__enter-btn");
  const CloseBtn = $(".login__close");
  const CloseOverlay = $(".login__overlay");
  const LoginContainer = $(".login__container");

  function closeModal() {
    CloseOverlay.css({ opacity: 0 });
    LoginContainer.css({ opacity: 0 });
    LoginContainer.css({ transform: `translate(-50%, -200%)` });

    setTimeout(() => {
      CloseOverlay.css({ display: "none" });
    }, 300);
  }

  function openModal() {
    CloseOverlay.css({ display: "block" });
    setTimeout(() => {
      CloseOverlay.css({ opacity: 1 });
      LoginContainer.css({ opacity: 1 });
      LoginContainer.css({ transform: `translate(-50%, -50%)` });
    }, 0);
  }

  Enter.click(function () {
    openModal();
  });

  CloseBtn.click(function () {
    closeModal();
  });

  CloseOverlay.click(function () {
    closeModal();
  });

  LoginContainer.click(function (e) {
    e.stopPropagation();
  });
}
