import getHeader from '../utils/get-header.js';
import {currentGame} from '../utils/change-level.js';
import {getStatsIcons} from '../utils/get-stats-icons.js';

const firstGameTemplate = (data) => `
${getHeader(currentGame)}
<section class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    <div class="game__option">
      <img src=${data.options[0].src} alt=${data.options[0].alt} width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name=${data.options[0].inputName} type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name=${data.options[0].inputName} type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src=${data.options[1].src} alt=${data.options[1].alt} width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name=${data.options[1].inputName} type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name=${data.options[1].inputName} type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  <ul class="stats">
    ${getStatsIcons(currentGame.statistics).join(``)}
  </ul>
</section>
`;

const secondGameTemplate = (data) => `
${getHeader(currentGame)}
<section class="game">
  <p class="game__task">${data.task}</p>
  <form class="game__content  game__content--wide">
  <div class="game__option">
    <img src=${data.options[0].src} alt=${data.options[0].alt} width="468" height="458">
    <label class="game__answer game__answer--photo">
      <input class="visually-hidden" name=${data.options[0].inputName} type="radio" value="photo">
      <span>Фото</span>
    </label>
    <label class="game__answer game__answer--paint">
      <input class="visually-hidden" name=${data.options[0].inputName} type="radio" value="paint">
      <span>Рисунок</span>
    </label>
  </div>
  </form>
  <ul class="stats">
    ${getStatsIcons(currentGame.statistics).join(``)}
  </ul>
</section>
`;

const thirdGameTemplate = (data) => `
${getHeader(currentGame)}
<section class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src=${data.options[0].src} alt=${data.options[0].alt} width="304" height="455">
    </div>
    <div class="game__option">
      <img src=${data.options[1].src} alt=${data.options[1].alt} width="304" height="455">
    </div>
    <div class="game__option">
      <img src=${data.options[2].src} alt=${data.options[2].alt} width="304" height="455">
    </div>
  </form>
  <ul class="stats">
    ${getStatsIcons(currentGame.statistics).join(``)}
  </ul>
</section>
`;


export {firstGameTemplate, secondGameTemplate, thirdGameTemplate};
