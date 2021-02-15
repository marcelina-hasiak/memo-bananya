import { v4 as uuidv4 } from 'uuid';

class Tile {
  #src
  #data
  #id
  constructor(index) {
    this.#src = `./src/assets/img/tile-${index}.png`
    this.#data = index
    this.#id = uuidv4()
  };
  get srcImage() {
    return this.#src
  }
  get dataPair() {
    return this.#data
  }
  get tileId() {
    return this.#id
  }
  isPair(anotherTile) {
    return this.dataPair === anotherTile.dataPair
  }
};

export default Tile;