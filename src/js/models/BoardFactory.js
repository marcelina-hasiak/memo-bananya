import Board from "../controllers/Board";
import Tile from "../models/Tile";

class BoardFactory {
  getBoard(level) {
    switch (level) {
      case "easy":
        return new Board(this.createBoard(10));
      case "medium":
        return new Board(this.createBoard(30));
      case "hard":
        return new Board(this.createBoard(40));
    }
  }

  createBoard(tilesNumber) {
    const board = new Array(tilesNumber / 2).fill(null);
    const finalBoard = board
      .map((tile, index) => [new Tile(index + 1), new Tile(index + 1)])
      .flat();
    return finalBoard;
  }
}

export default BoardFactory;
