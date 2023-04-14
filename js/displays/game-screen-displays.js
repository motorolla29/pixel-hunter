import AbstractView from './abstract-view.js';

export default class GameDisplay extends AbstractView {
  constructor(data, headerTemplate, statsIcons) {
    super();
    this.data = data;
    this.headerTemplate = headerTemplate;
    this.statsIcons = statsIcons;
    this.GameTypes = {
      SINGLE: `singleQuestion`,
      DOUBLE: `doubleQuestion`,
      TRIPLE: `tripleQuestion`
    };
  }

  get template() {
    let currentGameTemplate;
    switch (this.data.type) {
      case this.GameTypes.SINGLE:
        currentGameTemplate = `
        ${this.headerTemplate}
        <section class="game">
          <p class="game__task">${this.data.task}</p>
          <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src=${this.data.options[0].src} alt=${this.data.options[0].alt} width="468" height="458">
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
        break;

      case this.GameTypes.DOUBLE:
        currentGameTemplate = `
        ${this.headerTemplate}
        <section class="game">
          <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
          <form class="game__content">
            <div class="game__option">
              <img src=${this.data.options[0].src} alt=${this.data.options[0].alt} width="468" height="458">
              <label class="game__answer game__answer--photo">
                <input class="visually-hidden" name=${this.data.options[0].inputName} type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input class="visually-hidden" name=${this.data.options[0].inputName} type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
            <div class="game__option">
              <img src=${this.data.options[1].src} alt=${this.data.options[1].alt} width="468" height="458">
              <label class="game__answer game__answer--photo">
                <input class="visually-hidden" name=${this.data.options[1].inputName} type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input class="visually-hidden" name=${this.data.options[1].inputName} type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>
          <ul class="stats">
            ${this.statsIcons}
          </ul>
        </section>`;
        break;

      case this.GameTypes.TRIPLE:
        currentGameTemplate = `
        ${this.headerTemplate}
        <section class="game">
          <p class="game__task">Найдите рисунок среди изображений</p>
          <form class="game__content  game__content--triple">
            <div class="game__option">
              <img src=${this.data.options[0].src} alt=${this.data.options[0].alt} width="304" height="455">
            </div>
            <div class="game__option">
              <img src=${this.data.options[1].src} alt=${this.data.options[1].alt} width="304" height="455">
            </div>
            <div class="game__option">
              <img src=${this.data.options[2].src} alt=${this.data.options[2].alt} width="304" height="455">
            </div>
          </form>
          <ul class="stats">
            ${this.statsIcons}
          </ul>
        </section>`;
        break;
    }
    return currentGameTemplate;
  }

  onAnswer() {

  }

  bind() {
    switch (this.data.type) {
      case gameOptions.SINGLE:
        const answers = this.element.querySelectorAll(`input`);
        answers.forEach((el) => {
          el.addEventListener(`click`, () => {
            this.onAnswer();
          });
        });
        break;

      case gameOptions.DOUBLE:
        const gameForm = this.element.querySelector(`form`);
        const gameAnswers = this.element.querySelectorAll(`input`);
        gameForm.addEventListener(`click`, () => {
          if ([...gameAnswers].filter((el) => el.checked).length === 2) {
            this.onAnswer();
          }
        });
        break;

      case gameOptions.TRIPLE:
        const gameOptions = this.element.querySelectorAll(`.game__option`);
        gameOptions.forEach((el) => {
          el.addEventListener(`click`, () => {
            this.onAnswer();
          });
        });
        break;
    }
  }
}
