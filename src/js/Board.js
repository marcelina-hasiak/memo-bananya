import BoardView from './BoardView'

class Board {
  constructor(board) {
    this.board = board
  }
  renderBoard() {
    this.boardView = new BoardView('.application', this.board)
  }
}

export default Board