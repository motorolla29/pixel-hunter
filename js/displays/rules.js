import createDisplay from '../utils/createDisplay.js';
import appendDisplay from '../utils/appendDisplay.js';
import GAME_DATA from '../data/game-data.js';
import renderGameDisplay from '../utils/renderGameDisplay.js';

const rulesIcons = {
  paint: `<img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></img>`,
  photo: `<img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото">`
};

const rulesDescriptions = [
  `Угадай 10 раз для каждого изображения фото ${rulesIcons
    .photo} или рисунок ${rulesIcons
    .paint}`,
  `Фотографиями или рисунками могут быть оба изображения.`,
  `На каждую попытку отводится 30 секунд.`,
  `Ошибиться можно не более 3 раз.`
];


const rulesTemplate = `
<section class="rules">
  <h2 class="rules__title">Правила</h2>
  <ul class="rules__description">
  ${rulesDescriptions.map((it) => `<li>${it}</li>`).join(``)}
  </ul>
  <p class="rules__ready">Готовы?</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</section>
`;

const rulesNode = createDisplay(rulesTemplate);

const form = rulesNode.querySelector(`.rules__form`);
const nameField = rulesNode.querySelector(`.rules__input`);
const submitButton = rulesNode.querySelector(`.rules__button`);

nameField.addEventListener(`input`, () => {
  if (nameField.value !== ``) {
    submitButton.removeAttribute(`disabled`);
  } else {
    submitButton.setAttribute(`disabled`, `disabled`);
  }
});

form.addEventListener(`submit`, function (evt) {
  evt.preventDefault();
  form.reset();
  appendDisplay(renderGameDisplay(GAME_DATA[0]));
});

export default rulesNode;
