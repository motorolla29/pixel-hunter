
import introDisplay from '../blocks/intro.js';

const showDisplay = function (display) {
  const mainBlock = document.querySelector(`#main`);
  const backToMainButton = display.querySelector(`.back`);

  mainBlock.innerHTML = ``;
  mainBlock.appendChild(display);

  if (backToMainButton) {
    backToMainButton.addEventListener(`click`, () => {
      showDisplay(introDisplay);
    });
  }
};

export default showDisplay;

