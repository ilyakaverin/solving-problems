export default (num) => {
    const bubbleSort = (inputArr) => {
       const len = inputArr.length;
      for (let i = 0; i < len; i += 1) {
        for (let j = 0; j < len; j += 1) {
          if (inputArr[j] > inputArr[j + 1]) {
            let tmp = inputArr[j];
            inputArr[j] = inputArr[j + 1];
            inputArr[j + 1] = tmp;
          }
        }
      }
      return inputArr;
    };
  
    const arrayOfNums = num.toString().split("");
    const result = bubbleSort(arrayOfNums);
  
    return Number(result[0] + result[2]) + Number(result[1] + result[3]);
  };