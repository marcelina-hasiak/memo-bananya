import BoardView from './BoardView'

class Board {
  constructor(board) {
    this.initialBoard = board 
  }
  renderBoard() {
    this.shuffleTiles()
    this.boardView = new BoardView('.application', this.shuffledBoard)
  }
  shuffleTiles() {
    const shuffledBoard = [...this.initialBoard]
    for (let i = shuffledBoard.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = shuffledBoard[i];
      shuffledBoard[i] = shuffledBoard[j];
      shuffledBoard[j] = temp;
    }
    this.shuffledBoard = shuffledBoard
  }
}

export default Board