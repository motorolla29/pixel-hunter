// import {assert} from "chai";

// const reducePlayerLives = function (currentLives) {
//   return currentLives < 4 && currentLives >= 0 ? --currentLives : -1;
// };

// describe(`reducePlayerLives()`, () => {
//   describe(`should retun -1 if player have no lives`, () => {
//     it(`should reduce player lives`, () => {
//       assert.equal(2, reducePlayerLives(3));
//       assert.equal(1, reducePlayerLives(2));
//       assert.equal(0, reducePlayerLives(1));
//     });
//     it(`should return -1 if player have no lives`, () => {
//       assert.equal(-1, reducePlayerLives(0));
//     });
//     it(`should return -1 if current lives more then 3 or negative number`, () => {
//       assert.equal(-1, reducePlayerLives(4));
//       assert.equal(-1, reducePlayerLives(333));
//       assert.equal(-1, reducePlayerLives(-1));
//       assert.equal(-1, reducePlayerLives(-25));
//     });
//     it(`should return -1 if current lives has incorrect value`, () => {
//       assert.equal(-1, reducePlayerLives(`привет`));
//       assert.equal(-1, reducePlayerLives([]));
//       assert.equal(-1, reducePlayerLives({}));
//       assert.equal(-1, reducePlayerLives());
//     });
//   });
// });
