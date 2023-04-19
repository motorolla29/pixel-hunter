import AbstractView from "./abstract-view";
import Application from "../controller/application";

export default class HeaderView extends AbstractView {
  constructor(initialState, currentState, gameModel, gameScreen) {
    super();
    this.initialState = initialState;
    this.currentState = currentState;
    this.gameModel = gameModel;
    this.gameScreen = gameScreen;
  }


  get template() {
    const heartFullIcon = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`;
    const heartEmptyIcon = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`;

    if (this.initialState && this.currentState) {
      return `
      <header class="header">
        <button class="back">
          <span class="visually-hidden">Вернуться к началу</span>
          <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
            <use xlink:href="img/sprite.svg#arrow-left"></use>
          </svg>
          <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
            <use xlink:href="img/sprite.svg#logo-small"></use>
          </svg>
        </button>
        <div class="game__timer">${this.currentState.time}</div>
        <div class="game__lives">
          ${new Array(this.initialState.lives - this.currentState.lives).fill(heartEmptyIcon).join(``)}
          ${new Array(this.currentState.lives).fill(heartFullIcon).join(``)}
        </div>
      </header>`;
    }
    return `
    <header class="header">
      <button class="back">
        <span class="visually-hidden">Вернуться к началу</span>
        <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
          <use xlink:href="img/sprite.svg#arrow-left"></use>
        </svg>
        <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
          <use xlink:href="img/sprite.svg#logo-small"></use>
        </svg>
      </button>
    </header>`;
  }

  onClick() {
    Application.showIntro();
    this.gameModel.restart();
    this.gameScreen.stopTimer();
  }

  bind() {
    const returnButton = this.element.querySelector(`.back`);
    returnButton.addEventListener(`click`, () => {
      this.onClick();
    });
  }

}


