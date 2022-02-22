export default (str) => str
  .split('')
  .map((e, i, arr) => {
    if (e === '|') return '';
    return arr[i - 1] === '|' ? 1 : 0;
  })
  .join('');