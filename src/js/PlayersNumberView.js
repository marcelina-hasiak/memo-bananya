class PlayersNumberView {
  static settingTitle = 'ANY FRIENDS WITH YOU?'

  constructor(settingsContainer, titleContainer) {
    const root = this.getRoot()
    this.createButtons(root)
    //this.attachToContainer(settingsContainer, root)
    this.changeTitle(titleContainer)
    this.subscribers = []
  }
  getRoot() {
    const root = document.querySelector('.settings__body--js')
    if (root) {
      root.querySelectorAll('*').forEach(child => child.remove())
      return root
    } 
    //else {
    //   const root = document.createElement('div')
    //   root.classList.add('settings__body', 'settings__body--js')
    //   return root
    // }
  }

  createButtons(root) {
    root.appendChild(this.createButton('YES', '1player'))
    root.appendChild(this.createButton('NO', '2players', true))
  }

  attachToContainer(container, root) {
    document.querySelector(container).appendChild(root)
  }

  createButton(name, selector, isLastChild) {
    const btn = document.createElement('button');
    btn.setAttribute('data-playersNumber', selector);
    btn.textContent = name;
    btn.classList.add('settings__button')
    if(isLastChild) {
      btn.classList.add('settings__button--last')
    }
    btn.addEventListener('click', (event) => {
      this.subscribers.forEach(subscribe => subscribe(selector))
    })
    return btn
  }

  changeTitle(container) {
    document.querySelector(container).textContent = PlayersNumberView.settingTitle
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }
}

export default PlayersNumberView