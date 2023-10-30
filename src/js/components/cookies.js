export function cookies() {
  const cookieContainer = $(".cookie__container");
  const cookieButton = $(".cookie__button");

  $(document).ready(function () {
    if (!getCookie("acceptedCookies"))
      cookieContainer.css({ display: "block" });
  });

  cookieButton.click(function () {
    if (!getCookie("acceptedCookies"))
      setCookie("acceptedCookies", "true", 365);

    cookieContainer.css({ display: "none" });
  });

  const setCookie = (cookieName, cookieValue, expirationDays) => {
    const date = new Date();
    date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=${cookieValue};expires=${date.toUTCString()};path=/`;
  };

  const getCookie = (cookieName) => {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieValue = decodedCookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(name));
    return cookieValue ? cookieValue.substring(name.length) : null;
  };
}
