class PlayersView {
  constructor(containerSelector, typeOfRender) {
    this.render(containerSelector, typeOfRender);
    this.subscribers = null;
  }

  render(containerSelector, typeOfRender) {
    switch (typeOfRender) {
      case "first render": {
        const playerPanelContainer = this.createNodes();
        this.attachToContainer(containerSelector, playerPanelContainer);
        break;
      }
      case "render from endgame": {
        this.deleteNodeBySelector([".player-panel--js"])
        const playerPanelContainer = this.createNodes()
        this.attachToContainer(containerSelector, playerPanelContainer);
        break;
      }
    }
  }

  createNodes() {
    const playerPanelContainer = this.createPlayerPanelContainer();
    this.createPlayerPanelController(playerPanelContainer);

    return playerPanelContainer
  }

  createPlayerPanelContainer() {
    const playerPanelContainer = document.createElement("section");
    playerPanelContainer.classList.add("player-panel", "player-panel--js");

    return playerPanelContainer;
  }

  createPlayerPanelController(playerPanelContainer) {
    playerPanelContainer.append(this.createEscapeButton());
    playerPanelContainer.append(this.createPlayerStats());
    playerPanelContainer.append(this.createRefreshButton());
  }

  createPlayerStats() {
    const playerStatsContainer = document.createElement("div");
    playerStatsContainer.classList.add("player-panel__stats-wrapper");

    this.playerStatsActivePlayer = document.createElement("h2");
    this.playerStatsActivePlayer.classList.add("player-panel__active-player");

    this.playerStatsMoves = document.createElement("p");
    this.playerStatsMoves.classList.add(
      "player-panel__stats",
      "player-panel__stats--points-js"
    );

    this.playerStatsRevealedPairs = document.createElement("p");
    this.playerStatsRevealedPairs.classList.add(
      "player-panel__stats",
      "player-panel__stats--moves-js"
    );

    playerStatsContainer.append(
      this.playerStatsActivePlayer,
      this.playerStatsMoves,
      this.playerStatsRevealedPairs
    );

    return playerStatsContainer;
  }

  createEscapeButton() {
    const btn = document.createElement("button");
    btn.classList.add("btn-back", "btn-back--js");
    btn.addEventListener("click", () => this.subscribers.onEscapeButtonEvent());

    const btnImage = document.createElement("img");
    btnImage.classList.add("full-size");
    btnImage.setAttribute("src", `./src/assets/img/btn-back.svg`);

    btn.appendChild(btnImage);

    return btn;
  }

  createRefreshButton() {
    const btn = document.createElement("button");
    btn.classList.add("btn-refresh", "btn-refresh--js");
    btn.addEventListener("click", () => this.subscribers.onRefreshButtonEvent());

    const btnImage = document.createElement("img");
    btnImage.classList.add("full-size");
    btnImage.setAttribute("src", `./src/assets/img/btn-refresh.svg`);

    btn.appendChild(btnImage);

    return btn;
  }

  deleteNodeBySelector(selectors) {
    for (let i = 0; i < selectors.length; i++) {
      document.querySelector(selectors[i]).remove();
    }
  }

  updateStats(firstPlayerName, playerMoves, playerPoints) {
    this.updateName(firstPlayerName);
    this.updateMoves(playerMoves);
    this.updatePoints(playerPoints);
  }

  updateMoves(playerMoves = 0) {
    this.playerStatsMoves.textContent = `MOVES: ${playerMoves}`;
  }

  updatePoints(playerPoints = 0) {
    this.playerStatsRevealedPairs.textContent = `REVEALD PAIRS: ${playerPoints}`;
  }

  updateName(playerName) {
    this.playerStatsActivePlayer.textContent = `${playerName} MOVES NOW`;
  }

  attachToContainer(containerSelector, playerPanelContainer) {
    document.querySelector(containerSelector).append(playerPanelContainer);
  }

  subscribe(subscribers) {
    this.subscribers = subscribers;
  }
}
export default PlayersView;
