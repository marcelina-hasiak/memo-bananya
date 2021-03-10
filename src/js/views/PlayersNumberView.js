import escapeButton from "../../assets/img/btn-back.svg";

class PlayersNumberView {
  static settingTitle = "ANY FRIENDS WITH YOU?";

  constructor(firstRender, containerSelector) {
    this.render(firstRender, containerSelector);
    this.subscribers = {};
  }

  render(typeOfRender, containerSelector) {
    const settingsBody = document.querySelector(containerSelector);
    
    switch (typeOfRender) {
      case "first render": {
        this.deleteNodeChildren(settingsBody);
        this.createSettingsButtons(settingsBody);
        settingsBody.append(this.createEscapeButton());
        break;
      }
      case "render from settings": {
        const escapeButton = settingsBody.querySelector(".btn-back--js");
        this.deleteNodeChildrenExeptLastOne(settingsBody);
        this.createSettingsButtons(settingsBody);
        this.replaceEventListeners(escapeButton);
        break;
      }
    }

    this.changeSettingsTitle();
  }

  createSettingsButtons(settingsBody) {
    settingsBody.prepend(this.createSettingsButton("YES", "2players", true, '.4s'));
    settingsBody.prepend(this.createSettingsButton("NO", "1player", false, '.2s'));

    return settingsBody;
  }

  createSettingsButton(name, selector, isLastChild, delay) {
    const btn = document.createElement("button");

    btn.classList.add("settings__button", "settings__button--js","animate-settings-button");
    btn.style.animationDelay = delay
    if (isLastChild) {
      btn.classList.add("settings__button--last-with-margin");
    }

    btn.setAttribute("data-playersNumber", selector);
    btn.textContent = name;

    btn.addEventListener("click", () => {
      this.removeAnimationClasses()
      this.animateClickedButton(btn)
      btn.onanimationend = () => {
        this.subscribers.getPlayersController(selector);
        this.subscribers.getPlayersNameView(selector);
      };
    });

    return btn;
  }

  createEscapeButton() {
    const btn = document.createElement("button");
    btn.classList.add("btn-back", "settings__button-back", "btn-back--js", "fade-in");

    const btnImage = document.createElement("img");
    btnImage.classList.add("full-size");
    btnImage.setAttribute("src", escapeButton);
    btnImage.setAttribute("alt", "Previous.");

    btn.append(btnImage);

    btn.addEventListener("click", () => {
      this.removeAnimationClasses()
      this.animateClickedButton(btn)
      btn.onanimationend = () => {
        this.subscribers.onEscapeButtonEvent();
      }
    });

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

  changeSettingsTitle() {
    const headingTitle = document.querySelector(".settings__title--js")
    headingTitle.textContent = PlayersNumberView.settingTitle;
    headingTitle.classList.add("animate-speech-bubble");

    document
      .querySelector(".settings__bananya--js")
      .setAttribute(
        "alt",
        "Bananya presenting heading in speech bubble. Any friends with you?"
      );
  }

  deleteNodeChildren(node) {
    for (let i = node.children.length; i > 0; i--) {
      node.children[i - 1].remove();
    }
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

  animateClickedButton(btn) {
    btn.style.animationDelay ='0s'
    btn.classList.add('btn-clicked')
  }

  removeAnimationClasses() {
    const heading = document.querySelector(".settings__title--js");
    heading.classList.remove('animate-speech-bubble');
    const settingButtons = document.querySelectorAll('.settings__button--js')
    settingButtons.forEach(button => button.classList.remove("animate-settings-button"))
    const escapeButton = document.querySelector(".btn-back--js");
    escapeButton.classList.remove("fade-in");
  }
}

export default PlayersNumberView;
