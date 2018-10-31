import React from "react";

function clickHandler({ board, onChange, rowIndex, colIndex }) {
  const value = board[rowIndex][colIndex];
  if (!value) {
    onChange(rowIndex, colIndex);
  }
}
function renderCell({ board, onChange, rowIndex, colIndex }) {
  const value = board[rowIndex][colIndex];
  const onclick = clickHandler.bind(null, {
    board,
    onChange,
    rowIndex,
    colIndex
  });
  return <td onClick={onclick}>{value}</td>;
}
function renderRow({ board, onChange, rowIndex }) {
  const cells = [];
  for (let index = 0; index < 3; index++) {
    cells.push(renderCell({ board, onChange, rowIndex, colIndex: index }));
  }
  return <tr>{cells}</tr>;
}

export default function Board({ board, onChange }) {
  const rows = [];
  for (let index = 0; index < 3; index++) {
    rows.push(renderRow({ board, onChange, rowIndex: index }));
  }
  return <table>{rows}</table>;
}
