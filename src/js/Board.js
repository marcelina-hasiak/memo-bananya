import BoardView from "./BoardView";

class Board {
  constructor(board) {
    this.initialBoard = board;
    this.boardView = null;
    this.shuffledBoard = null;
    this.subscribers = null;
  }

  renderBoard() {
    this.shuffleTiles();
    this.boardView = new BoardView(".application", this.shuffledBoard);
    this.boardView.subscribe({
      checkIfPair: (tiles) => this.checkIfPair(tiles),
      updatePlayerStats: (isPair) => this.updatePlayerStats(isPair),
      onRevealedTilesAnimationEnd: () => this.onRevealedTilesAnimationEnd(),
    });
  }

  shuffleTiles() {
    const shuffledBoard = [...this.initialBoard];
    for (let i = shuffledBoard.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = shuffledBoard[i];
      shuffledBoard[i] = shuffledBoard[j];
      shuffledBoard[j] = temp;
    }
    this.shuffledBoard = shuffledBoard;
  }

  checkIfPair([revealedTile1, revealedTile2]) {
    const tile1 = this.findTile(revealedTile1);
    const tile2 = this.findTile(revealedTile2);
    const isPair = tile1.isPair(tile2);
    if (isPair) {
      this.deletePairedTilesFromBoard([tile1, tile2]);
    }
    return isPair;
  }

  findTile(revealedTile) {
    return this.shuffledBoard.find(
      (tile) => tile.tileId === revealedTile.dataset.id
    );
  }

  deletePairedTilesFromBoard(tiles) {
    tiles.forEach((tile) => {
      const indexToDelete = this.shuffledBoard.indexOf(tile);
      this.shuffledBoard.splice(indexToDelete, 1);
    });
  }
  updatePlayerStats(isPair) {
    this.subscribers.updatePlayerStats(isPair);
  }

  onRevealedTilesAnimationEnd() {
    this.subscribers.changeToNextPlayer();
    this.checkIsWinner();
  }

  checkIsWinner() {
    if (this.shuffledBoard.length === 0) {
      console.log("is winner");
    }
  }
  subscribe(subscribers) {
    this.subscribers = subscribers;
  }
}

export default Board;
