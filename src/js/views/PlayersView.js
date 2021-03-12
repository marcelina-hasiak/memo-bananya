import escapeButton from "../../assets/img/btn-back.svg";
import refreshButton from "../../assets/img/btn-refresh.svg";

import {
  animateClickedButton,
  removeAnimationClasses,
  animatePlayerPanel,
} from "../animations";
import { deleteNodeBySelector } from "../auxiliaries";

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
        deleteNodeBySelector([".player-panel--js"]);
        const playerPanelContainer = this.createNodes();
        this.attachToContainer(containerSelector, playerPanelContainer);
        break;
      }
    }
  }

  createNodes() {
    const playerPanelContainer = this.createPlayerPanelContainer();
    this.createPlayerPanelController(playerPanelContainer);

    return playerPanelContainer;
  }

  createPlayerPanelContainer() {
    const playerPanelContainer = document.createElement("section");
    playerPanelContainer.classList.add(
      "player-panel",
      "player-panel--js",
      "fade-in"
    );
    playerPanelContainer.style.animationDelay = ".4s";
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
    btn.classList.add("btn-back", "btn-back--js", "player-panel__btn");
    btn.addEventListener("click", () => {
      animateClickedButton(btn);
      btn.onanimationend = () => {
        this.subscribers.onEscapeButtonEvent();
      };
    });

    const btnImage = document.createElement("img");
    btnImage.classList.add("full-size");
    btnImage.setAttribute("src", escapeButton);

    btn.appendChild(btnImage);

    return btn;
  }

  createRefreshButton() {
    const btn = document.createElement("button");
    btn.classList.add("btn-refresh", "btn-refresh--js", "player-panel__btn");
    btn.addEventListener("click", () => {
      removeAnimationClasses("remove from board");
      void btn.offsetWidth;
      animateClickedButton(btn);
      btn.onanimationend = () => {
        animatePlayerPanel();
        this.subscribers.onRefreshButtonEvent();
      };
    });
    const btnImage = document.createElement("img");
    btnImage.classList.add("full-size");
    btnImage.setAttribute("src", refreshButton);

    btn.appendChild(btnImage);

    return btn;
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
