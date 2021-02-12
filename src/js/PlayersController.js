import Player from './Player'
import PlayersView from './PlayersView'

class PlayersController {
  constructor(playersNumber) {
    this.getPlayers(playersNumber)
    this.subscribers = [] 
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
    this.playersView.subscribeToPreviousView(() => {
      this.func()
    })
  }
  func() {
    console.log('plcontrol', this.subscribers)
    this.subscribers.forEach(subscribe => subscribe())
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }
}

export default PlayersController;