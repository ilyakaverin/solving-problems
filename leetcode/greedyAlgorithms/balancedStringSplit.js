export default (s) => {
  let l = 0;
  let r = 0;
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "L") {
      l += 1;
    }
    if (s[i] === "R") {
      r += 1;
    }
    if (l === r) {
      l = 0;
      r = 0;
      count += 1;
    }
  }
  return count;
};
