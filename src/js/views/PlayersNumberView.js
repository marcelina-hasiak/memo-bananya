import escapeButton from "../../assets/img/btn-back.svg";

import {
  animateClickedButton,
  removeAnimationClasses,
  animateHeadingTitle,
} from "../animations";
import {
  deleteNodeChildrenExeptLastOne,
  deleteNodeChildren,
} from "../auxiliaries";

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
        deleteNodeChildren(settingsBody);
        this.createSettingsButtons(settingsBody);
        settingsBody.append(this.createEscapeButton());
        break;
      }
      case "render from settings": {
        const escapeButton = settingsBody.querySelector(".btn-back--js");
        deleteNodeChildrenExeptLastOne(settingsBody);
        this.createSettingsButtons(settingsBody);
        this.replaceEventListeners(escapeButton);
        break;
      }
    }

    this.changeSettingsTitle();
  }

  createSettingsButtons(settingsBody) {
    settingsBody.prepend(
      this.createSettingsButton("YES", "2players", true, ".4s")
    );
    settingsBody.prepend(
      this.createSettingsButton("NO", "1player", false, ".2s")
    );

    return settingsBody;
  }

  createSettingsButton(name, selector, isLastChild, delay) {
    const btn = document.createElement("button");

    btn.classList.add(
      "settings__button",
      "settings__button--js",
      "animate-settings-button"
    );
    btn.style.animationDelay = delay;
    if (isLastChild) {
      btn.classList.add("settings__button--last-with-margin");
    }

    btn.setAttribute("data-playersNumber", selector);
    btn.textContent = name;

    btn.addEventListener("click", () => {
      removeAnimationClasses("remove from settings");
      animateClickedButton(btn);
      btn.onanimationend = () => {
        this.subscribers.getPlayersController(selector);
        this.subscribers.getPlayersNameView(selector);
      };
    });

    return btn;
  }

  createEscapeButton() {
    const btn = document.createElement("button");
    btn.classList.add(
      "btn-back",
      "settings__button-back",
      "btn-back--js",
      "fade-in"
    );

    const btnImage = document.createElement("img");
    btnImage.classList.add("full-size");
    btnImage.setAttribute("src", escapeButton);
    btnImage.setAttribute("alt", "Previous.");

    btn.append(btnImage);

    btn.addEventListener("click", () => {
      removeAnimationClasses("remove from settings");
      animateClickedButton(btn);
      btn.onanimationend = () => {
        this.subscribers.onEscapeButtonEvent();
      };
    });

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

  changeSettingsTitle() {
    const headingTitle = document.querySelector(".settings__title--js");
    headingTitle.textContent = PlayersNumberView.settingTitle;
    animateHeadingTitle(headingTitle);

    document
      .querySelector(".settings__bananya--js")
      .setAttribute(
        "alt",
        "Bananya presenting heading in speech bubble. Any friends with you?"
      );
  }

  subscribe(subscribers) {
    this.subscribers = { ...this.subscribers, ...subscribers };
  }
}

export default PlayersNumberView;
