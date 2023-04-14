import {gameTasks} from './render-game-display.js';
import {GAME_DATA} from '../data/game-data.js';
import {currentGame} from './change-level.js';
import reducePlayerLives from './reduce-player-lives.js';

const setStatisticsResult = (result) => {
  let answerItem = {
    isCorrect: result === `correct` ? true : false,
    answerTime: currentGame.time / 1000,
    quality: currentGame.time > 20 ? `slow` : `fast`
  };
  currentGame.answers.push(answerItem);
  currentGame.statistics[currentGame.level] = answerItem.isCorrect ? answerItem.quality : result;
};

const updateStats = (currentDisplay, evt) => {
  const currentGameDisplay = GAME_DATA[currentGame.level];
  const currentGameTask = currentDisplay.querySelector(`.game__task`).textContent;
  const evtTargetParent = evt.target.parentNode;

  switch (currentGameTask) {
    case gameTasks.doubleQuestion:
      const checkedInputs = currentDisplay.querySelectorAll(`input:checked`);
      if (checkedInputs[0].value === currentGameDisplay.options[0].answer &&
        checkedInputs[1].value === currentGameDisplay.options[1].answer) {
        setStatisticsResult(`correct`);
      } else {
        setStatisticsResult(`wrong`);
        currentGame.lives = reducePlayerLives(currentGame.lives);
      }
      break;

    case gameTasks.singleQuestion:
      const evtTargetInput = evtTargetParent.querySelector(`input`);
      if (evtTargetInput.value === currentGameDisplay.options[0].answer) {
        setStatisticsResult(`correct`);
      } else {
        setStatisticsResult(`wrong`);
        currentGame.lives = reducePlayerLives(currentGame.lives);
      }
      break;

    case gameTasks.tripleQuestion:
      if (evtTargetParent.classList.contains(`game__option--selected`)) {
        setStatisticsResult(`correct`);
      } else {
        setStatisticsResult(`wrong`);
        currentGame.lives = reducePlayerLives(currentGame.lives);
      }
      break;
  }
};

export default updateStats;
