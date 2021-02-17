class Player {
  #moves;
  #points;
  #name;

  constructor() {
    this.#moves = 0;
    this.#points = 0;
    this.#name = "";
  }

  set playerMoves(moves) {
    this.#moves = moves;
  }

  set playerPoints(points) {
    this.#points = points;
  }

  set playerName(name) {
    this.#name = name;
  }

  get playerMoves() {
    return this.#moves;
  }

  get playerPoints() {
    return this.#points;
  }

  get playerName() {
    return this.#name;
  }

  addMoves() {
    this.#moves++;
  }
  addPoints() {
    this.#points++;
  }
}
export default Player;
