import { carousel } from "./components/sliders.js";
import { loginPopup } from "./components/loginPopup.js";
import { cookies } from "./components/cookies.js";

function initializePage() {
  carousel();
  loginPopup();
  cookies();
}

initializePage();
