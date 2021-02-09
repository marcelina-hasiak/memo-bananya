import BoardView from './BoardView'

class Board {
  constructor(board) {
    this.board = board
  }
  renderBoard() {
    this.boardView = new BoardView()
  }
}

export default Board