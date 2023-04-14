const statsIconTypesMap = {
  right: `<li class="stats__result stats__result--correct"></li>`,
  wrong: `<li class="stats__result stats__result--wrong"></li>`,
  fast: `<li class="stats__result stats__result--fast"></li>`,
  slow: `<li class="stats__result stats__result--slow"></li>`,
  unknown: `<li class="stats__result stats__result--unknown"></li>`
};

const getStatsIcons = (data) => {
  const gameStatsArr = [];
  data.forEach((el) => {
    gameStatsArr.push(statsIconTypesMap[el]);
  });

  return gameStatsArr;
};

export {statsIconTypesMap, getStatsIcons};
