// FUNCTION IMPLEMENTATION

const isEven = function(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
let middle = function(array) {
  let result = [];
  let midPointIndex = Math.floor(array.length / 2);
  let lateMidPoint = array[midPointIndex];
  let earlyMidPoint = array[midPointIndex - 1];
  if (array.length > 2) {
    if (isEven(array)) {
      result.push(earlyMidPoint, lateMidPoint);
    } else {
      result.push(lateMidPoint);
    }
  }
  return result;
};

module.exports = middle;