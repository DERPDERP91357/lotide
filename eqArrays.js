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

module.exports = eqArrays;