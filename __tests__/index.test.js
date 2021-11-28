import {
  isPalindrome, apply, flip, magic, PseudoRandom, isValid
} from '../index';

test('isPalindrome', () => {
  expect(isPalindrome('a')).toBe(true);
  expect(isPalindrome('aa')).toBe(true);
  expect(isPalindrome('404')).toBe(true);
  expect(isPalindrome('abba')).toBe(true);
  expect(isPalindrome('radar')).toBe(true);
  expect(isPalindrome('absba')).toBe(true);
  expect(isPalindrome('aibohphobia')).toBe(true);

  expect(isPalindrome('abaoba')).toBe(false);
  expect(isPalindrome('aashgkhdj')).toBe(false);
  expect(isPalindrome('palindrome')).toBe(false);
  expect(isPalindrome('aibohapohobia')).toBe(false);
});

test('apply', () => {
  expect(apply(0, Math.sqrt, 4)).toBe(4);
  expect(apply(1, Math.sqrt, 4)).toBe(2);
  expect(apply(2, Math.sqrt, 16)).toBe(2);

  expect(apply(1, (v) => v ** 2, 3)).toBe(9);
  expect(apply(5, (v) => v + 10, 3)).toBe(53);
});
test('reverseSub', () => {
  const sub = (a, b) => a - b;
  const reverseSub = flip(sub);
  expect(reverseSub(1, 2)).toBe(1);
  expect(reverseSub(5, 3)).toBe(-2);
});

test('wop', () => {
  const wop = flip((a, b) => a ** b);
  expect(wop(1, 2)).toBe(2);
  expect(wop(3, 2)).toBe(8);
});

describe('magic', () => {
  it('calculate sum', () => {
    expect(magic() + 0).toBe(0);
    expect(magic() + 1).toBe(1);
    expect(magic(5, 2, -8) + 2).toBe(1);
    expect(magic(1, 2)(3, 4, 5)(6)(7, 10) - 8).toBe(30);
    expect(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7).toBe(20);
  });

  it('shouldn\'t have global state', () => {
    expect(magic() + 0).toBe(0);
    expect(magic() + 1).toBe(1);

    magic(4, 5);

    expect(magic(5, 2, -8) + 2).toBe(1);
    expect(magic(1, 2)(3, 4, 5)(6)(7, 10) - 8).toBe(30);
    expect(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7).toBe(20);

    magic(1, 3, 4);
    expect(magic(5) + 1).toBe(6);
  });

  it('shouldn\'t have shared state', () => {
    const func = magic(4, 5);

    expect(func(5) + 1).toBe(15);
    expect(func(5) + 1).toBe(15);
  });
});

test('getNext', () => {
  const seq = new PseudoRandom(100);
  const result1 = seq.getNext();
  const result2 = seq.getNext();

  expect(result1).not.toBe(result2);

  const seq2 = new PseudoRandom(100);
  const result21 = seq2.getNext();
  const result22 = seq2.getNext();

  expect(result1).toBe(result21);
  expect(result2).toBe(result22);
});

test('reset', () => {
  const seq = new PseudoRandom(100);
  const result1 = seq.getNext();
  const result2 = seq.getNext();

  expect(result1).not.toBe(result2);

  seq.reset();

  const result21 = seq.getNext();
  const result22 = seq.getNext();

  expect(result1).toBe(result21);
  expect(result2).toBe(result22);
});

const correctParentheses = ['(())', '{}','[[]]'];
const incorrectParentheses = ['{{]', '[[[]]]][[[[]]]','{{{}}}}}}']

test.each(correctParentheses)('isValid: true', (item) => {
  expect(isValid(item)).toBe(true);
});
test.each(incorrectParentheses)('isValid: false', (item) => {
  expect(isValid(item)).toBe(false);
});




// node --experimental-vm-modules node_modules/jest/bin/jest.js
