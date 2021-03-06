import { v4 as uuidv4 } from "uuid";

class Tile {
  #src;
  #data;
  #id;

  constructor(index, source) {
    this.#src = source;
    this.#data = index;
    this.#id = uuidv4();
  }

  get srcImage() {
    return this.#src;
  }

  get dataPair() {
    return this.#data;
  }

  get tileId() {
    return this.#id;
  }

  isPair(comparedTile) {
    return this.dataPair === comparedTile.dataPair;
  }
}

export default Tile;
