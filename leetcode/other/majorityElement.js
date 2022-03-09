export default (array) => {
  const countedEntities = array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  const entries = Object.entries(countedEntities);
  let highest = 0;
  let result = 0;

  for (const [key, value] of entries) {
    if (value > highest) {
      highest = value;
      result = key;
    }
  }
  return Number(result);
};
