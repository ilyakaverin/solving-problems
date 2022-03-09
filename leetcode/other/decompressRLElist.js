export default (nums) => {
    const generate = (freq, val) => {
      const result = [];
  
      for (let i = 0; i < freq; i += 1) {
        result.push(val);
      }
      return result;
    };
  
    let out = [];
  
    for (let i = 0; i < nums.length; i += 2) {
      const tmp = generate(nums[i], nums[i + 1]);
      out.push(tmp);
    }
  
    return out.flat(1);
  };
  