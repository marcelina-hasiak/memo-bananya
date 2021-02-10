class PlayersView {
  constructor(playerPanelContainer) {
    const root = this.createRoot()
    this.attachToContainer(playerPanelContainer, root)
  }
  createRoot() {
    const root = document.createElement('section')
    root.classList.add('player-panel')

    root.append(this.createButton('btn-back'))
    root.append(this.createPlayerStats())
    root.append(this.createButton('btn-refresh'))

    return root
  }
  attachToContainer(container, root) {
    document.querySelector(container).prepend(root)
  }

  createPlayerStats() {
    const playerStatsWrapper = document.createElement('div')
    playerStatsWrapper.classList.add('player-panel__stats-wrapper')

    const playerStatsActivePlayer = document.createElement('h2')
    playerStatsActivePlayer.classList.add('player-panel__active-player')
    playerStatsActivePlayer.textContent = 'MARU MOVES NOW'

    const playerStatsMoves = document.createElement('p')
    playerStatsMoves.classList.add('player-panel__stats')
    playerStatsMoves.textContent = 'MOVES: 0'

    const playerStatsRevealdPairs = document.createElement('p')
    playerStatsRevealdPairs.classList.add('player-panel__stats')
    playerStatsRevealdPairs.textContent = 'REVEALD PAIRS: 0'

    playerStatsWrapper.append(playerStatsActivePlayer)
    playerStatsWrapper.append(playerStatsMoves)
    playerStatsWrapper.append(playerStatsRevealdPairs)

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
}
export default PlayersView