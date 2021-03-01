import Player from "../models/Player";
import PlayersView from "../views/PlayersView";

class PlayersController {
  constructor(playersNumber, board) {
    this.players = [];
    this.getPlayers(playersNumber);
    this.subscribeToBoardEvents(board);
    this.subscribers = {}
  }

  getPlayers(playersNumber) {
    for (let i = 0; i < playersNumber; i++) {
      this.players.push(new Player());
    }
    this.activePlayer = this.players[0];
  }

  setPlayersNames(names) {
    this.players.forEach((player, index) => (player.playerName = names[index]));
  }

  renderPlayers() {
    this.playersView = new PlayersView(".application");
    this.playersView.updateStats(this.activePlayer.playerName);
    this.playersView.subscribe({
      onEscapeButtonEvent: () => this.onEscapeButtonEvent(),
      onRefreshBoardEvent: () => this.onRefreshBoardEvent(),
    });
  }

  subscribeToBoardEvents(board) {
    board.subscribe({
      changeToNextPlayer: () => this.changeToNextPlayer(),
      updatePlayerStats: (isPair) => this.updatePlayerStats(isPair),
    });
  }

  updatePlayerStats(isPair) {
    this.activePlayer.addMoves();
    this.playersView.updateMoves(this.activePlayer.playerMoves);
    if (isPair) {
      this.activePlayer.addPoints();
      this.playersView.updatePoints(this.activePlayer.playerPoints);
    }
  }

  changeToNextPlayer() {
    if (this.players.length > 1) {
      const activePlayerIndex = this.players.indexOf(this.activePlayer);
      this.activePlayer =
        activePlayerIndex === this.players.length - 1
          ? (this.activePlayer = this.players[0])
          : (this.activePlayer = this.players[activePlayerIndex + 1]);

      this.playersView.updateStats(
        this.activePlayer.playerName,
        this.activePlayer.playerMoves,
        this.activePlayer.playerPoints
      );
    }
  }

  onEscapeButtonEvent() {
    this.subscribers.onEscapeButtonEvent();
  }

  onRefreshBoardEvent() {
    this.players.forEach((player) => {
      player.playerMoves = 0;
      player.playerPoints = 0;
    });
    this.activePlayer = this.players[0];
    this.renderPlayers();
    this.subscribers.onRefreshBoardEvent();
  }

  getWinnerStats() {
    const pointStats = [];
    this.players.forEach((player) => pointStats.push(player.playerPoints));

    const maxPoints = pointStats.reduce((prev, curr) => {
      return Math.max(prev, curr);
    });

    const winners = this.players.filter(
      (player) => player.playerPoints === maxPoints
    );
    return winners;
  }

  subscribe(subscribers) {
    this.subscribers = { ...this.subscribers, ...subscribers };
  }
}

export default PlayersController;
