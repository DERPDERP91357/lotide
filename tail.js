let tail = function(array) {
  let x = [];
  if (array.length !== 1 || array.length !== 0) {
    for (let i = 1; i < array.length; i++) {
      x.push(array[i]);
    }
  }
  return x;
};

module.exports = tail;