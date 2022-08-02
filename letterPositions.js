const letterPositions = function(string) {
  let results = {};
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    let stringLetter = string[i];
    if (!results[stringLetter]) {
      results[stringLetter] = [];
    }
    results[stringLetter].push(i);
  }
  return results;
};

module.exports = letterPositions;