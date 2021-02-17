class BoardView {
  constructor(boardContainer, boardData) {
    this.prepareTheBoardField();
    this.renderBoard(boardContainer, boardData);
    this.subscribers = null;
    this.temporaryRevealedTilesState = {
      revealedTiles: [],
      isTilesAnimationFinished: true,
    };
  }

  prepareTheBoardField() {
    const appHeader = document.querySelector(".application__header--js");
    const appBody = document.querySelector(".application__body--js");
    const footerImages = document.querySelector(".footer__images--js");
    const nodesToHide = [appHeader, appBody, footerImages];
    nodesToHide.forEach((node) => node.classList.add("remove"));

    const board = document.querySelector(".board--js");
    if (board) {
      board.remove();
    }
  }

  renderBoard(boardContainer, boardData) {
    const root = this.createRoot();
    this.createTiles(root, boardData);
    this.attachToContainer(boardContainer, root);
  }

  createRoot() {
    const root = document.createElement("section");
    root.classList.add("board", "board--js");
    root.addEventListener("click", this.handleTileRevealing);
    return root;
  }

  createTiles(root, boardData) {
    boardData.forEach((tile) => {
      root.append(this.createTile(tile));
    });
  }

  createTile({ srcImage, tileId }) {
    const tile = document.createElement("div");
    tile.classList.add("board__tile-container");
    tile.setAttribute("data-id", `${tileId}`);

    const tileBack = document.createElement("div");
    tileBack.classList.add("board__tile", "board__tile--back");

    const tileFront = document.createElement("div");
    tileFront.classList.add("board__tile", "board__tile--front");
    tileFront.style.backgroundImage = `url(${srcImage})`;

    tile.append(tileBack);
    tile.append(tileFront);

    return tile;
  }

  handleTileRevealing = (event) => {
    if (this.temporaryRevealedTilesState.isTilesAnimationFinished) {
      let { revealedTiles } = this.temporaryRevealedTilesState;
      this.revealTile(event.target, revealedTiles);

      if (revealedTiles.length === 2) {
        this.temporaryRevealedTilesState.isTilesAnimationFinished = false;

        const isPair = this.subscribers.checkIfPair(revealedTiles);
        this.subscribers.updatePlayerStats(isPair);

        setTimeout(() => {
          if (isPair) {
            revealedTiles.forEach((tile) => this.fadeOutAnimation(tile));
          } else {
            revealedTiles.forEach((tile) =>
              tile.classList.remove("is-flipped")
            );

            this.subscribers.onRevealedTilesAnimationEnd();
          }
          revealedTiles.length = 0;
          this.temporaryRevealedTilesState.isTilesAnimationFinished = true;
        }, 1000);
      }
    }
  };

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
    const isTileAlreadyRevealed = isTile
      ? tile.classList.contains("is-flipped")
      : false;
    return isTile && !isTileAlreadyRevealed;
  }

  fadeOutAnimation(tile) {
    const fadeOutAnimation = tile.animate({ opacity: [1, 0] }, 500);
    fadeOutAnimation.onfinish = () => {
      Array.from(tile.children).forEach((child) => child.remove());
    };
  }

  attachToContainer(container, root) {
    document.querySelector(container).prepend(root);
  }

  subscribe(subscribers) {
    this.subscribers = subscribers;
  }
}

export default BoardView;
