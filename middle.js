

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




// FUNCTION IMPLEMENTATION

const isEven = function (array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
 };
let middle = function(array) {
  let result = [];
  let midPointIndex = Math.floor(array.length / 2);
  let earlyMidPoint = array[midPointIndex];
  let lateMidPoint = array[earlyMidPoint + 1];
  if (array.length > 2) {
    if (isEven(array)) {
      result.push(earlyMidPoint, lateMidPoint);
    } else {
      result.push(earlyMidPoint)
    } 
  };
  return result;
};



//Test cases:
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(1, 2, 3, 4, 5, 6), [3, 4]);