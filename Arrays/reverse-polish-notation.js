const operators = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
  };
export default (expression) => {
    const stack = [];
  
    expression.forEach((token) => {
      if (token in operators) {
        const [y, x] = [stack.pop(), stack.pop()];
  
        stack.push(operators[token](x, y));
      } else {
        stack.push(parseFloat(token));
      }
    });
  
    return stack[0] === Infinity ? null : stack.pop()
  };