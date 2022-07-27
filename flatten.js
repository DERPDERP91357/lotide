// let eqArrays = function(array1, array2) {
//   let comparison = true;
//   if (array1.length !== array2.length) {
//     comparison = false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       comparison = false;
//     }
//   }
//   return comparison;
// };

// // FUNCTION IMPLEMENTATION
// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅Assertion Passed: [${array1}] === [${array2}]`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: [${array1}] !== [${array2}]`);
//   }
// };


const flatten = function(arrays) {
  let result = [];
  for (let array of arrays) {
    if (Array.isArray(array)) {
      for (let member of array) {
        result.push(member);
      }
    } else {
      result.push(array);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));