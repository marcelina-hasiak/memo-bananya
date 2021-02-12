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
    this.board = boardFactory.getBoard(level)
  }
  getPlayersController(playersNumber) {
    const playersNumberParsed = this.parsePlayersNumber(playersNumber)
    this.playerController = new PlayersController(playersNumberParsed)
    this.playerController.subscribe(() => {
      this.getLevelView(false)
    })
  }

  setPlayersNames(names) {
    this.playerController.setPlayersNames(names)
  }

  getLevelView(firstGame = true) {
    
    const levelView = this.views.getLevelView(firstGame)
    levelView.subscribe((level) => {
      this.getCurrentBoard(level)
      this.getPlayersNumberView() 
    })
  }
  getPlayersNumberView() {
    const playersNumberView = this.views.getPlayersNumberView()
    playersNumberView.subscribe(playersNumber => {
      this.getPlayersController(playersNumber)
      this.getPlayersNameView(playersNumber) 
    })
  }
  getPlayersNameView(playersNumber) {
    const playersNumberParsed = this.parsePlayersNumber(playersNumber)
    const playersNamesView = this.views.getPlayersNamesView(playersNumberParsed)
    playersNamesView.subscribe(names => {
      this.setPlayersNames(names)
      this.getPlayersControllerView()
      this.getBoardView()
    })
  }

  setPlayersNames(names) {
    this.playerController.setPlayersNames(names)
  }

  getBoardView() {
    this.board.renderBoard()
  }
  getPlayersControllerView() {
    this.playerController.renderPlayers()
    //pass the handler
  }

  //utilities
  parsePlayersNumber(playersNumber) {
    return parseInt(playersNumber[0])
  }

}

export default GameController