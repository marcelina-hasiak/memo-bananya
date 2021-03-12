import {
  animateClickedButton,
  removeAnimationClasses,
  animateHeadingTitle,
  animateFooter,
} from "../animations";
import { deleteNodeChildrenExeptLastOne } from "../auxiliaries";

class PlayersNamesView {
  static settingTitle = "GIMMIE YOUR NAME!";
  static settingTitleMultiplayer = "GIMMIE YOUR NAMES!";

  constructor(containerSelector, playersNumber) {
    this.render(containerSelector, playersNumber);
    this.subscribers = {};
  }

  render(containerSelector, playersNumber) {
    const settingsBody = document.querySelector(containerSelector);

    deleteNodeChildrenExeptLastOne(settingsBody);
    this.createForm(settingsBody, playersNumber);
    const escapeButton = document.querySelector(".btn-back--js");
    this.replaceEventListeners(escapeButton);
    this.changeSettingsTitle(playersNumber);
  }

  createForm(settingsBody, playersNumber) {
    const form = document.createElement("form");
    form.classList.add("settings-form");

    this.createInputs(playersNumber, form);

    form.append(this.createFormButton());

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputsValues = Array.from(
        form.querySelectorAll(".settings-form__input--js")
      ).map((inputs, index) => {
        return inputs.value === "" ? `Player ${index + 1}` : inputs.value;
      });

      const footerBananya = document.querySelector(".footer__bananya--js");
      animateFooter("escape animation");
      footerBananya.onanimationend = () => {
        this.subscribers.setPlayersNames(inputsValues);
        this.subscribers.getPlayersControllerView();
        this.subscribers.getBoardView();
      };
    });

    settingsBody.prepend(form);
  }

  createInputs(playersNumber, form) {
    for (let i = 0; i < playersNumber; i++) {
      const name = `PLAYER ${i + 1} NAME`;
      const isLastChild = i === playersNumber - 1;
      const delay = `${0.2 * (i + 1)}s`;
      form.appendChild(this.createInput(name, isLastChild, delay));
    }
  }

  createInput(name, isLastChild, delay) {
    const p = document.createElement("p");
    p.classList.add("settings-form__field", "animate-settings-button");
    p.style.animationDelay = delay;

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
    btn.classList.add(
      "settings-form__button",
      "settings-form__button--js",
      "fade-in"
    );
    btn.addEventListener("click", () => animateClickedButton(btn));

    return btn;
  }

  replaceEventListeners(escapeButton) {
    const updatedEscapeButton = escapeButton.cloneNode(true);
    escapeButton.replaceWith(updatedEscapeButton);
    updatedEscapeButton.classList.remove("btn-clicked");
    updatedEscapeButton.classList.add("fade-in");
    updatedEscapeButton.addEventListener("click", () => {
      removeAnimationClasses("remove from settings");
      animateClickedButton(updatedEscapeButton);
      updatedEscapeButton.onanimationend = () => {
        this.subscribers.onEscapeButtonEvent();
      };
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
    animateHeadingTitle(headingTitle);
  }

  subscribe(subscribers) {
    this.subscribers = { ...this.subscribers, ...subscribers };
  }
}

export default PlayersNamesView;
