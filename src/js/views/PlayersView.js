class PlayersView {
  constructor(playerPanelContainer) {
    this.prepareTheBoardField()
    this.renderPlayerPanel(playerPanelContainer)
    this.subscribers = null
    this.subscribersToRefreshBoardEvent = []
    this.subscribersToEscapeButtonEvent = []
  }

  prepareTheBoardField() {
    const playerPanel = document.querySelector(".player-panel--js");
    if (playerPanel) {
      playerPanel.remove();
    }
  }

  renderPlayerPanel(playerPanelContainer) {
    const root = this.createRoot()
    this.createPlayerPanelController(root, )
    this.attachToContainer(playerPanelContainer, root)
  }

  createRoot() {
    const root = document.createElement('section')
    root.classList.add('player-panel', 'player-panel--js')
    return root
  }

  createPlayerPanelController(root) {
    root.append(this.createEscapeButton())
    root.append(this.createPlayerStats())
    root.append(this.createRefreshBoardButton())
  }

  createPlayerStats() {
    const playerStatsWrapper = document.createElement('div')
    playerStatsWrapper.classList.add('player-panel__stats-wrapper')

    this.playerStatsActivePlayer = document.createElement('h2')
    this.playerStatsActivePlayer.classList.add('player-panel__active-player')

    this.playerStatsMoves = document.createElement('p')
    this.playerStatsMoves.classList.add('player-panel__stats')

    this.playerStatsRevealedPairs = document.createElement('p')
    this.playerStatsRevealedPairs.classList.add('player-panel__stats')

    playerStatsWrapper.append(this.playerStatsActivePlayer)
    playerStatsWrapper.append(this.playerStatsMoves)
    playerStatsWrapper.append(this.playerStatsRevealedPairs)

    return playerStatsWrapper
  }

  updateStats(firstPlayerName, playerMoves, playerPoints) {
    this.updateName(firstPlayerName)
    this.updateMoves(playerMoves)
    this.updatePoints(playerPoints)
  }

  updateMoves(playerMoves = 0) {
    this.playerStatsMoves.textContent = `MOVES: ${playerMoves}`
  }

  updatePoints(playerPoints = 0) {
    this.playerStatsRevealedPairs.textContent = `REVEALD PAIRS: ${playerPoints}`
  }

  updateName(playerName) {
    this.playerStatsActivePlayer.textContent = `${playerName} MOVES NOW`
  }

  attachToContainer(container, root) {
    document.querySelector(container).prepend(root)
  }

  createEscapeButton() {
    const btn = document.createElement('button');
    btn.classList.add('btn-back')
    btn.addEventListener('click', () => this.subscribers.onEscapeButtonEvent())

    const btnImage = document.createElement('img');
    btnImage.classList.add('full-size');
    btnImage.setAttribute('src', `./src/assets/img/btn-back.svg`);

    btn.appendChild(btnImage)
    return btn
  }
  createRefreshBoardButton() {
    const btn = document.createElement('button');
    btn.classList.add('btn-refresh')
    btn.addEventListener('click', () => this.subscribers.onRefreshBoardEvent())

    const btnImage = document.createElement('img');
    btnImage.classList.add('full-size');
    btnImage.setAttribute('src', `./src/assets/img/btn-refresh.svg`);

    btn.appendChild(btnImage)
    return btn
  }

  subscribeToRefreshBoardEvent(subscriber) {
    this.subscribersToRefreshBoardEvent.push(subscriber)
  }

  subscribeToEscapeButtonEvent(subscriber) {
    this.subscribersToEscapeButtonEvent.push(subscriber)
  }
  subscribe(subscribers) {
    this.subscribers = subscribers;
  }
}
export default PlayersView