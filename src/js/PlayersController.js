import Player from './Player'
import PlayersView from './PlayersView'

class PlayersController {
  constructor(playersNumber) {
    this.playersNumber = playersNumber;
    this.getPlayers()
  }
  getPlayers() {
    this.players = []
    for (let i = 0; i < this.playersNumber; i++) {
      this.players.push(new Player())
    }
  }
  setPlayersNames(names) {
    this.players.forEach((player, index) => player.setName(names[index]))
  }
  renderPlayers() {
    this.playersView = new PlayersView('.application')
  }
}

export default PlayersController;