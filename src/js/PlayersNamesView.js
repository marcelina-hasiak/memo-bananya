class PlayersNamesView {
  static settingTitle = "GIMMIE YOUR NAME!";
  static settingTitleMultiplayer = "GIMMIE YOUR NAMES!";

  constructor(titleContainer, playersNumber) {
    this.playersNumber = playersNumber;
    this.render(titleContainer)
    this.subscribers = [];
    this.subscribersToPreviousView = []
  }

  render(titleContainer) {
    
    const root = this.getRoot();
    this.createForm(root);
    this.handleEscapeButton()
    this.changeTitle(titleContainer);
  }
  getRoot() {
    const root = document.querySelector('.settings__body--js')
    for(let i = root.children.length; i > 0; i--) {
      if (i === root.children.length) {continue}
      root.children[i-1].remove()
    }
    return root
  }

  createForm(root) {
    const form = document.createElement("form");
    form.classList.add('settings-form')
    for (let i = 0; i < this.playersNumber; i++) {
      form.appendChild(this.createInput(`PLAYER ${i + 1} NAME`));
    }
    form.append(this.createFormButton())
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const inputsValues = Array.from(form.querySelectorAll('input')).map((i,index) => {
        if (i.value === '') {
          return `Player ${index + 1}`
        }
        return i.value
      })
      this.subscribers.forEach(subscribe => subscribe(inputsValues))
    })
    root.prepend(form);
  }

  createInput(name) {
    const p = document.createElement("p");
    p.classList.add('settings-form__field')

    const label = document.createElement("label");
    label.textContent = name;

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add('settings-form__input')

    label.appendChild(input);
    p.appendChild(label);

    return p;
  }

  createFormButton() {
    const btn = document.createElement('button');
    btn.textContent = "PLAY!"
    btn.classList.add('btn-go')
    return btn
  }

  handleEscapeButton() {
    const btn = document.querySelector('.btn-back--js')
    btn.addEventListener('click', () => {
      this.subscribersToPreviousView.forEach(subscribe => subscribe())
    })
  }

  changeTitle(container) {
    const heading = document.querySelector(container)
    heading.textContent =
      this.playersNumber > 1
        ? PlayersNamesView.settingTitleMultiplayer
        : PlayersNamesView.settingTitle;
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  subscribeToPreviousView(subscriber) {
    this.subscribersToPreviousView.push(subscriber)
  }
}

export default PlayersNamesView;
