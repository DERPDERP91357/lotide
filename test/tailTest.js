const assert = require("chai").assert;
const tail = require("../tail");

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

// console.log(tail([]));
// console.log(tail([1]));

describe("tail", () => {
  it("crops array in intended manner", () => {
    const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.strictEqual(words.length, 2);
    assert.strictEqual(words[0], "Lighthouse");
    assert.strictEqual(words[1], "Labs");
  });

  it("does not change original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("returns empty array when input is array of length 0", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns empty array when input is array of length 1", () => {
    assert.deepEqual(tail([1]), []);
  });
});