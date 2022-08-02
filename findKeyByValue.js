const findKeyByValue = function(object, value) {
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
};

module.exports = findKeyByValue;