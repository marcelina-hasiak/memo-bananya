import BoardView from "../views/BoardView";
import { shuffleArray } from "../auxiliaries.js";

class Board {
  constructor(board) {
    this.initialBoard = board;
    this.boardView = null;
    this.shuffledBoard = null;
    this.subscribers = {};
  }

  renderBoard(typeOfRender) {
    this.stopCoveringTilesAnimation();
    this.shuffledBoard = shuffleArray(this.initialBoard);

    this.boardView = new BoardView(
      typeOfRender,
      ".application--js",
      this.shuffledBoard
    );
    this.boardView.subscribe({
      checkIsPair: (tiles) => this.checkIsPair(tiles),
      updatePlayerStats: (isPair) => this.updatePlayerStats(isPair),
      changeToNextPlayer: () => this.changeToNextPlayer(),
      checkIsWinner: () => this.checkIsWinner(),
    });
  }

  stopCoveringTilesAnimation() {
    if (
      this.boardView &&
      this.boardView.temporaryRevealedTilesState.timeoutID
    ) {
      clearInterval(this.boardView.temporaryRevealedTilesState.timeoutID);
    }
  }

  checkIsPair([revealedTile1, revealedTile2]) {
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

  changeToNextPlayer() {
    this.subscribers.changeToNextPlayer();
  }

  checkIsWinner() {
    if (this.shuffledBoard.length === 0) {
      this.subscribers.onGameOver();
    }
  }

  subscribe(subscribers) {
    this.subscribers = { ...this.subscribers, ...subscribers };
  }
}

export default Board;
