

import {INITIAL_GAME} from '../utils/change-level';
import {GAME_DATA} from '../data/game-data';
import {getStatsIcons} from "../utils/get-stats-icons";
import changeView from "../utils/change-view";
import Application from "../controller/application";
import HeaderView from "../views/header-view";
import SingleGameView from "../views/single-game-view";
import DoubleGameView from "../views/double-game-view";
import TripleGameView from "../views/triple-game-view";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.screenContainer = document.createElement(`div`);
    this.ONE_SECOND = 1000;
  }

  start() {
    this.startTimer();
    this.gameTypes = {
      singleQuestion: new SingleGameView(GAME_DATA[this.model.currentGame.level], getStatsIcons(this.model.currentGame).join(``)),
      doubleQuestion: new DoubleGameView(GAME_DATA[this.model.currentGame.level], getStatsIcons(this.model.currentGame).join(``)),
      tripleQuestion: new TripleGameView(GAME_DATA[this.model.currentGame.level], getStatsIcons(this.model.currentGame).join(``))
    };

    this.currentGameView = this.gameTypes[GAME_DATA[this.model.currentGame.level].type];
    const header = new HeaderView(INITIAL_GAME, this.model.currentGame);

    this.currentGameView.onAnswer = (evt) => {
      this.model.updateStats(this.currentGameView, evt);
      if (this.model.currentGame.lives <= 0) {
        this.stopTimer();
        this.loseGame();
        return;
      }
      if (this.model.currentGame.lives > 0 && this.model.currentGame.level < GAME_DATA.length - 1) {
        this.model.nextLevel();
        this.stopTimer();
        this.start();
      } else {
        this.model.nextLevel();
        this.stopTimer();
        this.winGame();
      }
    };

    this.screenContainer.innerHTML = ``;
    this.screenContainer.appendChild(header.element);
    this.screenContainer.appendChild(this.currentGameView.element);
    changeView(this.screenContainer);
  }

  loseGame() {
    Application.showStats(true);
    this.model.restart();
  }

  winGame() {
    Application.showStats();
    this.model.restart();
  }

  updateTimeOnHeader() {
    let headerTimerNode = this.screenContainer.querySelector(`.game__timer`);
    headerTimerNode.innerHTML = this.model.currentGame.time;
  }

  tick() {
    if (this.model.currentGame.time <= 0) {
      this.model.reduceLives();
      this.model.nextLevel();
      this.stopTimer();
      this.start();
    }
    if (this.model.currentGame.lives <= 0) {
      this.stopTimer();
      this.loseGame();
      return;
    }
    this.model.currentGame.time--;
    this.updateTimeOnHeader();
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.tick();
      this.startTimer();
    }, this.ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(this.timer);
    this.model.currentGame.time = this.model._state.time;
  }
}
