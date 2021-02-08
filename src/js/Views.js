import LevelView from './LevelView'
import PlayersNumberView from './PlayersNumberView'
import PlayersNamesView from './PlayersNamesView'

class Views {
  constructor() {
  }
  getLevelView() {
    return new LevelView('.settings--js', '.settings__title--js')
  }
  getPlayersNumberView() {
    return new PlayersNumberView('.settings__title--js')
  }
  getPlayersNamesView(playersNumber) {
    return new PlayersNamesView('.settings__title--js', playersNumber) 
  }
}

export default Views