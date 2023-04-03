import getElement from "../utils/get-element.js";
import showDisplay from "../utils/changing-displays.js";
import greetingDisplay from "./greeting.js";

const introDisplay = getElement(`
<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>
`);

document.querySelector(`.intro__asterisk`).addEventListener(`click`, function () {
  showDisplay(greetingDisplay);
});

export default introDisplay;
