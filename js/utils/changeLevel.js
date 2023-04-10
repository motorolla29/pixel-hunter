import GameTimer from './gameTimer.js';
import statsListItems from './getStatsListItems.js';

let timer = new GameTimer(30000); // На ответ игроку дается 30 сек
const INITIAL_GAME = {
  level: 0,
  lives: 3,
  time: timer.time,
  answers: [],
  statistics: statsListItems
};

const changeLevel = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Level should be of type number`);
  }
  if (level < 0) {
    throw new Error(`Level should not be negative value`);
  }
  const newGame = Object.assign({}, game, {
    level
  });
  return newGame;
};

export {INITIAL_GAME, changeLevel};
