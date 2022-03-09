export const isPalindrome = (string) => {
  if (string.length < 2) {
    return true;
  }
  const last = string.length - 1;
  return string[0] !== string[last]
    ? false
    : isPalindrome(string.substring(1, last));
}; // recursive
export const isPalindromeBuilt = (string) =>
  string.split("").reverse().join("") === string; // built-in functions

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
  constructor(seed) {
    this.seed = seed;
    this.init = seed;
  }
  getNext(a = 45, c = 21, m = 67) {
    return (this.seed = (a * this.seed + c) % m);
  }

  reset() {
    this.seed = this.init;
  }
} // LCPRNG

export const isValid = (s) => {
  const open = ["(", "{", "["];
  const close = [")", "}", "]"];
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (open.includes(s[i])) {
      stack.push(s[i]);
    }
    if (close.includes(s[i])) {
      if (close.indexOf(s[i]) !== open.indexOf(stack[stack.length - 1])) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}; // valid parentheses

export const twoSum = (array, target) => {
  const map = {};
  const result = [];
  array.map((num, index) => {
    map[target - num] >= 0
      ? result.push(index, map[target - num])
      : (map[num] = index);
  });
  return result;
};
export const maxSubArray = (nums) => {
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
}; // Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Redux implementation

const initialState = {
  count: 0,
  name: "ilya kaverin",
};

//reducer
const updateState = (state, action) => {
  if (action.type === "plus") {
    return {
      ...state,
      count: state.count + action.amount,
    };
  } else if (action.type === "minus") {
    return {
      ...state,
      count: state.count - action.amount,
    };
  } else {
    return state;
  }
};
class Store {
  constructor(updateState, state) {
    this.updateState = updateState;
    this.state = state;
    this.callbacks = [];
  }
  getState() {
    return this.state;
  }
  dispatch = (action) => {
    this.state = this.updateState(this.state, action);
    this.callbacks.forEach((cb) => cb());
  };
  subscribe(callback) {
    this.callbacks.push(callback);
  }
}

const store = new Store(updateState, initialState);
const { dispatch } = store;
store.subscribe(() => console.log(store.getState()));

// actions
const plusAction = (amount) => ({ type: "plus", amount });
const minusAction = (amount) => ({ type: "minus", amount });

const partialApply =
  (action, dispatch) =>
  (...args) => {
    dispatch(action(...args));
  };

const plus = partialApply(plusAction, dispatch);
const minus = partialApply(minusAction, dispatch);

// sum of two minimal numbers in array, O(n) complexity

export const minimal = (array) => {
  if (array.length < 2) {
    return "small collection";
  }
  let min = array[0];
  let min2 = array[1];

  for (let i = 2; i < array.length; i += 1) {
    if (array[i] < min) {
      min2 = min;
      min = array[i];
    } else if (array[i] < min2) {
      min2 = array[i];
    }
  }
  return min + min2;
};
export const serializeOrder = (array) => {
  let result = [];
  let tail = array[0];
  let head;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] - array[i + 1] === -1) {
      head = array[i];
    } else {
      head = array[i];
      if (tail !== head) {
        result.push(`${tail}-${head}`);
      } else {
        result.push(tail);
      }
      tail = array[i + 1];
    }
  }
  return result;
}; // fora soft problem
