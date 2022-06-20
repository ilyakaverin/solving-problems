const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function checkWin(board) {
  const flat = board.flat();
  return WINNING_COMBINATIONS.some((combination) => combination.every((index) => {
    const first = flat[combination[0]];
    return flat[index] !== null && flat[index] === first;
  }));
}
class Easy {
  constructor() {
    this.currentStep = [0, 0];
  }

  move(board, step = this.currentStep) {
    const [row, column] = step;
    const copy = [...board];

    if (copy[row][column] === null) {
      copy[row][column] = 'o';
      this.currentStep = [row, column + 1];
      return copy;
    }
    this.currentStep = row === 3 ? [row - 3, column + 1] : [row + 1, column];
    return this.move(copy, this.currentStep);
  }
}

class Normal {
  constructor() {
    this.currentStep = [2, 0];
  }

  move(board, step = this.currentStep) {
    const [row, column] = step;
    const copy = [...board];

    if (copy[row][column] === null) {
      copy[row][column] = 'o';
      this.currentStep = [row, column + 1];
      return copy;
    }
    this.currentStep = column === 3 ? [row - 1, column - 3] : [row, column + 1];
    return this.move(copy, this.currentStep);
  }
}

class TicTacToe {
  constructor(aiDifficulty = 'easy') {
    const difficulty = {
      easy: () => new Easy(),
      normal: () => new Normal(),
    };
    this.board = [
      Array(3).fill(null),
      Array(3).fill(null),
      Array(3).fill(null),
    ];
    this.aiDifficulty = difficulty[aiDifficulty]();
  }

  go(...args) {
    const [row, column] = args;
    if (args.length > 0) {
        this.board[row][column] = 'x';
    } else {
      this.aiDifficulty.move(this.board);
    }
    return checkWin(this.board);
  }

}

export default TicTacToe;
