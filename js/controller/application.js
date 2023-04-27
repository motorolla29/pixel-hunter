import IntroView from '../views/intro-view.js';
import GreetingView from '../views/greeting-view.js';
import HeaderView from '../views/header-view.js';
import RulesView from '../views/rules-view.js';
import StatsView from '../views/stats-view.js';
import GameScreen from './game-screen.js';
import GameModel from '../model/game-model.js';
import SplashScreen from '../views/splash-screen.js';
import ModalErrorView from '../views/modal-error-view.js';
import Utils from '../utils/utils.js';
import GAME_DATA from '../data/game-data.js';

const screenContainer = document.createElement(`div`);

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export let serverData;
export default class Application {
  static start() {
    const splash = new SplashScreen();
    Utils.changeView(splash.element);
    splash.start();
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
    then(checkStatus).
    then((response) => response.json()).
    then((data) => (serverData = data)).
    then(() => Application.showIntro()).
    catch((err) => {
      Application.showModalError(err.message);
      serverData = GAME_DATA;
      setTimeout(() => {
        Application.showIntro();
      }, 3000);
    }).
    then(() => splash.stop());
  }

  static showModalError(errorStatus) {
    const modalError = new ModalErrorView(errorStatus);
    Utils.changeView(modalError.element);
  }

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
