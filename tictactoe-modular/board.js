function Board(props = {}) {
  Component.call(this, props);
  this.props = props;
}
Board.prototype = Object.assign({}, Component.prototype);
Board.prototype.clickHandler = function(rowIndex, colIndex) {
  const value = this.props.board[rowIndex][colIndex];
  if (!value) {
    this.props.onChange(rowIndex, colIndex);
  }
};
Board.prototype.renderCell = function(rowIndex, colIndex) {
  const value = this.props.board[rowIndex][colIndex];
  const onclick = this.clickHandler.bind(this, rowIndex, colIndex);
  return createElement('td', { onclick }, value);
};
Board.prototype.renderRow = function(rowIndex) {
  const cells = [];
  for (let index = 0; index < 3; index++) {
    cells.push(this.renderCell(rowIndex, index));
  }
  return createElement('tr', null, cells);
};
Board.prototype.render = function() {
  const rows = [];
  for (let index = 0; index < 3; index++) {
    rows.push(this.renderRow(index));
  }
  return createElement('table', null, rows);
};