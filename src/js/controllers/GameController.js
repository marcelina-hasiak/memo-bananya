import BoardFactory from "../models/BoardFactory";
import PlayersController from "./PlayersController";
import Views from "../views/Views";

class GameController {
  constructor() {
    this.views = new Views();
    this.getLevelView();
  }

  getLevelView(firstGame = true) {
    const levelView = this.views.getLevelView(firstGame);
    levelView.subscribe({
      getCurrentBoard: (level) => this.getCurrentBoard(level),
      getPlayersNumberView: () => this.getPlayersNumberView()
    });
  }

  getCurrentBoard(level) {
    const boardFactory = new BoardFactory();
    this.board = boardFactory.getBoard(level);
    this.board.subscribe({
      onGameOver: () => this.onGameOver(),
    });
  }

  onGameOver() {
    const winnerStats = this.playerController.getWinnerStats();
    console.log(winnerStats);
  }

  getPlayersNumberView() {
    const playersNumberView = this.views.getPlayersNumberView();
    playersNumberView.subscribe({
      getPlayersController: (playersNumber) =>
        this.getPlayersController(playersNumber),
      getPlayersNameView: (playersNumber) =>
        this.getPlayersNameView(playersNumber),
    });
  }

  getPlayersController(playersNumber) {
    const playersNumberParsed = this.parsePlayersNumber(playersNumber);
    this.playerController = new PlayersController(
      playersNumberParsed,
      this.board
    );
    this.playerController.subscribe({
      onEscapeButtonEvent: () => this.getLevelView(false),
      onRefreshBoardEvent: () => this.getBoardView(),
    });
  }

  getPlayersNameView(playersNumber) {
    const playersNumberParsed = this.parsePlayersNumber(playersNumber);
    const playersNamesView = this.views.getPlayersNamesView(
      playersNumberParsed
    );
    playersNamesView.subscribe({
      setPlayersNames: (names) => this.setPlayersNames(names),
      getPlayersControllerView: () => this.getPlayersControllerView(),
      getBoardView: () => this.getBoardView(),
    });
  }

  setPlayersNames(names) {
    this.playerController.setPlayersNames(names);
  }

  getPlayersControllerView() {
    this.playerController.renderPlayers();
  }

  getBoardView() {
    this.board.renderBoard();
  }

  parsePlayersNumber(playersNumber) {
    return parseInt(playersNumber[0]);
  }
}

export default GameController;
