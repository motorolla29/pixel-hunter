// import {assert} from "chai";
// import GameTimer from "../utils/game-timer.js";

// const callback = () => {
//   return `done`;
// };

// describe(`IngameTimer()`, () => {
//   it(`setting right time`, () => {
//     assert.equal(30000, new GameTimer(30000).time);
//     assert.equal(100, new GameTimer(100).time);
//     assert.equal(1, new GameTimer(1).time);
//   });
//   it(`should not accept negative time number`, () => {
//     assert.throws(() => new GameTimer(-1), /the time argument must be a positive number/);
//     assert.throws(() => new GameTimer(-1000), /the time argument must be a positive number/);
//   });
//   it(`should not accept wrong type of timer argument`, () => {
//     assert.throws(() => new GameTimer(), /the time argument must be a positive number/);
//     assert.throws(() => new GameTimer({}), /the time argument must be a positive number/);
//     assert.throws(() => new GameTimer([]), /the time argument must be a positive number/);
//   });
//   it(`decrement time on tick()`, () => {
//     assert.equal(29999, new GameTimer(30000).tick());
//     assert.equal(0, new GameTimer(1).tick());
//   });
//   it(`trigger callback if time = 0`, () => {
//     assert.equal(`done`, new GameTimer(0, callback).tick());
//   });
// });
