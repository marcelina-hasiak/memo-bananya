import Board from "../controllers/Board";
import Tile from "../models/Tile";

import tile1 from "../../assets/img/tiles/tile-1.png";
import tile2 from "../../assets/img/tiles/tile-2.png";
import tile3 from "../../assets/img/tiles/tile-3.png";
import tile4 from "../../assets/img/tiles/tile-4.png";
import tile5 from "../../assets/img/tiles/tile-5.png";
import tile6 from "../../assets/img/tiles/tile-6.png";
import tile7 from "../../assets/img/tiles/tile-7.png";
import tile8 from "../../assets/img/tiles/tile-8.png";
import tile9 from "../../assets/img/tiles/tile-9.png";
import tile10 from "../../assets/img/tiles/tile-10.png";
import tile11 from "../../assets/img/tiles/tile-11.png";
import tile12 from "../../assets/img/tiles/tile-12.png";
import tile13 from "../../assets/img/tiles/tile-13.png";
import tile14 from "../../assets/img/tiles/tile-14.png";
import tile15 from "../../assets/img/tiles/tile-15.png";
import tile16 from "../../assets/img/tiles/tile-16.png";
import tile17 from "../../assets/img/tiles/tile-17.png";
import tile18 from "../../assets/img/tiles/tile-18.png";
import tile19 from "../../assets/img/tiles/tile-19.png";
import tile20 from "../../assets/img/tiles/tile-20.png";

import { shuffleArray } from "../auxiliaries.js";

const imports = [
  tile1,
  tile2,
  tile3,
  tile4,
  tile5,
  tile6,
  tile7,
  tile8,
  tile9,
  tile10,
  tile11,
  tile12,
  tile13,
  tile14,
  tile15,
  tile16,
  tile17,
  tile18,
  tile19,
  tile20,
];

class BoardFactory {
  getBoard(level) {
    switch (level) {
      case "easy":
        return new Board(this.createBoardData(20), level);
      case "medium":
        return new Board(this.createBoardData(30), level);
      case "hard":
        return new Board(this.createBoardData(40), level);
    }
  }

  createBoardData(tilesNumber) {
    const board = new Array(tilesNumber / 2).fill(null);
    const imagesSources = shuffleArray(imports);
    const finalBoard = board
      .map((tile, index) => [
        new Tile(index + 1, imagesSources[index]),
        new Tile(index + 1, imagesSources[index]),
      ])
      .flat();
    return finalBoard;
  }
}

export default BoardFactory;
