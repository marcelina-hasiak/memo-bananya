class PlayersNumberView {
  static settingTitle = 'ANY FRIENDS WITH YOU?'

  constructor(titleContainer) {
    const root = this.getRoot()
    this.createButtons(root)
    this.changeTitle(titleContainer)
    this.subscribers = []
  }
  getRoot() {
    const root = document.querySelector('.settings__body--js')
    if (root) {
      root.querySelectorAll('.settings__button--js').forEach(child => child.remove())
      return root
    } 
  }

  createButtons(root) {
    root.append(this.createButton('NO', '1player'))
    root.append(this.createButton('YES', '2players', true))
    root.append(this.createEscapeButton())
  }
  
  createButton(name, selector, isLastChild) {
    const btn = document.createElement('button');
    btn.setAttribute('data-playersNumber', selector);
    btn.textContent = name;
    btn.classList.add('settings__button', 'settings__button--js')
    if(isLastChild) {
      btn.classList.add('settings__button--last')
    }
    btn.addEventListener('click', (event) => {
      this.subscribers.forEach(subscribe => subscribe(selector))
    })
    return btn
  }

  createEscapeButton() {
    const btn = document.createElement('button');
    btn.classList.add('btn-back')
    const btnImage = document.createElement('img');
    btnImage.classList.add('full-size');
    btnImage.setAttribute('src', './src/assets/img/btn-back.svg');
    btn.appendChild(btnImage)
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