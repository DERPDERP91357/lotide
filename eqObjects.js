let equalLength = function(array1, array2) {
  let a = array1.length;
  let b = array2.length;
  let equality = false;
  if (a === b) {
    equality = true;
  }
  return equality;
};

let eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  let equality = true;
  let a = Object.keys(object1);
  let b = Object.keys(object2);
  if (!equalLength(a, b)) {
    return equality = false;
  }
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(object1[a[i]]) && Array.isArray(object2[a[i]])) {
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

module.exports = eqObjects;