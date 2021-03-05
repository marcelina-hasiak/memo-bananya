import Player from "../models/Player";
import PlayersView from "../views/PlayersView";

class PlayersController {
  constructor(playersNumber, board) {
    this.players = this.getPlayers(playersNumber);
    this.activePlayer = this.players[0];
    this.subscribeToBoardEvents(board);
    this.subscribers = {};
  }

  getPlayers(playersNumber) {
    const players = [];
    for (let i = 0; i < playersNumber; i++) {
      players.push(new Player());
    }

    return players;
  }

  setPlayersNames(names) {
    this.players.forEach((player, index) => (player.playerName = names[index]));
  }

  renderPlayers(typeOfRender) {
    this.playersView = new PlayersView(".application--js", typeOfRender);
    this.playersView.updateStats(this.activePlayer.playerName);
    this.playersView.subscribe({
      onEscapeButtonEvent: () => this.onEscapeButtonEvent(),
      onRefreshButtonEvent: () => this.onRefreshButtonEvent(),
    });
  }

  subscribeToBoardEvents(board) {
    board.subscribe({
      changeToNextPlayer: () => this.changeToNextPlayer(),
      updatePlayerStats: (isPair) => this.updatePlayerStats(isPair),
    });
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

  updatePlayerStats(isPair) {
    this.activePlayer.addMoves();
    this.playersView.updateMoves(this.activePlayer.playerMoves);

    if (isPair) {
      this.activePlayer.addPoints();
      this.playersView.updatePoints(this.activePlayer.playerPoints);
    }
  }

  onEscapeButtonEvent() {
    this.subscribers.onEscapeButtonEvent();
  }

  onRefreshButtonEvent() {
    this.players.forEach((player) => {
      player.playerMoves = 0;
      player.playerPoints = 0;
    });
    this.activePlayer = this.players[0];
    this.playersView.updateStats(this.activePlayer.playerName);
    this.subscribers.onRefreshButtonEvent();
  }

  getWinnerStats() {
    const pointStats = [];
    this.players.forEach((player) => pointStats.push(player.playerPoints));

    const maxPoints = Math.max(...pointStats);

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
