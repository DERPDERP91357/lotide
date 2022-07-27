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


// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const compare = function (item, array) {
  for (let i = 0; i < array.length; i++) {
    let inArray = false;
    if (item === array[i]){
      inArray = true;
    }
    return inArray;
  }
};


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if(!compare(source[i], itemsToRemove)) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);