import createDisplay from '../utils/createDisplay.js';
import appendDisplay from '../utils/appendDisplay.js';
import greetingDisplay from './greeting.js';

const introDisplay = createDisplay(`
<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>
`);

introDisplay.querySelector(`.asterisk`).addEventListener(`click`, () => {
  appendDisplay(greetingDisplay);
});

export default introDisplay;