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
    if(Array.isArray(object1[a[i]]) && Array.isArray(object2[a[i]])) {
      console.log ("yes");
      equality = eqArrays(object1[a[i]], object2[a[i]]);
      return equality; 
    } else {
      if (object1[a[i]] !== object2[a[i]]) {
        return equality = false;
      };
    }
  }
  return equality;
};



// New Function

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



//set 1
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false


//set 2
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
