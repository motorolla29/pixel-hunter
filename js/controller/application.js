import changeView from '../utils/change-view.js';
import IntroView from '../views/intro-view.js';
import GreetingView from '../views/greeting-view.js';
import HeaderView from '../views/header-view.js';
import RulesView from '../views/rules-view.js';
import StatsView from '../views/stats-view.js';
import GameScreen from './game-screen.js';
import GameModel from '../model/game-model.js';

export default class Application {
  static showIntro() {
    const intro = new IntroView();
    changeView(intro.element);
  }

  static showGreeting() {
    const greeting = new GreetingView();
    changeView(greeting.element);
  }

  static showRules() {
    const rules = new RulesView();
    changeView(rules.element);
  }

  static showGame(userName) {
    this.model = new GameModel(userName);
    const gameScreen = new GameScreen(this.model);
    gameScreen.start();
  }

  static showStats(isFail) {
    const stats = new StatsView(this.model.currentGame, isFail, this.model.currentGame.statistics);

    changeView(stats.element);
  }
}
