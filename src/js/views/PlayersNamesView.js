class PlayersNamesView {
  static settingTitle = "GIMMIE YOUR NAME!";
  static settingTitleMultiplayer = "GIMMIE YOUR NAMES!";

  constructor(titleContainer, playersNumber) {
    this.render(titleContainer, playersNumber);
    this.subscribers = {};
  }

  render(titleContainer, playersNumber) {
    const root = this.getRoot();
    this.createForm(root, playersNumber);
    this.onEscapeButtonEvent();
    this.changeTitle(titleContainer, playersNumber);
  }

  getRoot() {
    const root = document.querySelector(".settings__body--js");
    for (let i = root.children.length; i > 0; i--) {
      if (i === root.children.length) {
        continue;
      }
      root.children[i - 1].remove();
    }
    return root;
  }

  createForm(root, playersNumber) {
    const form = document.createElement("form");
    form.classList.add("settings-form");

    for (let i = 0; i < playersNumber; i++) {
      form.appendChild(this.createInput(`PLAYER ${i + 1} NAME`));
    }
    form.append(this.createFormButton());

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputsValues = Array.from(
        form.querySelectorAll(".settings-form__input")
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
    root.prepend(form);
  }

  createInput(name) {
    const p = document.createElement("p");
    p.classList.add("settings-form__field");

    const label = document.createElement("label");
    label.textContent = name;

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.classList.add("settings-form__input");

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

  onEscapeButtonEvent() {
    const btn = document.querySelector(".btn-back--js");
    btn.addEventListener("click", () => {
      this.subscribers.onEscapeButtonEvent();
    });
  }

  changeTitle(container, playersNumber) {
    const heading = document.querySelector(container);
    heading.textContent =
      playersNumber > 1
        ? PlayersNamesView.settingTitleMultiplayer
        : PlayersNamesView.settingTitle;
  }

  subscribe(subscribers) {
    this.subscribers = { ...this.subscribers, ...subscribers };
  }
}

export default PlayersNamesView;
