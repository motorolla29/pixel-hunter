import GameTimer from './game-timer.js';
import {STATS_DATA} from '../data/game-data.js';

let timer = new GameTimer(30);

const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: timer.time,
  answers: [],
  statistics: STATS_DATA
});

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
