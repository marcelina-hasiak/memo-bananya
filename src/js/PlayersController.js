import Player from './Player'
import PlayersView from './PlayersView'

class PlayersController {
  constructor(playersNumber, board) {
    this.getPlayers(playersNumber)
    this.subscribeToBoardEvents(board)
    this.subscribersToEscapeButtonEvent = [] 
    this.subscribersToRefreshBoardEvent = []
    this.activePlayer = null
  }
  getPlayers(playersNumber) {
    this.players = []
    for (let i = 0; i < playersNumber; i++) {
      this.players.push(new Player())
    }
  }
  setPlayersNames(names) {
    this.players.forEach((player, index) => player.setName(names[index]))
  }
  subscribeToBoardEvents(board) {
    board.subscribe(
      this.players.length < 2
      ? { updatePlayerStats: (isPair) => this.updateSinglePlayerStats(isPair) }
      : { updatePlayerStats: (isPair) => this.updateMultiPlayerStats(isPair) }
    )
  }

  updateSinglePlayerStats(isPair) {
    const firstPlayer = this.players[0]
    firstPlayer.setMoves()
    this.playersView.updateMoves(firstPlayer.playerMoves)
    if (isPair) {
      firstPlayer.setPoints()
      this.playersView.updatePoints(firstPlayer.playerPoints)
    }
  }

  updateMultiPlayerStats(isPair) {
    
  }
  //włożyć subscriberów w obiekt
  renderPlayers() {
    this.playersView = new PlayersView('.application', this.players)
    this.playersView.subscribeToEscapeButtonEvent(() => {
      this.handleEscapeButtonEvent()
    })
    this.playersView.subscribeToRefreshBoardEvent(() => {
      this.handleRefreshBoardEvent()
    })
  }
  handleEscapeButtonEvent() {
    this.subscribersToEscapeButtonEvent.forEach(subscribe => subscribe())
  }
  subscribeToEscapeButtonEvent(subscriber) {
    this.subscribersToEscapeButtonEvent.push(subscriber)
  }
  handleRefreshBoardEvent() {
    this.subscribersToRefreshBoardEvent.forEach(subscribe => subscribe())
  }
  subscribeToRefreshBoardEvent(subscriber) {
    this.subscribersToRefreshBoardEvent.push(subscriber)
  }
}

export default PlayersController;