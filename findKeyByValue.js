const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

//New function !!

const findKeyByValue = function(object, value) {
  //if doesnt exist then return undefined
  let exists = false;
  for (let properties in object) {
    if (object[[properties]] === value) {
      exists = true;
      return properties;
    }
  }
  if (!exists) {
    return undefined;
  }
  //it does then return property name
};

//Test cases
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);