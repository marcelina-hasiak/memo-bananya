class BoardView {
  constructor(boardContainer, board) {
    this.board = board
    this.prepareTheBoardField()
    const root = this.createRoot()
    this.createTiles(root)
    this.attachToContainer(boardContainer, root)
  }
  prepareTheBoardField() {
    const appHeader = document.querySelector('.application__header--js')
    const appBody = document.querySelector('.application__body--js')
    const footerImages = document.querySelector('.footer__images--js')
    const nodesToHide = [appHeader, appBody, footerImages]
    nodesToHide.forEach(node => node.classList.add('hide'))
  }

  createRoot() {
    const root = document.createElement('section')
    root.classList.add('board', 'board--js')
    return root
  }

  attachToContainer(container, root) {
    document.querySelector(container).prepend(root)
  }

  createTiles(root) {
    this.board.forEach(tile => {
      root.append(this.createTile(tile))
    })
  }

  createTile({srcImage, dataSet}) {
    const tile = document.createElement('div')
    tile.classList.add('board__tile-container')
    tile.setAttribute('data-pair', `${dataSet}`)
    tile.addEventListener('click', () => {
      tile.classList.toggle('is-flipped');
    });

    const tileBack = document.createElement('div')
    tileBack.classList.add('board__tile', 'board__tile--back')

    const tileFront = document.createElement('div')
    tileFront.classList.add('board__tile', 'board__tile--front')
    tileFront.style.backgroundImage = `url(${srcImage})`

    tile.append(tileBack)
    tile.append(tileFront)

    return tile
  }
}

export default BoardView
