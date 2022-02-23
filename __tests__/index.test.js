import {
  isPalindrome, apply, flip, magic, isValid, twoSum, maxSubArray, minimal,
} from '../index';
import  lastWordLength  from '../Arrays/last-word-length';
import  compareVersion  from '../Arrays/compare-semver';
import isContinuousSequence from '../Arrays/is-continuous-sequence';
import chunk from '../Arrays/chunk';
import calcInPolishNotation from '../Arrays/reverse-polish-notation';
import summaryRanges from '../Arrays/summary-ranges';
import Node from '../Object-oriented-Programming/binary-tree-search';
import { PseudoRandom } from '../Object-oriented-Programming/random-integer-generator';
import nrzi from '../Functions/NRZI';
import balancedStringSplit from '../leetcode/greedyAlgorithms/balancedStringSplit';

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

const correctParentheses = ['(())', '{}', '[[]]'];
const incorrectParentheses = ['{{]', '[[[]]]][[[[]]]', '{{{}}}}}}'];

test.each(correctParentheses)('isValid: true', (item) => {
  expect(isValid(item)).toBe(true);
});
test.each(incorrectParentheses)('isValid: false', (item) => {
  expect(isValid(item)).toBe(false);
});

test('twoSum', () => {
  const array = [2, 7, 11, 15];
  const target = 9;
  const result = [1, 0];

  expect(twoSum(array, target)).toEqual(result);
});
test('maxSubArray', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  expect(maxSubArray([1])).toEqual(1);
  expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
});
test('sum of two minimal numbers in array', () => {
  expect(minimal([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(-8);
  expect(minimal([1])).toEqual('small collection');
  expect(minimal([1, 2, 3, 4, 5])).toEqual(3);
  expect(minimal([5, 4, 3, 2, 1])).toEqual(3);
  expect(minimal([7, 7, 7, 7, 7, 0])).toEqual(7);
  expect(minimal([25, 32, 47, 1, 3, 0.2, 1])).toEqual(1.2);
  expect(minimal([25, 32, 47, 1, 3, 0.2, 1, 'string'])).toEqual(1.2);
});

test('lastWordLength', () => {
  expect(lastWordLength('sum of two minimal numbers in array')).toEqual(5);
  expect(lastWordLength('')).toEqual(0);
  expect(lastWordLength('sum sum   ')).toEqual(3);
});
test('CompareVersion', () => {
  expect(compareVersion('1.1.1','1.1.1')).toEqual(0);
  expect(compareVersion('1.1.0','1.1.1')).toEqual(-1);
  expect(compareVersion('1.2.0','1.1.12')).toEqual(1);
  expect(compareVersion('0.2.0','0.1.57')).toEqual(1);
});

describe('isContinuousSequence', () => {
  it('#should be false', () => {
    expect(isContinuousSequence([])).toBeFalsy();
    expect(isContinuousSequence([7])).toBeFalsy();
    expect(isContinuousSequence([5, 3, 2, 8])).toBeFalsy();
    expect(isContinuousSequence([10, 11, 12, 14, 15])).toBeFalsy();
    expect(isContinuousSequence([10, 11, 11, 12])).toBeFalsy();
    expect(isContinuousSequence([1, 3, 2, 4])).toBeFalsy();
  });

  it('#should be true', () => {
    expect(isContinuousSequence([0, 1, 2, 3])).toBeTruthy();
    expect(isContinuousSequence([-5, -4, -3])).toBeTruthy();
    expect(isContinuousSequence([10, 11, 12, 13])).toBeTruthy();
  });
});
describe('Chunk', () => {
  it('should works', () => {
    const result1 = chunk(['a', 'b', 'c', 'd'], 2);
    expect(result1).toEqual([['a', 'b'], ['c', 'd']]);

    const result2 = chunk(['a', 'b', 'c', 'd'], 3);
    expect(result2).toEqual([['a', 'b', 'c'], ['d']]);

    const result3 = chunk([], 4);
    expect(result3).toEqual([]);

    const result4 = chunk(['a'], 2);
    expect(result4).toEqual([['a']]);

    const result5 = chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2);
    expect(result5).toEqual([['a', 'b'], ['c', 'd'], ['e', 'f']]);
  });
});
test('reverse polish notation', () => {
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])).toBe(15);
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '/'])).toBe(4);
  expect(calcInPolishNotation([7, 2, 3, '*', '-'])).toBe(1);
  expect(calcInPolishNotation([1, 2, '+', 2, '*'])).toBe(6);
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 0, '/'])).toBe(null);
  expect(calcInPolishNotation([3, 0, '/', 2, '+'])).toBe(null);
  expect(calcInPolishNotation([7, 12, 2, '/', '-'])).toBe(1);
  expect(calcInPolishNotation([8, 6, 2, '-', '/'])).toBe(2);
});


