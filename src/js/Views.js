import LevelView from './LevelView'
import PlayersNumberView from './PlayersNumberView'
import PlayersNamesView from './PlayersNamesView'

class Views {
  getLevelView(firstGame) {
    this.levelView = new LevelView(firstGame, '.application__body--js', '.settings__title--js')
    return this.levelView
  }
  getPlayersNumberView() {
    this.playersNumber = new PlayersNumberView('.settings__title--js')
    this.playersNumber.subscribeToPreviousView(() => {
      this.levelView.render(true, '.application__body--js', '.settings__title--js')
    })
    return this.playersNumber
  }
  getPlayersNamesView(playersNumber) {
    this.playersNamesView = new PlayersNamesView('.settings__title--js', playersNumber) 
    this.playersNamesView.subscribeToPreviousView(() => {
      this.playersNumber.render('.settings__title--js')
    })
    return this.playersNamesView
  }
}

export default Views