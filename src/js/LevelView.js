class LevelView {
  static settingTitle = 'CHOOSE YOUR LEVEL'

  constructor(firstGame, settingsContainer, titleContainer) {
    this.subscribers = []
    this.render(firstGame, settingsContainer, titleContainer)
  }

  render(firstGame, settingsContainer, titleContainer) {
    if (!firstGame) {
      this.prepareTheLevelViewContainer()
    }
    const root = this.createRoot()
    this.createButtons(root)
    this.attachToContainer(settingsContainer, root)
    this.changeTitle(titleContainer)
  }

  prepareTheLevelViewContainer() {
    console.log('removal')
    const appHeader = document.querySelector('.application__header--js')
    const appBody = document.querySelector('.application__body--js')
    const footerImages = document.querySelector('.footer__images--js')
    const nodesToHide = [appHeader, appBody, footerImages]
    nodesToHide.forEach(node => node.classList.remove('hide'))

    const board = document.querySelector('.board--js')
    const playerPanel = document.querySelector('.player-panel--js')
    const nodesToRemove = [board, playerPanel]
    nodesToRemove.forEach(node => node.remove())
  }

  createRoot() {
    if (document.querySelector('.settings__body--js') === null) {
      const root = document.createElement('div')
      root.classList.add('settings__body', 'settings__body--js')
      return root
    } else {
    const root = document.querySelector('.settings__body--js')
    for(let i = root.children.length; i > 0; i--) {
      root.children[i-1].remove()
    }
    return root
    }

  }

  createButtons(root) {
    root.append(this.createButton('EASY', 'easy'))
    root.append(this.createButton('MEDIUM', 'medium'))
    root.append(this.createButton('HARD', 'hard', true))
    
  }

  attachToContainer(container, root) {
    document.querySelector(container).append(root)
  }

  createButton(name, selector, isLastChild) {
    const btn = document.createElement('button');
    btn.setAttribute('data-level', selector);
    btn.textContent = name;
    btn.classList.add('settings__button', 'settings__button--js')
    if(isLastChild) {
      btn.classList.add('settings__button--last')
    }
    btn.addEventListener('click', () => {
      this.subscribers.forEach(subscribe => subscribe(selector))
    })
    return btn
  }

  changeTitle(container) {
    document.querySelector(container).textContent = LevelView.settingTitle
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }
}

export default LevelView

