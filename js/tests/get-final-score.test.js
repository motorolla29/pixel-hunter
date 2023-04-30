import {assert} from "chai";
import StatsView from "../views/stats-view";

const stats = new StatsView();

const makeQuestionsArray = (answerQuality, maxArrElements = 10) => {
  const questionsArr = [];
  for (let i = 0; i < maxArrElements; i++) {
    const questionsArrEl = {
      isCorrect: true,
      quality: answerQuality
    };
    questionsArr.push(questionsArrEl);
  }
  return questionsArr;
};

describe(`getFinalScore()`, () => {
  describe(`fastAndSlowAnswers`, () => {
    it(`should return -1 if player did not answered on 10 questions`, () => {
      assert.equal(-1, stats.getFinalScore(makeQuestionsArray(`slow`, 9), 3));
    });
    it(`should return number if player answered on 10 questions`, () => {
      assert.equal(`number`, typeof stats.getFinalScore(makeQuestionsArray(`slow`), 3));
    });
    it(`should return 1150 if player answers are not fast and not slow and 3 lives left`, () => {
      assert.equal(1150, stats.getFinalScore(makeQuestionsArray(`correct`), 3));
    });
    it(`should return 1650 if all players answers are fast and 3 lives left`, () => {
      assert.equal(1650, stats.getFinalScore(makeQuestionsArray(`fast`), 3));
    });
    it(`should return 650 if all players answers are slow and 3 lives left`, () => {
      assert.equal(650, stats.getFinalScore(makeQuestionsArray(`slow`), 3));
    });
  });
});
