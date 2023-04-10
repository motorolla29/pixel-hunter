import createDisplay from "./createDisplay";
import appendDisplay from "./appendDisplay";
import GAME_DATA from "../data/game-data";
import statsNode from "../displays/stats";
import {INITIAL_GAME} from "./changeLevel";
import {firstGameTemplate, secondGameTemplate, thirdGameTemplate} from "../displays/gameScreenDisplays";

const gameTemplates = [firstGameTemplate, secondGameTemplate, thirdGameTemplate];
const gameTasks = [GAME_DATA[0].task, GAME_DATA[1].task, GAME_DATA[2].task];

let gameDisplayCounter = 0;
const renderGameDisplay = (data) => {
  const currentGameType = gameTemplates[data.level];
  const currentGameDisplay = createDisplay(currentGameType(data));
  const currentGameTask = currentGameDisplay.querySelector(`.game__task`).textContent;
  const gameAnswers = currentGameDisplay.querySelectorAll(`input`);
  const gameOptions = currentGameDisplay.querySelectorAll(`.game__option`);
  const gameForm = currentGameDisplay.querySelector(`form`);

  switch (currentGameTask) {
    case gameTasks[0]:
      gameForm.addEventListener(`click`, () => {
        if ([...gameAnswers].filter((el) => el.checked).length === 2) {
          renderNextDisplay();
        }
      });
      break;
    case gameTasks[1]:
      gameAnswers.forEach((el) => {
        el.addEventListener(`click`, () => {
          renderNextDisplay();
        });
      });
      break;
    case gameTasks[2]:
      gameOptions.forEach((el) => {
        el.addEventListener(`click`, () => {
          renderNextDisplay();
        });
      });
      break;
  }


  const renderNextDisplay = () => {
    if (INITIAL_GAME.lives >= 0 && INITIAL_GAME.level < 9) {
      INITIAL_GAME.level++;
      gameDisplayCounter = gameDisplayCounter !== 2 ? ++gameDisplayCounter : 0;
      appendDisplay(renderGameDisplay(GAME_DATA[gameDisplayCounter]));
    } else {
      appendDisplay(statsNode);
    }
  };

  return currentGameDisplay;
};

export default renderGameDisplay;
