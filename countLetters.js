// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

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


console.log(countLetters("adgafgsfdhsdh"));

console.log(countLetters("Heloo daa adfad af adf ad fadf"));

console.log(countLetters("ADAFGdfadfadRadfadfa"));

console.log(countLetters(""));
