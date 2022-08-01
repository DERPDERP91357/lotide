const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(array1, array2) {
  let comparison = true;
  if (array1.length !== array2.length) {
    comparison = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      comparison = false;
    }
  }
  return comparison;
};

//New function
let equalLength = function(array1, array2) {
  let a = array1.length;
  let b = array2.length;
  let equality = false;
  if (a === b) {
    equality = true;
  }
  return equality;
};



const eqObjects = function(object1, object2) {
  let equality = true;
  let a = Object.keys(object1);
  let b = Object.keys(object2);
  if (!equalLength(a, b)) {
    return equality = false;
  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(object1[a[i]]) && Array.isArray(object2[a[i]])) {
      console.log("yes");
      equality = eqArrays(object1[a[i]], object2[a[i]]);
      return equality;
    } else {
      if (object1[a[i]] !== object2[a[i]]) {
        return equality = false;
      }
    }
  }
  return equality;
};

//set 1
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

//set 2
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);