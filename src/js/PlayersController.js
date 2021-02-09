import Player from './Player'

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
}

export default PlayersController;