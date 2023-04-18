import AbstractView from './abstract-view.js';

export default class TripleGameView extends AbstractView {
  constructor(data, statsIcons) {
    super();
    this.data = data;
    this.statsIcons = statsIcons;
  }

  get template() {
    return `
        <section class="game">
          <p class="game__task">${this.data.task}</p>
          <form class="game__content  game__content--triple">
            <div class="game__option game__option--selected">
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
  }

  onAnswer() {

  }

  bind() {
    const gameOptions = this.element.querySelectorAll(`.game__option`);
    gameOptions.forEach((el) => {
      el.addEventListener(`click`, (evt) => {
        this.onAnswer(evt);
      });
    });
  }
}
