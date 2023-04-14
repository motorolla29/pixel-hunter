import {assert} from 'chai';
import getFinalScore from '../utils/get-final-score';

const createAnswersArray = function (questionsQuantity, truthfulness = true, time = 15) {
  const answersArray = [];

  for (let i = 0; i < questionsQuantity; i++) {
    let answer = {
      answerIsTrue: truthfulness,
      answerTime: time
    };
    answersArray.push(answer);
  }
  return answersArray;
};

describe(`getFinalScore()`, () => {
  describe(`fastAndSlowAnswers`, () => {
    it(`should return -1 if player did not answered on 10 questions`, () => {
      assert.equal(-1, getFinalScore(createAnswersArray(9)));
    });
    it(`should return number if player answered on 10 questions`, () => {
      assert.equal(`number`, typeof getFinalScore(createAnswersArray(10)));
    });
    it(`should return 1150 if player answers are not fast and not slow and 3 lives left`, () => {
      assert.equal(1150, getFinalScore(createAnswersArray(10, true, 15), 3));
    });
    it(`should return 1650 if all players answers are fast and 3 lives left`, () => {
      assert.equal(1650, getFinalScore(createAnswersArray(10, true, 5), 3));
    });
    it(`should return 650 if all players answers are slow and 3 lives left`, () => {
      assert.equal(650, getFinalScore(createAnswersArray(10, true, 25), 3));
    });
  });
  describe(`scoreWithWrongAnswers`, () => {
    it(`should return 1000 if player answers are not fast and not slow and 2 lives left`, () => {
      assert.equal(1000, getFinalScore(createAnswersArray(10, true, 15), 2));
    });
    it(`should return 850 if player answers are not fast and not slow and 1 lives left`, () => {
      assert.equal(850, getFinalScore(createAnswersArray(10, true, 15), 1));
    });
    it(`should return 700 if player answers are not fast and not slow and 0 lives left`, () => {
      assert.equal(700, getFinalScore(createAnswersArray(10, true, 15), 0));
    });
  });
});
