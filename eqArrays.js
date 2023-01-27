let eqObjects = require("./eqObjects");

let eqArrays = function(array1, array2) {
  if (!array1 || !array2) {
    return false
  }
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (typeof array1[i] === "string" && array1[i] !== array2[i]) {
      return false;
    } else if (Array.isArray(array1[i])) {
      return eqArrays(array1[i], array2[i])
    } else if (!Array.isArray(array1[i]) && typeof array1[i] === "object") {
      return eqObjects(array1[i], array2[i])
    }
  }
  return true;
};

module.exports = eqArrays;