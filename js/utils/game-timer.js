const GameTimer = function (time, callback) {
  if (time < 0 || typeof time !== `number`) {
    throw new Error(`the time argument must be a positive number`);
  }
  this.time = time;
  this.tick = () => {
    if (this.time > 0) {
      this.time -= 1;
    } else {
      return callback();
    }
    return this.time;
  };
};

export default GameTimer;
