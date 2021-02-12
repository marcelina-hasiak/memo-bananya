class PlayersView {
  constructor(playerPanelContainer, playersData) {
    const root = this.createRoot(playersData)
    this.attachToContainer(playerPanelContainer, root)
    this.subscribers = []
    this.subscribersToPreviousView = []
  }
  createRoot(playersData) {
    const root = document.createElement('section')
    root.classList.add('player-panel', 'player-panel--js')
    this.createPlayerPanelController(root, playersData)
    return root
  }

  createPlayerPanelController(root, playersData) {
    root.append(this.createEscapeButton())
    for (let i = 0; i < playersData.length; i++) {
      root.append(this.createPlayerStats(playersData[i]))
      if (!(this.getViewportWidth() > 768)) {
        break
      }
    }
    root.append(this.createRefreshBoardButton())
  }

  attachToContainer(container, root) {
    document.querySelector(container).prepend(root)
  }

  createPlayerStats({playerName, playerMoves, playerPoints}) {
    const playerStatsWrapper = document.createElement('div')
    playerStatsWrapper.classList.add('player-panel__stats-wrapper')

    const playerStatsActivePlayer = document.createElement('h2')
    playerStatsActivePlayer.classList.add('player-panel__active-player')
    playerStatsActivePlayer.textContent = `${playerName} MOVES NOW`

    const playerStatsMoves = document.createElement('p')
    playerStatsMoves.classList.add('player-panel__stats')
    playerStatsMoves.textContent = `MOVES: ${playerMoves}`

    const playerStatsRevealedPairs = document.createElement('p')
    playerStatsRevealedPairs.classList.add('player-panel__stats')
    playerStatsRevealedPairs.textContent = `REVEALD PAIRS: ${playerPoints}`

    playerStatsWrapper.append(playerStatsActivePlayer)
    playerStatsWrapper.append(playerStatsMoves)
    playerStatsWrapper.append(playerStatsRevealedPairs)

    return playerStatsWrapper
  }

  createEscapeButton() {
    const btn = document.createElement('button');
    btn.classList.add('btn-back')
    btn.addEventListener('click', () => {
      console.log(this.subscribeToPreviousView, 'plview')
      this.subscribersToPreviousView.forEach(subscribe => subscribe())
    })
    const btnImage = document.createElement('img');
    btnImage.classList.add('full-size');
    btnImage.setAttribute('src', `./src/assets/img/btn-back.svg`);

    btn.appendChild(btnImage)
    return btn
  }
  createRefreshBoardButton() {
    const btn = document.createElement('button');
    btn.classList.add('btn-refresh')
    btn.addEventListener('click', () => {
      this.subscribers.forEach(subscribe => subscribe())
    })
    const btnImage = document.createElement('img');
    btnImage.classList.add('full-size');
    btnImage.setAttribute('src', `./src/assets/img/btn-refresh.svg`);

    btn.appendChild(btnImage)
    return btn
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }
  subscribeToPreviousView(subscriber) {
    this.subscribersToPreviousView.push(subscriber)
  }
  //utilities
  getViewportWidth() {
    return window.innerWidth
  }
}
export default PlayersView