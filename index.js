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
    const isWinning = combination.every(function(pair){
      const [row, col] = pair;
      return board[row][col] === currentPlayer;
    })
    if (isWinning) {
      alert(`${currentPlayer} won!`);
      board = getNewBoard();
      return;
    }
  }
}
function onChange(row, col) {
  board[row][col]=currentPlayer;
  renderDOM(document.getElementById('app'), Board, { board, onChange });  
  setTimeout(function(){
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }, 1);
}
let currentPlayer = 'X';
let board = getNewBoard();
renderDOM(document.getElementById('app'), Board, { board, onChange });