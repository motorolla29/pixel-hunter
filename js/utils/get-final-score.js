const getFinalScore = function (answersArray, livesLeft) {
  const scoreMap = {
    RIGHT_ANSWER: 100,
    FAST_ANSWER: 50,
    SLOW_ANSWER: -50,
    EXTRA_LIVE: 50
  };

  let score = 0;

  if (answersArray.length < 10) {
    return -1;
  }

  answersArray.forEach((answer) => {
    if (answer.isCorrect) {
      score += scoreMap.RIGHT_ANSWER;
    }
    if (answer.answerTime < 10) {
      score += scoreMap.FAST_ANSWER;
    }
    if (answer.answerTime > 20) {
      score += scoreMap.SLOW_ANSWER;
    }
  });

  if (livesLeft !== 3) {
    score -= (3 - livesLeft) * 100;
  }

  score += livesLeft * scoreMap.EXTRA_LIVE;

  return score;

};

export default getFinalScore;
