const assert = require("chai").assert;
const middle = require("../middle");

//Test cases:
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe("middle", () => {
  it("returns empty array when input is array of length 1", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns empty array when input is array of length 2", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns middle element when input is array of length 3 or more; odd case", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns middle element when input is array of length 3 or more; even case", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});