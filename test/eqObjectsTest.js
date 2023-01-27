//set 1
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("eqObjects", ()=> {
  it("returns true for objects with shuffled but equal keys", () => {
    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns false for objects with different number of keys", () => {
    assert.isFalse(eqObjects(ab, abc), false);
  });

  it("returns true for objects with nested and shuffled but equal keys", () => {
    assert.isTrue(eqObjects(cd, dc));
  });

  it("returns false for objects with different number of nested keys", () => {
    assert.isFalse(eqObjects(cd, cd2), false);
  });
  it("returns true for objects with different number of nested keys", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("returns false for objects with different number of nested keys", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("returns false for objects with different number of nested keys", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});