
import introDisplay from '../displays/intro.js';

const appendDisplay = (display) => {
  const mainBlock = document.querySelector(`#main`);
  const backToMainButton = display.querySelector(`.back`);

  mainBlock.innerHTML = ``;
  mainBlock.appendChild(display);

  if (backToMainButton) {
    backToMainButton.addEventListener(`click`, () => {
      appendDisplay(introDisplay);
    });
  }
};

export default appendDisplay;

