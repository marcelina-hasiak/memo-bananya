import { fadeOutAnimation } from "../animations";

import {
  deleteNodeChildrenExeptLastOne,
  deleteNodeBySelector,
} from "../auxiliaries";

class BoardView {
  constructor(typeOfRender, containerSelector, boardData, boardAttribute) {
    this.render(typeOfRender, containerSelector, boardData, boardAttribute);
    this.subscribers = null;
    this.temporaryRevealedTilesState = {
      revealedTiles: [],
      timeoutID: null,
    };
  }

  render(typeOfRender, containerSelector, boardData, boardAttribute) {
    const container = document.querySelector(containerSelector);
    switch (typeOfRender) {
      case "first render": {
        deleteNodeChildrenExeptLastOne(container);
        this.hideFooterImage();
        break;
      }
      case "render from board": {
        deleteNodeBySelector([".board--js"]);
        break;
      }
      case "render from endgame": {
        deleteNodeBySelector([".game-over--js"]);
        break;
      }
    }
    const board = this.createBoard(boardAttribute);
    this.createTiles(board, boardData);
    this.attachToContainer(container, board);
  }

  createBoard(boardAttribute) {
    const board = document.createElement("section");
    board.classList.add("board", "board--js", "fade-in");
    board.style.animationDelay = "0s";
    board.setAttribute("data-board", boardAttribute);
    board.addEventListener("click", this.handleTileRevealing);
    board.addEventListener("keydown", this.handleTileRevealing);

    return board;
  }

  createTiles(board, boardData) {
    boardData.forEach((tile) => {
      board.append(this.createTile(tile));
    });
  }

  createTile({ tileId, srcImage }) {
    const tile = document.createElement("div");
    tile.classList.add("board__tile-container");
    tile.setAttribute("data-id", `${tileId}`);
    tile.setAttribute("tabindex", `1`);

    const tileBack = document.createElement("div");
    tileBack.classList.add("board__tile", "board__tile--back");

    const tileFront = document.createElement("div");
    tileFront.classList.add("board__tile", "board__tile--front");
    tileFront.style.backgroundImage = `url(${srcImage})`;

    tile.append(tileBack, tileFront);

    return tile;
  }

  attachToContainer(container, board) {
    container.prepend(board);
  }

  hideFooterImage() {
    document.querySelector(".footer__images--js").classList.add("remove");
  }

  handleTileRevealing = (event) => {
    if (this.temporaryRevealedTilesState.timeoutID === null) {
      let { revealedTiles } = this.temporaryRevealedTilesState;
      this.revealTile(event.target, revealedTiles);

      if (revealedTiles.length === 2) {
        const isPair = this.subscribers.checkIsPair(revealedTiles);
        this.subscribers.updatePlayerStats(isPair);
        this.delayRevealing(isPair, revealedTiles, 1000);
      }
    }
  };

  delayRevealing(isPair, revealedTiles, delay) {
    this.temporaryRevealedTilesState.timeoutID = setTimeout(() => {
      if (isPair) {
        revealedTiles.forEach((tile) => {
          tile.classList.add("no-outline");
          const animation = fadeOutAnimation(tile);
          animation.onfinish = () => {
            Array.from(tile.children).forEach((child) => child.remove());
          };
        });
        this.subscribers.checkIsWinner();
      } else {
        revealedTiles.forEach((tile) => tile.classList.remove("is-flipped"));
        this.subscribers.changeToNextPlayer();
      }
      revealedTiles.length = 0;
      clearInterval(this.temporaryRevealedTilesState.timeoutID);
      this.temporaryRevealedTilesState.timeoutID = null;
    }, delay);
  }

  revealTile(target, revealedTiles) {
    const tile = target.closest(".board__tile-container");
    const canTileBeRevealed = this.canTileBeRevealed(tile);

    if (canTileBeRevealed) {
      tile.classList.add("is-flipped");
      revealedTiles.push(tile);
    }
  }

  canTileBeRevealed(tile) {
    const isTile = tile !== null;
    const isTileAlreadyRevealed = tile && tile.classList.contains("is-flipped");
    return isTile && !isTileAlreadyRevealed;
  }

  subscribe(subscribers) {
    this.subscribers = subscribers;
  }
}

export default BoardView;
