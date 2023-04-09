import createDisplay from '../utils/createDisplay.js';
import appendDisplay from '../utils/appendDisplay.js';
import gameDisplay1 from './game-1.js';

const rulesDisplayIcons = {
  paint: `<img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></img>`,
  photo: `<img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото">`
};

const rulesDisplayDescriptions = [
  `Угадай 10 раз для каждого изображения фото ${rulesDisplayIcons
    .photo} или рисунок ${rulesDisplayIcons
    .paint}`,
  `Фотографиями или рисунками могут быть оба изображения.`,
  `На каждую попытку отводится 30 секунд.`,
  `Ошибиться можно не более 3 раз.`
];


const rulesDisplay = createDisplay(`
<section class="rules">
  <h2 class="rules__title">Правила</h2>
  <ul class="rules__description">
  ${rulesDisplayDescriptions.map((it) => `<li>${it}</li>`).join(``)}
  </ul>
  <p class="rules__ready">Готовы?</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</section>
`);

const form = rulesDisplay.querySelector(`.rules__form`);
const nameField = rulesDisplay.querySelector(`.rules__input`);
const submitButton = rulesDisplay.querySelector(`.rules__button`);

nameField.addEventListener(`input`, () => {
  if (nameField.value !== ``) {
    submitButton.removeAttribute(`disabled`);
  } else {
    submitButton.setAttribute(`disabled`, `disabled`);
  }
});

form.addEventListener(`submit`, function () {
  appendDisplay(gameDisplay1);
});

export default rulesDisplay;
