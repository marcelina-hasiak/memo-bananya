import LevelView from "../views/LevelView";
import PlayersNumberView from "../views/PlayersNumberView";
import PlayersNamesView from "../views/PlayersNamesView";
import WinnerView from "../views/WinnerView";

class Views {
  getLevelView(typeOfRender) {
    this.levelView = new LevelView(typeOfRender, ".application--js");
    return this.levelView;
  }

  getPlayersNumberView(typeOfRender) {
    this.playersNumber = new PlayersNumberView(
      typeOfRender,
      ".settings__body--js"
    );
    this.playersNumber.subscribe({
      onEscapeButtonEvent: () =>
        this.levelView.render("render from settings", ".settings__body--js"),
    });
    return this.playersNumber;
  }

  getPlayersNamesView(playersNumber) {
    this.playersNamesView = new PlayersNamesView(
      ".settings__body--js",
      playersNumber
    );
    this.playersNamesView.subscribe({
      onEscapeButtonEvent: () =>
        this.playersNumber.render(
          "render from settings",
          ".settings__body--js"
        ),
    });
    return this.playersNamesView;
  }

  getWinnerView(playerStats) {
    this.winnerView = new WinnerView(playerStats, ".application--js");
    this.winnerView.subscribe({
      onEscapeButtonEvent: () =>
        this.levelView.render("render from endgame", ".application--js"),
    });
    return this.winnerView;
  }
}

export default Views;
