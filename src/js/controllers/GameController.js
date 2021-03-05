import BoardFactory from "../models/BoardFactory";
import PlayersController from "./PlayersController";
import Views from "../views/Views";

class GameController {
  constructor() {
    this.views = new Views();
    this.getLevelView();
  }

  getLevelView(typeOfRender = "first render") {
    const levelView = this.views.getLevelView(typeOfRender);
    levelView.subscribe({
      getCurrentBoard: (level) => this.getCurrentBoard(level),
      getPlayersNumberView: () => this.getPlayersNumberView(),
    });
  }

  getCurrentBoard(level) {
    const boardFactory = new BoardFactory();
    this.board = boardFactory.getBoard(level);
    this.board.subscribe({
      onGameOver: () => this.getWinnerView(),
    });
  }

  getWinnerView() {
    const winnerStats = this.playerController.getWinnerStats();
    const winnerView = this.views.getWinnerView(winnerStats);
    winnerView.subscribe({
      onRefreshButtonEvent: () => {
        this.getBoardView("render from endgame");
        this.getPlayersControllerView("render from endgame");
      },
    });
  }

  getPlayersNumberView(typeOfRender = "first render") {
    const playersNumberView = this.views.getPlayersNumberView(typeOfRender);
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
      onEscapeButtonEvent: () => this.getLevelView("render from board"),
      onRefreshButtonEvent: () => {this.getBoardView("render from board")
      },
    });
  }

  getPlayersNameView(playersNumber) {
    const playersNumberParsed = this.parsePlayersNumber(playersNumber);
    const playersNamesView = this.views.getPlayersNamesView(
      playersNumberParsed
    );
    playersNamesView.subscribe({
      setPlayersNames: (names) => this.setPlayersNames(names),
      getBoardView: () => this.getBoardView(),
      getPlayersControllerView: () => this.getPlayersControllerView(),
    });
  }

  setPlayersNames(names) {
    this.playerController.setPlayersNames(names);
  }

  getPlayersControllerView(typeOfRender = "first render") {
    this.playerController.renderPlayers(typeOfRender);
  }

  getBoardView(typeOfRender = "first render") {
    this.board.renderBoard(typeOfRender);
  }

  parsePlayersNumber(playersNumber) {
    return parseInt(playersNumber[0]);
  }
}

export default GameController;
