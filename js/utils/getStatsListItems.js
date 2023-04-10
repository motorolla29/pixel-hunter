const GAME_QUESTIONS_COUNT = 10;
const statsResultMap = {
  right: `<li class="stats__result stats__result--correct"></li>`,
  wrong: `<li class="stats__result stats__result--wrong"></li>`,
  fast: `<li class="stats__result stats__result--fast"></li>`,
  slow: `<li class="stats__result stats__result--slow"></li>`,
  unknown: `<li class="stats__result stats__result--unknown"></li>`,
};

const statsListItems = new Array(GAME_QUESTIONS_COUNT).fill(statsResultMap.unknown);

export default statsListItems;
