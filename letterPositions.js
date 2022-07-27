let eqArrays = function(array1, array2) {
  let comparison = true;
  if (array1.length !== array2.length ) {
    comparison = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      comparison = false;
    }
  }
  return comparison;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

//New Function!!
const letterPositions = function(string) {
  let results = {};
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    let stringLetter = string[i];
    if (!results[stringLetter]) {
      results[stringLetter] = [];
    }
    results[stringLetter].push(i);
  }
  return results;
};


let a = letterPositions("hello");
assertArraysEqual(a.h, [0]);
assertArraysEqual(a.e, [1]);
assertArraysEqual(a.l, [2, 3]);
assertArraysEqual(a.o, [4]);
