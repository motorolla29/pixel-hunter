import {assert} from "chai";

const reduceLives = function (lives) {
  return lives > 0 && lives < 4 ? --lives : -1;
};

describe(`reduceLives()`, () => {
  describe(`should retun -1 if player have no lives`, () => {
    it(`should reduce player lives`, () => {
      assert.equal(2, reduceLives(3));
      assert.equal(1, reduceLives(2));
      assert.equal(0, reduceLives(1));
    });
    it(`should return -1 if player have no lives`, () => {
      assert.equal(-1, reduceLives(0));
    });
    it(`should return -1 if current lives more then 3 or negative number`, () => {
      assert.equal(-1, reduceLives(4));
      assert.equal(-1, reduceLives(333));
      assert.equal(-1, reduceLives(-1));
      assert.equal(-1, reduceLives(-25));
    });
    it(`should return -1 if current lives has incorrect value`, () => {
      assert.equal(-1, reduceLives(`привет`));
      assert.equal(-1, reduceLives([]));
      assert.equal(-1, reduceLives({}));
      assert.equal(-1, reduceLives());
    });
  });
});
