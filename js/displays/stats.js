import getHeader from '../utils/get-header.js';
import {currentGame} from '../utils/change-level.js';
import getFinalScore from '../utils/get-final-score.js';


const statsTemplate = (statsIconsArray, isFail) => {
  if (isFail) {
    return `
    ${getHeader(currentGame)}
    <section class="result">
      <h2 class="result__title">Проигрыш</h2>
      <table class="result__table">
        <tr>
          <td class="result__number"></td>
          <td>
            <ul class="stats">
              ${statsIconsArray.join(``)}
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">fail</td>
        </tr>
      </table>
    </section>
    `;
  }
  let trueAnswers = currentGame.answers.filter((answer) => {
    return answer.answerIsTrue;
  });
  let fastAnswers = currentGame.answers.filter((answer) => {
    return answer.quality === `fast` && answer.answerIsTrue;
  });
  let slowAnswers = currentGame.answers.filter((answer) => {
    return answer.quality === `slow` && answer.answerIsTrue;
  });

  return `
  ${getHeader(currentGame)}
  <section class="result">
    <h2 class="result__title">Победа!</h2>
    <table class="result__table">
      <tr>
        <td class="result__number"></td>
        <td colspan="2">
          <ul class="stats">
            ${statsIconsArray.join(``)}
          </ul>
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${trueAnswers.length * 100}</td>
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
        <td class="result__extra">${currentGame.lives}<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">+ ${currentGame.lives * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${slowAnswers.length}<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">- ${slowAnswers.length * 50}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${getFinalScore(currentGame.answers, currentGame.lives)}</td>
      </tr>
    </table>
    <table class="result__table">
  <section/>
  `;
};

export default statsTemplate;
