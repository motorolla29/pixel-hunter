import Utils from '../utils/utils.js';
import AbstractView from './abstract-view.js';

export default class StatsDisplay extends AbstractView {
  constructor(currentGame, isFail, statsArray) {
    super();
    this.currentGame = currentGame;
    this.isFail = isFail;
    this.statsArray = statsArray;
  }

  get template() {
    if (this.isFail) {
      return `
      <section class="result">
        <h2 class="result__title">Проигрыш</h2>
        <table class="result__table">
          <tr>
            <td class="result__number"></td>
            <td>
              <ul class="stats">
                ${Utils.getStatsIcons(this.statsArray).join(``)}
              </ul>
            </td>
            <td class="result__total"></td>
            <td class="result__total  result__total--final">fail</td>
          </tr>
        </table>
      </section>
      `;
    }
    const correctAnswers = this.currentGame.answers.filter((answer) => {
      return answer.isCorrect;
    });
    const fastAnswers = this.currentGame.answers.filter((answer) => {
      return answer.quality === `fast` && answer.isCorrect;
    });
    const slowAnswers = this.currentGame.answers.filter((answer) => {
      return answer.quality === `slow` && answer.isCorrect;
    });

    return `
    <section class="result">
      <h2 class="result__title">Победа!</h2>
      <table class="result__table">
        <tr>
          <td class="result__number"></td>
          <td colspan="2">
            <ul class="stats">
              ${Utils.getStatsIcons(this.statsArray).join(``)}
            </ul>
          </td>
          <td class="result__points">× 100</td>
          <td class="result__total">${correctAnswers.length * 100}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${fastAnswers.length}<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">${fastAnswers.length * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${this.currentGame.lives}<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">+ ${this.currentGame.lives * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${slowAnswers.length}<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">× 50</td>
          <td class="result__total">- ${slowAnswers.length * 50}</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.getFinalScore(this.currentGame.answers, this.currentGame.lives)}</td>
        </tr>
      </table>
      <table class="result__table">
    <section/>
    `;
  }

  getFinalScore(answersArray, livesLeft) {
    const scoreMap = {
      CORRECT_ANSWER: 100,
      FAST_ANSWER: 150,
      SLOW_ANSWER: 50,
      EXTRA_LIVE: 50
    };

    let score = 0;

    if (answersArray.length < 10) {
      return -1;
    }

    answersArray.forEach((answer) => {
      if (answer.isCorrect) {
        if (answer.quality === `correct`) {
          score += scoreMap.CORRECT_ANSWER;
        }
        if (answer.quality === `slow`) {
          score += scoreMap.SLOW_ANSWER;
        }
        if (answer.quality === `fast`) {
          score += scoreMap.FAST_ANSWER;
        }
      }
    });

    score += livesLeft * scoreMap.EXTRA_LIVE;

    return score;
  }
}

