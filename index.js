export const isPalindrome = (string) => {
  if (string.length < 2) {
    return true;
  }
  const last = string.length - 1;
  return string[0] !== string[last] ? false : isPalindrome(string.substring(1, last));
}; // recursive
export const isPalindromeBuilt = (string) => (string.split('').reverse().join('') === string); // built-in functions



export const apply = (n, fn, arg) => {
  if (n === 0) {
    return arg;
  }
  return n < 2 ? fn(arg) : apply(n - 1, fn, fn(arg));
}; // invoke function n times

export const flip = (fn) => (a, b) => fn(b, a); // flip arguments of the function

export const magic = (...a) => {
  const sum = (arr) => arr.reduce((acc, item) => acc + item, 0);

  const inner = (...args) => magic(sum(args) + sum(a));

  inner.valueOf = () => sum(a);

  return inner;
}; // sum infinite number of parameters and infinite number of curry

export class PseudoRandom {
  constructor(seed){
    this.seed = seed;
    this.init = seed;
  }
  getNext(a = 45, c = 21, m = 67) {
    return this.seed = (a * this.seed + c) % m;
    
  }
    
  reset() {
    this.seed = this.init
  }
} // LCPRNG 
export const isValid = (s) => {
    
  const open = ['(','{','['];
  const close = [')','}',']'];
  const stack = [];
  
  for(let i = 0; i < s.length; i += 1) {
      if(open.includes(s[i])) {
          stack.push(s[i])
      }
      if(close.includes(s[i])) {
          if(close.indexOf(s[i]) !== open.indexOf(stack[stack.length - 1])) {
              return false
          } else {
            stack.pop()
          }
      }
  }
  return stack.length === 0
};
