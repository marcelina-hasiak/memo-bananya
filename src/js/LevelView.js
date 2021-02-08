class LevelView {
  static settingTitle = 'CHOOSE YOUR LEVEL'

  constructor(settingsContainer, titleContainer) {
    const root = this.createRoot()
    this.createButtons(root)
    this.attachToContainer(settingsContainer, root)
    this.changeTitle(titleContainer)
    this.subscribers = []
  }

  createRoot() {
    const root = document.createElement('div')
    root.classList.add('settings__body', 'settings__body--js')
    return root
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
    btn.addEventListener('click', (event) => {
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

