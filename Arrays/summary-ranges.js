export default (array) => {
  const result = [];
  let temp = [];

  for (let i = 0, j = 1; i < array.length - 1; i += 1, j += 1) {
    if (array[i] - array[j] === -1) {
      temp.push(array[i]);
    }
    if (array[j] - array[i] === 1 && array[j] - array[j + 1] !== -1) {
      temp.push(array[j]);
      result.push(temp);
      temp = [];
    }
  }
  const buildRange = (collection) => {
    const first = collection[0];
    const last = collection[collection.length - 1];
    return `${first}->${last}`;
  };

  return result.map(buildRange);
};
