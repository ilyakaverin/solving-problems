export default (nums, n) => {
  const result = [];

  for (let i = 0; i < n; i += 1) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
};
