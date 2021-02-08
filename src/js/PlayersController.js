import Player from './Player'

class PlayersController {
  constructor(playersNumber) {
    this.playersNumber = playersNumber;
    this.players = []
    this.getPlayers()
  }
  getPlayers() {
    for (let i = 0; i < this.playersNumber; i++) {
      this.players.push(new Player())
    }
  }
}

export default PlayersController;