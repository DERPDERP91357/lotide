const countLetters = function(string) {
  let itemsCounted = {};
  string = string.toLowerCase();
  for (let letters of string) {
    if (!itemsCounted[letters]) {
      itemsCounted[letters] = 1;
    } else {
      itemsCounted[letters] ++;
    }
  }
  return itemsCounted;
};

module.exports(countLetters);
