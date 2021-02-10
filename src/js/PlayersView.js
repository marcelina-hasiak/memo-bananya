class PlayersView {
  constructor(playerPanelContainer, playersData) {
    const root = this.createRoot(playersData)
    this.attachToContainer(playerPanelContainer, root)
  }
  createRoot(playersData) {
    const root = document.createElement('section')
    root.classList.add('player-panel')
    root.append(this.createButton('btn-back'))
    //wynik funkcji getVieportWidth przypisać do zmiennej, by nie liczyć ponownie
    for (let i = 0; i < playersData.length; i++) {
      root.append(this.createPlayerStats(playersData[i]))
      if (!(this.getViewportWidth() > 768)) {
        break
      }
    }
    root.append(this.createButton('btn-refresh'))

    return root
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

  createButton(buttonType) {
    const btn = document.createElement('button');
    btn.classList.add(buttonType)

    const btnImage = document.createElement('img');
    btnImage.classList.add('full-size');
    btnImage.setAttribute('src', `./src/assets/img/${buttonType}.svg`);

    btn.appendChild(btnImage)
    return btn
  }

  //utilities
  getViewportWidth() {
    return window.innerWidth
  }
}
export default PlayersView