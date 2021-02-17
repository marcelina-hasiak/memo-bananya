import Player from "./Player";
import PlayersView from "./PlayersView";

class PlayersController {
  constructor(playersNumber, board) {
    this.players = [];
    this.getPlayers(playersNumber);
    this.subscribeToBoardEvents(board);
    this.subscribersToEscapeButtonEvent = [];
    this.subscribersToRefreshBoardEvent = [];
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
      this.activePlayer =
        this.activePlayer === this.players[0]
          ? this.players[1]
          : this.players[0];
      this.playersView.updateStats(
        this.activePlayer.playerName,
        this.activePlayer.playerMoves,
        this.activePlayer.playerPoints
      );
    }
  }
  //włożyć subscriberów w obiekt
  renderPlayers() {
    this.playersView = new PlayersView(".application");
    this.playersView.updateStats(this.activePlayer.playerName);
    this.playersView.subscribe({
      onEscapeButtonEvent: () => this.onEscapeButtonEvent(),
      onRefreshBoardEvent: () => this.onRefreshBoardEvent(),
    });
  }

  onEscapeButtonEvent() {
    this.subscribersToEscapeButtonEvent.forEach((subscribe) => subscribe());
  }

  onRefreshBoardEvent() {
    this.players.forEach((player) => {
      player.playerMoves = 0;
      player.playerPoints = 0;
    });
    this.activePlayer = this.players[0];
    this.playersView.updateStats(this.activePlayer.playerName);
    this.subscribersToRefreshBoardEvent.forEach((subscribe) => subscribe());
  }

  subscribeToEscapeButtonEvent(subscriber) {
    this.subscribersToEscapeButtonEvent.push(subscriber);
  }

  subscribeToRefreshBoardEvent(subscriber) {
    this.subscribersToRefreshBoardEvent.push(subscriber);
  }
}

export default PlayersController;
