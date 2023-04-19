
import Utils from '../utils/utils';
import GAME_DATA from '../data/game-data';
import Application from "../controller/application";
import HeaderView from "../views/header-view";
import SingleGameView from "../views/single-game-view";
import DoubleGameView from "../views/double-game-view";
import TripleGameView from "../views/triple-game-view";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.screenContainer = document.createElement(`div`);
    this.ONE_SECOND = 200;
  }

  start() {
    const header = new HeaderView(this.model._state, this.model.currentGame, this.model, this);

    this.currentGameView = null;
    switch (GAME_DATA[this.model.currentGame.level].type) {
      case this.model.GameType.SINGLE_QUESTION:
        this.currentGameView = new SingleGameView(GAME_DATA[this.model.currentGame.level], Utils.getStatsIcons(this.model.currentGame.statistics).join(``));
        break;
      case this.model.GameType.DOUBLE_QUESTION:
        this.currentGameView = new DoubleGameView(GAME_DATA[this.model.currentGame.level], Utils.getStatsIcons(this.model.currentGame.statistics).join(``));
        break;
      case this.model.GameType.TRIPLE_QUESTION:
        this.currentGameView = new TripleGameView(GAME_DATA[this.model.currentGame.level], Utils.getStatsIcons(this.model.currentGame.statistics).join(``));
        break;
    }

    this.startTimer();

    this.currentGameView.onAnswer = (evt) => {
      this.model.updateStats(this.currentGameView, evt);
      if (this.model.currentGame.lives <= 0) {
        this.stopTimer();
        this.loseGame();
        return;
      }
      if (this.model.currentGame.lives > 0 && this.model.currentGame.level < GAME_DATA.length - 1) {
        GameScreen.changeLevel(this.model.currentGame, this.model.currentGame.level++);
        this.stopTimer();
        this.start();
      } else {
        GameScreen.changeLevel(this.model.currentGame, this.model.currentGame.level++);
        this.stopTimer();
        this.winGame();
      }
    };

    this.screenContainer.innerHTML = ``;
    this.screenContainer.appendChild(header.element);
    this.screenContainer.appendChild(this.currentGameView.element);
    this.headerTimerNode = this.screenContainer.querySelector(`.game__timer`);
    Utils.changeView(this.screenContainer);
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
    this.headerTimerNode.innerHTML = this.model.currentGame.time;
  }

  tick() {
    if (this.model.currentGame.time <= 0) {
      this.model.currentGame.lives = this.model.reduceLives(this.model.currentGame.lives);
      this.model.currentGame.answers.push({
        isCorrect: false,
        answerTime: null,
        quality: null
      });
      this.model.currentGame.statistics[this.model.currentGame.level] = `wrong`;
      GameScreen.changeLevel(this.model.currentGame, this.model.currentGame.level++);
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
    this.timer = setInterval(() => {
      this.tick();
    }, this.ONE_SECOND);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.model.currentGame.time = this.model._state.time;
  }

  static changeLevel(game, level) {
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
  }
}
