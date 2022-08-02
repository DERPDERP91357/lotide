
// assertArraysEqual(a.h, [0]);
// assertArraysEqual(a.e, [1]);
// assertArraysEqual(a.l, [2, 3]);
// assertArraysEqual(a.o, [4]);


const assert = require("chai").assert;
const letterPositions = require("../letterPositions");
let a = letterPositions("hello");

describe("letter position", ()=> {
  it("returns correct index for letter occurence", () => {
    assert.deepEqual(a.h, [0]);
    assert.deepEqual(a.e, [1]);
    assert.deepEqual(a.o, [4]);
  });

  it("returns correct index for multiple letter occurences", () => {
    assert.deepEqual(a.l, [2, 3]);
  });
});