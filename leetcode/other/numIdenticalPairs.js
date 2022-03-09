export default (nums) => {
  let count = 0;

  nums.map((item, idx) => {
    for (let i = idx + 1; i < nums.length; i += 1) {
      if (item == nums[i] && idx < i) {
        count += 1;
      }
    }
  });

  return count;
};
