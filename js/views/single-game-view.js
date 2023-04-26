import AbstractView from './abstract-view.js';
import Utils from '../utils/utils.js';

export default class SingleGameView extends AbstractView {
  constructor(data, statsIcons) {
    super();
    this.data = data;
    this.statsIcons = statsIcons;
  }

  resizeImages() {
    const images = this.element.querySelectorAll(`.game__option img`);
    [...images].forEach((img) => {
      img.addEventListener(`load`, () => {
        const newSize = Utils.resizePhoto(
            {width: img.width, height: img.height},
            {width: img.naturalWidth, height: img.naturalHeight});
        img.width = newSize.width;
        img.height = newSize.height;
      });
    });
  }

  get template() {
    return `

    <section class="game">
      <p class="game__task">${this.data.task}</p>
      <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${this.data.options[0].src} alt=${this.data.options[0].alt} width="705" height="455">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name=${this.data.options[0].inputName} type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name=${this.data.options[0].inputName} type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      </form>
      <ul class="stats">
        ${this.statsIcons}
      </ul>
    </section>`;
  }

  onAnswer() {

  }

  bind() {
    const answers = this.element.querySelectorAll(`input`);
    answers.forEach((el) => {
      el.addEventListener(`click`, (evt) => {
        this.onAnswer(evt);
      });
    });
  }
}
