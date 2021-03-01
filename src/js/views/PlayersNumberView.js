class PlayersNumberView {
  static settingTitle = 'ANY FRIENDS WITH YOU?'

  constructor(titleContainer) {
    this.render(titleContainer)
    this.subscribers = {}
  }

  render(titleContainer) {
    const root = this.getRoot()
    this.createButtons(root)
    this.changeTitle(titleContainer)
  }

  getRoot() {
    const root = document.querySelector('.settings__body--js')
    for(let i = root.children.length; i > 0; i--) {
      root.children[i-1].remove()
    }
    return root
  }

  createButtons(root) {
    root.append(this.createButton('NO', '1player'))
    root.append(this.createButton('YES', '2players', true))

    root.querySelector('btn-back--js') 
      ? this.onEscapeButtonEvent() 
      : root.append(this.createEscapeButton())
  }

  createButton(name, selector, isLastChild) {
    const btn = document.createElement('button');
    btn.setAttribute('data-playersNumber', selector);
    btn.textContent = name;
    btn.classList.add('settings__button', 'settings__button--js')

    // if(isLastChild) {
    //   btn.classList.add('settings__button--last')
    // }

    btn.addEventListener('click', () => {
      this.subscribers.getPlayersController(selector)
      this.subscribers.getPlayersNameView(selector);
    })
    return btn
  }

  onEscapeButtonEvent() {
    const btn = document.querySelector('.btn-back--js')
    btn.addEventListener('click', () => {
      this.subscribers.onEscapeButtonEvent()
    })
  }

  createEscapeButton() {
    const btn = document.createElement('button');
    btn.classList.add('btn-back', 'settings__button-back', 'btn-back--js')

    const btnImage = document.createElement('img');
    btnImage.classList.add('full-size');
    btnImage.setAttribute('src', './src/assets/img/btn-back.svg');

    btn.appendChild(btnImage)
    btn.addEventListener('click', () => {
      this.subscribers.onEscapeButtonEvent()
    })

    return btn
  }

  changeTitle(container) {
    document.querySelector(container).textContent = PlayersNumberView.settingTitle
  }

  subscribe(subscribers) {
    this.subscribers = {...this.subscribers, ...subscribers};
  }
}

export default PlayersNumberView