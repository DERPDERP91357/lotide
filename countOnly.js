const countOnly = function(allItems, itemsToCount) {
  let itemsCounted = {};
  for (let names of allItems) {
    if (itemsToCount[names]) {
      if (!itemsCounted[names]) {
        itemsCounted[names] = 1;
      } else {
        itemsCounted[names] ++;
      }
    }
  }
  return itemsCounted;
};
module.exports = countOnly;