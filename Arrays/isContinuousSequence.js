export default (array) => {
    if (array.length <= 1) {
      return false;
    }
  
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i + 1] - array[i] !== 1) {
        return false;
      }
    }
    return true;
  };