import { v4 as uuidv4 } from 'uuid';

class Tile {
  constructor(index) {
    this.src = `../assets/img/tile-${index}`
    this.dataSet = `data-pair=${index}`
    this.id = uuidv4()
    this.isHidden = true
  };
};

export default Tile;