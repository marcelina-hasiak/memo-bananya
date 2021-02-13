import Player from './Player'
import PlayersView from './PlayersView'

class PlayersController {
  constructor(playersNumber) {
    this.getPlayers(playersNumber)
    this.subscribersToEscapeButtonEvent = [] 
    this.subscribersToRefreshBoardEvent = []
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