test('compare version', () => {
  expect(summaryRanges([])).toEqual([]);
  expect(summaryRanges([1])).toEqual([]);
  expect(summaryRanges([1, 2, 3])).toEqual(['1->3']);
  expect(summaryRanges([8, 3, 1, 12, 2, 5])).toEqual([]);
  expect(summaryRanges([8, 3, 1, 2, 3])).toEqual(['1->3']);
  expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5']);
  expect(summaryRanges([1, 1, 3, 4, 5, -6, 8, 9, 10, 12, 14, 14])).toEqual(['3->5', '8->10']);
  expect(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5])).toEqual(['110->112', '-5->-4']);
});

describe('Binary tree', () => {
  test('getters', () => {
    const tree = new Node(9, new Node(4), new Node(17));

    expect(tree.getKey()).toBe(9);
    expect(tree.getLeft().getKey()).toBe(4);
    expect(tree.getRight().getKey()).toBe(17);
  });

  test('empty tree', () => {
    const tree = new Node();

    expect(tree.getKey()).toBeNull();
    expect(tree.getLeft()).toBeNull();
    expect(tree.getRight()).toBeNull();
  });

  test('search', () => {
    const expected1 = new Node(5);
    const expected2 = new Node(22, new Node(20), null);
    const tree = new Node(9,
      new Node(4,
        new Node(3),
        new Node(6,
          expected1,
          new Node(7))),
      new Node(17,
        null,
        expected2));

    expect(tree.search(5)).toBe(expected1);
    expect(tree.search(22)).toBe(expected2);
    expect(tree.search(35)).toBeNull();
    expect(tree.search(2)).toBeNull();
  });

  test('search algorithm', () => {
    const tree = new Node(9,
      new Node(4,
        new Node(6,
          new Node(5),
          new Node(7)),
        new Node(3)),
      new Node(17,
        null,
        new Node(22,
          null,
          new Node(20))));

    expect(tree.search(5)).toBeNull();
    expect(tree.search(7)).toBeNull();
    expect(tree.search(6)).toBeNull();
    expect(tree.search(4).getKey()).toBe(4);
    expect(tree.search(22).getKey()).toBe(22);
  });
});

describe('NRZI', () => {
  it('test econding transmission empty', () => {
    const result = nrzi('');
    expect(result).toEqual('');
  });

  it('test econding transmission first signal invalid', () => {
    const result = nrzi('|');
    expect(result).toEqual('');
  });

  it('test encoding', () => {
    const result = nrzi('¯|__|¯|___|¯¯');
    expect(result).toEqual('010110010');

    const result2 = nrzi('_|¯¯¯|_|¯¯¯¯|_|¯¯');
    expect(result2).toEqual('010011000110');

    const result3 = nrzi('¯|___|¯¯¯¯¯|___|¯|_|¯');
    expect(result3).toEqual('010010000100111');

    const result4 = nrzi('|¯|___|¯¯¯¯¯|___|¯|_|¯');
    expect(result4).toEqual('110010000100111');
  });
});

test('balancedStringSplit', () => {
  
  expect(balancedStringSplit("RLRRLLRLRL")).toBe(4);
  expect(balancedStringSplit("RLLLLRRRLR")).toBe(3);
  expect(balancedStringSplit("LLLLRRRR")).toBe(1);
  expect(balancedStringSplit("")).toBe(0);

});