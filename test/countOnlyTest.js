const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

describe("countOnly", ()=> {
  it("correctly counts names that appear", () => {
    assert.deepEqual(result1["Jason"], 1);
    assert.deepEqual(result1["Fang"], 2);
  });

  it("correctly counts names that do not appear", () => {
    assert.deepEqual(result1["Karima"], undefined);
    assert.deepEqual(result1["Agouhanna"], undefined);
  });
});