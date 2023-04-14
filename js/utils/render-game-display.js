import createDisplay from "./create-display";
import appendDisplay from "./append-display";
import {GAME_DATA} from "../data/game-data";
import statsTemplate from "../displays/stats";
import {currentGame} from "./change-level";
import {firstGameTemplate, secondGameTemplate, thirdGameTemplate} from "../displays/game-screen-displays";
import {getStatsIcons} from "./get-stats-icons";
import updateStats from "./update-stats";

const gameTemplates = {
  singleQuestion: secondGameTemplate,
  doubleQuestion: firstGameTemplate,
  tripleQuestion: thirdGameTemplate
};

const gameTasks = {
  singleQuestion: `Угадай, фото или рисунок?`,
  doubleQuestion: `Угадайте для каждого изображения фото или рисунок?`,
  tripleQuestion: `Найдите рисунок среди изображений`
};

const renderGameDisplay = (data) => {
  const currentGameType = gameTemplates[data.type];
  const currentGameDisplay = createDisplay(currentGameType(data));
  const currentGameTask = currentGameDisplay.querySelector(`.game__task`).textContent;
  const gameAnswers = currentGameDisplay.querySelectorAll(`input`);

  switch (currentGameTask) {
    case gameTasks.doubleQuestion:
      const gameForm = currentGameDisplay.querySelector(`form`);
      gameForm.addEventListener(`click`, (evt) => {
        if ([...gameAnswers].filter((el) => el.checked).length === 2) {
          updateStats(currentGameDisplay, evt);
          renderNextDisplay();
        }
      });
      break;
    case gameTasks.singleQuestion:
      gameAnswers.forEach((el) => {
        el.addEventListener(`click`, (evt) => {
          updateStats(currentGameDisplay, evt);
          renderNextDisplay();
        });
      });
      break;
    case gameTasks.tripleQuestion:
      const gameOptions = currentGameDisplay.querySelectorAll(`.game__option`);
      gameOptions.forEach((el) => {
        el.addEventListener(`click`, (evt) => {
          updateStats(currentGameDisplay, evt);
          renderNextDisplay();
        });
      });
      break;
  }


  const renderNextDisplay = () => {
    let currentStatsIcons = getStatsIcons(currentGame.statistics);

    if (currentGame.lives <= 0) {
      const statsFailDisplay = createDisplay(statsTemplate(currentStatsIcons, true));
      appendDisplay(statsFailDisplay);
      return;
    }
    if (currentGame.lives > 0 && currentGame.level < GAME_DATA.length - 1) {
      currentGame.level++;
      appendDisplay(renderGameDisplay(GAME_DATA[currentGame.level]));
    } else {
      const statsWinDisplay = createDisplay(statsTemplate(currentStatsIcons));
      appendDisplay(statsWinDisplay);
    }
  };

  return currentGameDisplay;
};

export {renderGameDisplay, gameTasks};

