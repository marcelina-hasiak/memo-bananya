class PlayersNamesView {
  static settingTitle = "GIMMIE YOUR NAME!";
  static settingTitleMultiplayer = "GIMMIE YOUR NAMES!";

  constructor(containerSelector, playersNumber) {
    this.render(containerSelector, playersNumber);
    this.subscribers = {};
  }

  render(containerSelector, playersNumber) {
    const settingsBody = document.querySelector(containerSelector);

    this.deleteNodeChildrenExeptLastOne(settingsBody);
    this.createForm(settingsBody, playersNumber);
    const escapeButton = settingsBody.querySelector(".btn-back--js");
    this.replaceEventListeners(escapeButton);
    this.changeSettingsTitle(playersNumber);
  }

  createForm(settingsBody, playersNumber) {
    const form = document.createElement("form");
    form.classList.add("settings-form");

    for (let i = 0; i < playersNumber; i++) {
      const name = `PLAYER ${i + 1} NAME`
      const isLastChild = i === playersNumber - 1
      const delay = `${0.2 * (i + 1)}s`
      form.appendChild(this.createInput(name, isLastChild, delay));
    }

    form.append(this.createFormButton());

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const btn = document.querySelector('.btn-go')
      this.animateClickedButton(btn)
        const inputsValues = Array.from(
          form.querySelectorAll(".settings-form__input--js")
        ).map((inputs, index) => {
          if (inputs.value === "") {
            return `Player ${index + 1}`;
          }
          return inputs.value;
        });
        
        const footerBananya = document.querySelector('.footer__bananya--js')
        this.animateFormSubmit(footerBananya)
        footerBananya.onanimationend = () => {
          this.subscribers.setPlayersNames(inputsValues);
          this.subscribers.getPlayersControllerView();
          this.subscribers.getBoardView();
        };
    });

    settingsBody.prepend(form);
  }

  createInput(name, isLastChild, delay) {
    const p = document.createElement("p");
    p.classList.add("settings-form__field", "animate-settings-button");
    p.style.animationDelay = delay

    if (isLastChild) {
      p.classList.add("settings-form__field--last-with-margin");
    }

    const label = document.createElement("label");
    label.textContent = name;

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("maxlength", "8");
    input.classList.add("settings-form__input", "settings-form__input--js");

    label.appendChild(input);
    p.appendChild(label);

    return p;
  }

  createFormButton() {
    const btn = document.createElement("button");
    btn.textContent = "PLAY!";
    btn.classList.add("btn-go", "fade-in");
    
    return btn;
  }

  replaceEventListeners(escapeButton) {
    const updatedEscapeButton = escapeButton.cloneNode(true);
    escapeButton.replaceWith(updatedEscapeButton);
    updatedEscapeButton.classList.remove("btn-clicked");
    updatedEscapeButton.classList.add("fade-in");
    updatedEscapeButton.addEventListener("click", () => {
      this.removeAnimationClasses()
      this.animateClickedButton(updatedEscapeButton)
      updatedEscapeButton.onanimationend = () => {
        this.subscribers.onEscapeButtonEvent();
      }
    });

    return updatedEscapeButton;
  }

  changeSettingsTitle(playersNumber) {
    const headingTitle = document.querySelector(".settings__title--js");
    const headingImage = document.querySelector(".settings__bananya--js");
    if (playersNumber > 1) {
      headingTitle.textContent = PlayersNamesView.settingTitleMultiplayer;
      headingImage.setAttribute(
        "alt",
        "Bananya presenting heading in speech bubble. Gimmie your names!"
      );
    } else {
      headingTitle.textContent = PlayersNamesView.settingTitle;
      headingImage.setAttribute(
        "alt",
        "Bananya presenting heading in speech bubble. Gimmie your name!"
      );
    }
    headingTitle.classList.add("animate-speech-bubble");
  }

  deleteNodeChildrenExeptLastOne(node) {
    for (let i = node.children.length; i > 0; i--) {
      if (i === node.children.length) {
        continue;
      }
      node.children[i - 1].remove();
    }
  }

  subscribe(subscribers) {
    this.subscribers = { ...this.subscribers, ...subscribers };
  }

  animateFormSubmit(footerBananya) {
    const madBananya = document.querySelector('.footer__bananya--js')
    const mouse = document.querySelector('.footer__mouse--js')
    madBananya.classList.remove('animate-mad-bananya')
    mouse.classList.remove('animate-mouse')
    madBananya.classList.add('animate-chasing-bananya')
    mouse.classList.add('animate-escaping-mouse')
  }

  removeAnimationClasses() {
    const heading = document.querySelector(".settings__title--js");
    heading.classList.remove('animate-speech-bubble');
    const settingButtons = document.querySelectorAll('.settings__button--js')
    settingButtons.forEach(button => button.classList.remove("animate-settings-button"))
    const escapeButton = document.querySelector(".btn-back--js");
    escapeButton.classList.remove("fade-in");
  }

  animateClickedButton(btn) {
    btn.style.animationDelay ='0s';
    btn.classList.remove("fade-in");
    btn.classList.add('btn-clicked');
  }
}

export default PlayersNamesView;
