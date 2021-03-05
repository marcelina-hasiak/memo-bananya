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
    this.changeTitle(playersNumber);
  }

  createForm(settingsBody, playersNumber) {
    const form = document.createElement("form");
    form.classList.add("settings-form");

    for (let i = 0; i < playersNumber; i++) {
      form.appendChild(this.createInput(`PLAYER ${i + 1} NAME`));
    }

    form.append(this.createFormButton());

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputsValues = Array.from(
        form.querySelectorAll(".settings-form__input--js")
      ).map((inputs, index) => {
        if (inputs.value === "") {
          return `Player ${index + 1}`;
        }
        return inputs.value;
      });

      this.subscribers.setPlayersNames(inputsValues);
      this.subscribers.getPlayersControllerView();
      this.subscribers.getBoardView();
    });

    settingsBody.prepend(form);
  }

  createInput(name) {
    const p = document.createElement("p");
    p.classList.add("settings-form__field");

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
    btn.classList.add("btn-go");

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

  changeTitle(playersNumber) {
    const heading = document.querySelector(".settings__title--js");
    const headingImage = document.querySelector(".settings__bananya--js");
    if (playersNumber > 1) {
      heading.textContent = PlayersNamesView.settingTitleMultiplayer;
      headingImage.setAttribute(
        "alt",
        "Bananya presenting heading in speech bubble. Gimmie your names!"
      );
    } else {
      heading.textContent = PlayersNamesView.settingTitle;
      headingImage.setAttribute(
        "alt",
        "Bananya presenting heading in speech bubble. Gimmie your name!"
      );
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

export default PlayersNamesView;
