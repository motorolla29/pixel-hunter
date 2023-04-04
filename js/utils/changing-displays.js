
import introDisplay from '../displays/intro.js';

const showDisplay = (display) => {
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

