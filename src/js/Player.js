class Player {
  #moves
  #points
  #name
  
  constructor() {
    this.#moves = 0;
    this.#points = 0;
    this.#name = ''
  }

  //setter
  setMoves() {
    this.#moves++;
  }
  setPoints() {
    this.#points++;
  }
  setName(name) {
    this.#name = name;
  }

  get playerMoves() {
    return this.#moves
  }
  get playerPoints() {
    return this.#points
  }
  get playerName() {
    return this.#name
  }
}
export default Player