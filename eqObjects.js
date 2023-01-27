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
  let a = Object.keys(object1);
  let b = Object.keys(object2);
  if (a.length !== b.length) {
    return false
  }
  for (let i = 0; i < a.length; i ++) {
    if (typeof object1[a[i]] === "string" && object1[a[i]] !== object2[a[i]]) {
      return false
    } else if (typeof object1[a[i]] === "object" && Array.isArray(object1[a[i]]) && !eqArrays(object1[a[i]], object2[a[i]])){
      return false
    } else if (typeof object1[a[i]] === "object" && !Array.isArray(object1[a[i]])) {
      return eqObjects(object1[a[i]], object2[a[i]])
    }
  }
  return true;
};

module.exports = eqObjects;