const INITIAL_LIVES = 3;
const heartFullIcon = `<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`;
const heartEmptyIcon = `<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`;

const gameState = (state) => `
<div class="game__timer">${state.time / 1000}</div>
  <div class="game__lives">
  ${new Array(INITIAL_LIVES - state.lives).fill(heartEmptyIcon).join(``)}
  ${new Array(state.lives).fill(heartFullIcon).join(``)}
  </div>
`;

const returnBtn = `
<button class="back">
  <span class="visually-hidden">Вернуться к началу</span>
  <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
    <use xlink:href="img/sprite.svg#arrow-left"></use>
  </svg>
  <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
    <use xlink:href="img/sprite.svg#logo-small"></use>
  </svg>
</button>`;

const getHeader = (state) => {
  if (state) {
    return `
    <header class="header">
      ${returnBtn}
      ${gameState(state)}
    </header>
    `;
  }
  return `
  <header class="header">
    ${returnBtn}
  </header>
  `;
};

export default getHeader;