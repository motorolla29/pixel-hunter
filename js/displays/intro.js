import createDisplay from '../utils/create-display.js';
import appendDisplay from '../utils/append-display.js';
import greetingNode from './greeting.js';

const introDisplayDescription = `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`;

const introTemplate = `
<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup>${introDisplayDescription}</p>
</section>
`;
const introNode = createDisplay(introTemplate);

introNode.querySelector(`.asterisk`).addEventListener(`click`, () => {
  appendDisplay(greetingNode);
});

export default introNode;
