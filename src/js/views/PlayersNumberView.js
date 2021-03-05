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
    this.changeSettingsHeader();
  }

  createSettingsButtons(settingsBody) {
    settingsBody.prepend(this.createSettingsButton("YES", "2players", true));
    settingsBody.prepend(this.createSettingsButton("NO", "1player"));

    return settingsBody;
  }

  createSettingsButton(name, selector, isLastChild) {
    const btn = document.createElement("button");
    btn.setAttribute("data-playersNumber", selector);
    btn.textContent = name;
    btn.classList.add("settings__button", "settings__button--js");

    if (isLastChild) {
      btn.classList.add("settings__button--last");
    }

    btn.addEventListener("click", () => {
      this.subscribers.getPlayersController(selector);
      this.subscribers.getPlayersNameView(selector);
    });

    return btn;
  }

  createEscapeButton() {
    const btn = document.createElement("button");
    btn.classList.add("btn-back", "settings__button-back", "btn-back--js");

    const btnImage = document.createElement("img");
    btnImage.classList.add("full-size");
    btnImage.setAttribute("src", "./src/assets/img/btn-back.svg");
    btnImage.setAttribute("alt", "Previous.");

    btn.append(btnImage);
    btn.addEventListener("click", () => {
      this.subscribers.onEscapeButtonEvent();
    });

    return btn;
  }

  replaceEventListeners(escapeButton) {
    const updatedEscapeButton = escapeButton.cloneNode(true);
    escapeButton.replaceWith(updatedEscapeButton);
    updatedEscapeButton.addEventListener("click", () => {
      this.subscribers.onEscapeButtonEvent();
    });

    return updatedEscapeButton;
  }

  changeSettingsHeader() {
    document.querySelector(".settings__title--js").textContent =
      PlayersNumberView.settingTitle;
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
}

export default PlayersNumberView;
