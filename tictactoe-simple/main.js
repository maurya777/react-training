let currentPlayer = 'X';
let board;
const winningCombinations = [
  [[0,0], [0,1], [0,2]],
  [[1,0], [1,1], [1,2]],
  [[2,0], [2,1], [2,2]],

  [[0,0], [1,0], [2,0]],
  [[0,1], [1,1], [2,1]],
  [[0,2], [1,2], [2,2]],

  [[0,0], [1,1], [2,2]],

  [[2,0], [1,1], [0,2]]
];

function getNewBoard() {
  return [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
}

function checkWinner() {
  for (let index = 0; index < winningCombinations.length; index++) {
    const combination = winningCombinations[index];
    const isWinning = combination.every(function (pair) {
      const [row, col] = pair;
      return board[row][col] === currentPlayer;
    })
    if (isWinning) {
      alert(`${currentPlayer} won!`);
      init();
      return;
    }
  }
}

function handleClick(e, row, cell) {
  board[row][cell] = currentPlayer;
  e.target.innerHTML = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function init() {
  board = getNewBoard();
  document.getElementById('app').innerHTML =
  `<table>
    ${
      board.map((row, rowIndex)=>`<tr>
        ${
          row.map((cell, cellIndex) => `<td onClick="handleClick(event, ${rowIndex}, ${cellIndex})">${cell}</td>`).join('')
        }  
      </tr>`).join('')
    }
  </table>`;
}
init();