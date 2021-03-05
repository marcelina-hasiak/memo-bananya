class WinnerView {
  constructor(winnerStats, containerSelector) {
    this.render(winnerStats, containerSelector)
    this.subscribers = {};
  }

  render(winnerStats, containerSelector) {
    const escapeButton = document.querySelector('.btn-back--js') 
    const refreshButton = document.querySelector('.btn-refresh--js') 
    const container = document.querySelector(containerSelector)

    this.deleteNodeChildrenExeptLastOne(container)
    this.replaceEventListeners(escapeButton, 'onEscapeButtonEvent');
    this.replaceEventListeners(refreshButton, 'onRefreshButtonEvent');

    this.updateWinnerPanel(winnerStats)
    this.createWinnerCongrats(container)
    
  }

  deleteNodeChildrenExeptLastOne(node) {
    for (let i = node.children.length; i > 0; i--) {
      if (i === node.children.length) {
        continue;
      }
      node.children[i - 1].remove();
    }
  }

  replaceEventListeners(button, event) {
    const updatedButton = button.cloneNode(true);
    button.replaceWith(updatedButton);
    updatedButton.addEventListener("click", () => {
      this.subscribers[event]();
    });
  }

  updateWinnerPanel(winnerStats) {
    const winner = document.querySelector('.player-panel__active-player')
    winner.textContent = this.printWinner(winnerStats)

    const points = document.querySelector('.player-panel__stats--points-js')
    points.textContent = this.printPoints(winnerStats)

    const moves = document.querySelector('.player-panel__stats--moves-js')
    moves.textContent = this.printPoints(winnerStats)
  }

  printWinner(winnerStats) {
    const isDraw = winnerStats.length > 1
    const winer = winnerStats[0].playerName
    const winners = winnerStats.reduce((prevPlayer, currentPlayer) => `${prevPlayer.playerName} and ${currentPlayer.playerName}`)
    
    return isDraw ? `${winners} WIN !!!` : `${winer} WINS !!!`
  }

  printPoints(winnerStats) {
    const pointsCount = winnerStats[0].playerPoints
    return `WITH ${pointsCount} POINTS`
  }

  printMoves(winnerStats) {
    const movesCount = winnerStats[0].playerMoves
    return `IN ${movesCount} MOVES`
  }

  createWinnerCongrats(container) {
    const congratsContainer = document.createElement("section");
    congratsContainer.classList.add("game-over", "game-over--js");

    const congratsHeader = document.createElement("h2");
    congratsHeader.classList.add("game-over__congrats");

    const congratsHeaderImage = document.createElement("img");
    congratsHeaderImage.setAttribute("src", "./src/assets/img/congrats.svg");
    congratsHeaderImage.setAttribute("alt", "Congrats.");

    const congratsPoster = document.createElement("div");
    congratsPoster.classList.add("game-over__poster");

    congratsHeader.append(congratsHeaderImage)
    congratsContainer.append(congratsHeader, congratsPoster)

    this.attachToContainer(container, congratsContainer)
  }

  attachToContainer(container, congratsContainer) {
    container.prepend(congratsContainer);
  }

  subscribe(subscribers) {
    this.subscribers = { ...this.subscribers, ...subscribers };
  }
}

export default WinnerView