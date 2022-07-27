let eqArrays = function(array1, array2) {
  let comparison = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      comparison = !comparison;
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
      inArray = !inArray;
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