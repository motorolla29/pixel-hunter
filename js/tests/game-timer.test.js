import {assert} from "chai";

const Timer = function (time, callback) {
  if (time < 0) {
    throw new Error(`the time argument must be a positive number`);
  }
  if (typeof time !== `number`) {
    throw new Error(`the time argument must be a positive number`);
  }
  this.time = time;
  this.tick = () => {
    if (this.time > 0) {
      this.time--;
    } else {
      return callback();
    }
    return this.time;
  };
};

const someCallback = function () {
  return `done`;
};

describe(`Timer()`, () => {
  it(`setting right time`, () => {
    assert.equal(30000, new Timer(30000).time);
    assert.equal(100, new Timer(100).time);
    assert.equal(1, new Timer(1).time);
  });
  it(`should not accept negative time number`, () => {
    assert.throws(() => new Timer(-1), /the time argument must be a positive number/);
    assert.throws(() => new Timer(-1000), /the time argument must be a positive number/);
  });
  it(`should not accept wrong type of timer argument`, () => {
    assert.throws(() => new Timer(), /the time argument must be a positive number/);
    assert.throws(() => new Timer({}), /the time argument must be a positive number/);
    assert.throws(() => new Timer([]), /the time argument must be a positive number/);
  });
  it(`decrement time on tick()`, () => {
    assert.equal(29999, new Timer(30000).tick());
    assert.equal(0, new Timer(1).tick());
  });
  it(`trigger callback if time = 0`, () => {
    assert.equal(`done`, new Timer(0, someCallback).tick());
  });
});
