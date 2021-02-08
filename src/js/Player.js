class Player {
  constructor() {
    this.moves = 0;
    this.points = 0;
    this.name = ''
  }

  //setter
  setMoves(moveCount) {
    this.moves = moveCount;
  }
  setPoints(pointsCount) {
    this.points = pointsCount;
  }
  setName(name) {
    this.name = name;
  }
}
export default Player