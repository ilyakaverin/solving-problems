export default (array, size) => {
  const outputArray = [];
  const { length } = array;
  for (let i = 0; i < length; i += size) {
    outputArray.push(array.slice(i, i + size));
  }
  return outputArray;
};
