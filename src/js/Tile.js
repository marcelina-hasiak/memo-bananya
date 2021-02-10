import { v4 as uuidv4 } from 'uuid';

class Tile {
  #src
  #data
  #id
  constructor(index) {
    this.#src = `./src/assets/img/tile-${index}.png`
    this.#data = index
    this.#id = uuidv4()
    this.isHidden = true
  };
  get srcImage() {
    return this.#src
  }
  get dataSet() {
    return this.#data
  }
};

export default Tile;