export default (nums) => {
  let max = -10000;
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};
