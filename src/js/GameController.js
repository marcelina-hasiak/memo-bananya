import BoardFactory from './BoardFactory'
import PlayersController from './PlayersController'
import Views from './Views'

class GameController {
  constructor() {
    this.views = new Views()
    this.getLevelView()
  }
  getCurrentBoard(level) {
    const boardFactory = new BoardFactory()
    this.currentBoard = boardFactory.getBoard(level)
  }
  getPlayersController(playersNumber) {
    const playersNumberParsed = this.parsePlayersNumber(playersNumber)
    this.playerController = new PlayersController(playersNumberParsed)
  }

  getLevelView() {
    const levelView = this.views.getLevelView()
    levelView.subscribe((level) => {
      this.getCurrentBoard(level)
      this.getPlayersNumberView() 
    })
  }
  getPlayersNumberView() {
    const playersNumberView = this.views.getPlayersNumberView()
    playersNumberView.subscribe((playersNumber) => {
      this.getPlayersController(playersNumber) // return new PlayerController
      this.getPlayersNameView(playersNumber) 
    })
  }
  getPlayersNameView(playersNumber) {
    const playersNumberParsed = this.parsePlayersNumber(playersNumber)
    const playersNamesView = this.views.getPlayersNamesView(playersNumberParsed)
  }

  //utilities
  parsePlayersNumber(playersNumber) {
    return parseInt(playersNumber[0])
  }

}

export default GameController