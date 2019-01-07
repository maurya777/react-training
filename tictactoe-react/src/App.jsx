import React from "react";
import Board from "./Board";

const winningCombinations = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],

  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],

  [[0, 0], [1, 1], [2, 2]],

  [[2, 0], [1, 1], [0, 2]]
];
function getNewBoard() {
  return [["", "", ""], ["", "", ""], ["", "", ""]];
}
function checkIsWinner(board, currentPlayer) {
  return winningCombinations.some(combination =>
    combination.every(([row, col]) => board[row][col] === currentPlayer)
  );
}
class App extends React.Component {
  state = {
    currentPlayer: "X",
    board: getNewBoard()
  };
  onChange = (row, col) => {
    const { isWinner, board, currentPlayer } = this.state;
    if (isWinner) {
      this.setState({
        board: getNewBoard(),
        isWinner: false,
        currentPlayer: "X"
      });
      return;
    }
    board[row][col] = currentPlayer;
    this.setState(
      {
        board: board
      },
      () => {
        const { board, currentPlayer } = this.state;
        if (checkIsWinner(board, currentPlayer)) {
          this.setState({
            isWinner: true
          });
        } else {
          this.setState({
            currentPlayer: currentPlayer === "X" ? "O" : "X"
          });
        }
      }
    );
  };

  render() {
    const { board, isWinner, currentPlayer } = this.state;
    return (
      <div>
        {isWinner ? (
          <div>{currentPlayer} won!</div>
        ) : (
          <div>Current Player: {currentPlayer}</div>
        )}
        <Board board={board} onChange={this.onChange} />
      </div>
    );
  }
}
export default App;
