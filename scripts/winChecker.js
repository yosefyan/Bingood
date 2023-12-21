import { theInterval, startGame } from "./index.js";

const isRowGreen = (board, row, gridSize) => {
  const rowCells = [];

  for (let i = 0; i < gridSize; i++) {
    rowCells.push(board.querySelector(`:nth-child(${row * gridSize + i + 1})`));
  }

  const allGreen = rowCells.every((cell) =>
    cell.classList.contains("bg-green-500/50")
  );

  return allGreen;
};
const isColumnGreen = (board, col, gridSize) => {
  const colCells = [];

  for (let i = 0; i < gridSize; i++) {
    colCells.push(board.querySelector(`:nth-child(${i * gridSize + col + 1})`));
  }
  const allGreen = colCells.every((cell) =>
    cell.classList.contains("bg-green-500/50")
  );

  return allGreen;
};

const isDiagonalGreen = (board, gridSize) => {
  const diaCells1 = [];
  const diaCells2 = [];

  for (let i = 0; i < gridSize; i++) {
    diaCells1.push(board.querySelector(`:nth-child(${i * gridSize + i + 1})`));
    diaCells2.push(
      board.querySelector(`:nth-child(${(gridSize - i) * (i + 1)})`)
    );
  }

  const allGreen1 = diaCells1.every((cell) =>
    cell.classList.contains("bg-green-500/50")
  );

  const allGreen2 = diaCells2.every((cell) =>
    cell.classList.contains("bg-green-500/50")
  );

  return allGreen1 || allGreen2;
};

const checkRowsAndColumnsForBoard = (board, gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    const isRowGreenResult = isRowGreen(board, i, gridSize);
    const isColumnGreenResult = isColumnGreen(board, i, gridSize);
    const isDiagonalGreenResult = isDiagonalGreen(board, gridSize);

    if (isRowGreenResult || isColumnGreenResult || isDiagonalGreenResult) {
      clearInterval(theInterval);
      startGame(false);
    }
  }
};

export default checkRowsAndColumnsForBoard;
