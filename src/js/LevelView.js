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
    root.classList.add('settings__body')
    return root
  }

  createButtons(root) {
    root.appendChild(this.createButton('EASY', 'easy'))
    root.appendChild(this.createButton('MEDIUM', 'medium'))
    root.appendChild(this.createButton('HARD', 'hard', true))
  }

  attachToContainer(container, root) {
    document.querySelector(container).appendChild(root)
  }

  createButton(name, selector, isLastChild) {
    const btn = document.createElement('button');
    btn.setAttribute('data-level', selector);
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
    document.querySelector(container).textContent = LevelView.settingTitle
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }
}

export default LevelView

