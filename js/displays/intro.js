import getElement from '../utils/get-element.js';
import showDisplay from '../utils/changing-displays.js';
import greetingDisplay from './greeting.js';

const introDisplay = getElement(`
<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>
`);

introDisplay.querySelector(`.asterisk`).addEventListener(`click`, () => {
  showDisplay(greetingDisplay);
});

export default introDisplay;
