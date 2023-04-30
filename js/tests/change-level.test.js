import {assert} from "chai";

const INITIAL_GAME = Object.freeze({
  level: 0,
  lives: 3,
  time: 30000
});

const changeLevel = (game, level) => {
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
};

describe(`changeLevel()`, () => {
  describe(`Check level changing`, () => {
    it(`should update game level`, () => {
      assert.equal(1, changeLevel(INITIAL_GAME, 1).level);
      assert.equal(5, changeLevel(INITIAL_GAME, 5).level);
      assert.equal(100, changeLevel(INITIAL_GAME, 100).level);
    });
  });
  describe(`Check initial game status`, () => {
    it(`game starts with 3 lives, level 0, 30000 time`, () => {
      assert.equal(0, INITIAL_GAME.level);
      assert.equal(3, INITIAL_GAME.lives);
      assert.equal(30000, INITIAL_GAME.time);
    });
  });
  it(`should not accept wrong types of level argument`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, ``).level, `Level should be of type number`);
    assert.throws(() => changeLevel(INITIAL_GAME, `123`).level, `Level should be of type number`);
    assert.throws(() => changeLevel(INITIAL_GAME, `hello`).level, `Level should be of type number`);
    assert.throws(() => changeLevel(INITIAL_GAME, [1, 2, 3]).level, `Level should be of type number`);
    assert.throws(() => changeLevel(INITIAL_GAME, {}).level, `Level should be of type number`);
  });
  it(`should not accept negative values`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -5).level, `Level should not be negative value`);
  });
});
