export default (str) => {
  const words = str.trim().split(' ');
  const lastWord = words[words.length - 1];
  return lastWord.length;
};
