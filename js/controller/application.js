import IntroView from '../views/intro-view.js';
import GreetingView from '../views/greeting-view.js';
import HeaderView from '../views/header-view.js';
import RulesView from '../views/rules-view.js';
import StatsView from '../views/stats-view.js';
import GameScreen from './game-screen.js';
import GameModel from '../model/game-model.js';
import Utils from '../utils/utils.js';

const screenContainer = document.createElement(`div`);
export default class Application {
  static showIntro() {
    const intro = new IntroView();
    Utils.changeView(intro.element);
  }

  static showGreeting() {
    const greeting = new GreetingView();
    Utils.changeView(greeting.element);
  }

  static showRules() {
    const header = new HeaderView();
    const rules = new RulesView();

    screenContainer.innerHTML = ``;
    screenContainer.appendChild(header.element);
    screenContainer.appendChild(rules.element);
    Utils.changeView(screenContainer);
  }

  static showGame(userName) {
    this.model = new GameModel(userName);
    const gameScreen = new GameScreen(this.model);
    gameScreen.start();
  }

  static showStats(isFail) {
    const header = new HeaderView();
    const stats = new StatsView(this.model.currentGame, isFail, this.model.currentGame.statistics);

    screenContainer.innerHTML = ``;
    screenContainer.appendChild(header.element);
    screenContainer.appendChild(stats.element);
    Utils.changeView(screenContainer);
  }
}
