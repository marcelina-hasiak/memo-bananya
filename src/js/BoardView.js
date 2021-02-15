class BoardView {
  constructor(boardContainer, board) {
    this.prepareTheBoardField()
    const root = this.createRoot()
    this.createTiles(root, board)
    this.addListenersToTiles(root)
    this.attachToContainer(boardContainer, root)
    this.subscribers = null
  }

  prepareTheBoardField() {
    const appHeader = document.querySelector('.application__header--js')
    const appBody = document.querySelector('.application__body--js')
    const footerImages = document.querySelector('.footer__images--js')
    const board = document.querySelector('.board--js')
    const nodesToHide = [appHeader, appBody, footerImages]
    nodesToHide.forEach(node => node.classList.add('remove'))
    if (board) {
      board.remove()
    }
  }

  createRoot() {
    const root = document.createElement('section')
    root.classList.add('board', 'board--js')
    return root
  }

  addListenersToTiles(root) {
    let revealedTiles = []
    let isTimeoutFinished = true

    root.addEventListener('click', (e) => {
      if (isTimeoutFinished) {
        const tile = e.target.closest('.board__tile-container');
        this.revealTile(tile, revealedTiles)
        
        if (revealedTiles.length === 2) {
          isTimeoutFinished = false
          const isPair = this.subscribers.checkIfPair(revealedTiles)
          setTimeout(() => {
            isPair
              ? revealedTiles.forEach(tile => this.fadeOutAnimation(tile)) 
              : revealedTiles.forEach(tile => tile.classList.remove('is-flipped'))
            revealedTiles = []
            isTimeoutFinished = true
            this.subscribers.animationRevealedTilesEnd(isPair)
          }, 1000);
        }
      }
      return 
    })
  }

  revealTile(tile, revealedTiles) {
    const isTileRevealed = this.isTileRevealed(tile)
    if (!isTileRevealed) {
      tile.classList.add('is-flipped');
      revealedTiles.push(tile)
    }
  }
  //utilities
  isTileRevealed(tile) {
    return tile ? tile.classList.contains('is-flipped') : false
  }

  //animate
  fadeOutAnimation(tile) {
    const fadeOutAnimation = tile.animate({opacity: [ 1, 0 ]}, 500 )
    fadeOutAnimation.onfinish = () => {
      Array.from(tile.children).forEach((child) => child.remove())
    } 
  }
    
  attachToContainer(container, root) {
    document.querySelector(container).prepend(root)
  }

  createTiles(root, board) {
    board.forEach(tile => {
      root.append(this.createTile(tile))
    })
  }

  createTile({srcImage, tileId}) {
    const tile = document.createElement('div')
    tile.classList.add('board__tile-container')
    tile.setAttribute('data-id', `${tileId}`)

    const tileBack = document.createElement('div')
    tileBack.classList.add('board__tile', 'board__tile--back')

    const tileFront = document.createElement('div')
    tileFront.classList.add('board__tile', 'board__tile--front')
    tileFront.style.backgroundImage = `url(${srcImage})`

    tile.append(tileBack)
    tile.append(tileFront)

    return tile
  }
  subscribe(subscribers) {
    this.subscribers = subscribers
  }
}

export default BoardView
