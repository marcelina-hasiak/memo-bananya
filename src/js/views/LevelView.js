import bananyaTitle from "../../assets/img/bananya-title.svg";
import bananyaSubtitle from "../../assets/img/bananya-subtitle.svg";
import chattingBananya from "../../assets/img/chatting-bananya.svg";
import speechBubble from "../../assets/img/speech-bubble.svg";

import {
  animateClickedButton,
  removeAnimationClasses,
  animateHeadingTitle,
  animateFooter,
} from "../animations";
import { deleteNodeBySelector, deleteNodeChildren } from "../auxiliaries";

class LevelView {
  static settingTitle = "CHOOSE YOUR LEVEL";

  constructor(typeOfRender, containerSelector) {
    this.render(typeOfRender, containerSelector);
    this.subscribers = {};
  }

  render(typeOfRender, containerSelector) {
    switch (typeOfRender) {
      case "first render": {
        this.createAppContent(containerSelector);
        break;
      }
      case "render from settings": {
        const settingsBody = this.removeChildren(containerSelector);
        this.createSettingsButtons(settingsBody);
        break;
      }
      case "render from board": {
        this.revealFooterImage();
        deleteNodeBySelector([".board--js", ".player-panel--js"]);
        this.createAppContent(containerSelector);
        break;
      }
      case "render from endgame": {
        this.revealFooterImage();
        deleteNodeBySelector([".player-panel--js", ".game-over"]);
        this.createAppContent(containerSelector);
        break;
      }
    }
    this.changeSettingsTitle();
  }

  createAppContent(containerSelector) {
    const appHeader = this.createAppHeader();
    const settingsHeader = this.createSettingsHeader();
    const settingsBody = this.createSettingsBody();

    const settingsContainer = this.createSettingsContainer(
      settingsHeader,
      settingsBody
    );
    this.attachToContainer(containerSelector, appHeader, settingsContainer);
  }

  createAppHeader() {
    const appHeader = document.createElement("header");
    appHeader.classList.add("application__header", "application__header--js");

    const appHeading = document.createElement("h1");
    appHeading.classList.add("application-heading");

    const imageTitle = document.createElement("img");
    imageTitle.classList.add("application-heading__logo");
    imageTitle.setAttribute("src", bananyaTitle);
    imageTitle.setAttribute("alt", "Bananya memo game.");

    const imageSubtitle = document.createElement("img");
    imageSubtitle.classList.add("application-heading__subtitle");
    imageSubtitle.setAttribute("src", bananyaSubtitle);
    imageSubtitle.setAttribute("alt", "");

    appHeading.append(imageTitle, imageSubtitle);
    appHeader.append(appHeading);

    return appHeader;
  }

  createSettingsHeader() {
    const settingsHeader = document.createElement("div");
    settingsHeader.classList.add("settings__header");

    const imageSpeechBubble = document.createElement("img");
    imageSpeechBubble.classList.add("settings__speech-bubble");
    imageSpeechBubble.setAttribute("src", speechBubble);

    const imageBananya = document.createElement("img");
    imageBananya.classList.add(
      "settings__bananya",
      "settings__bananya--js",
      "animate-jumping-bananya"
    );
    imageBananya.setAttribute("src", chattingBananya);

    const heading = document.createElement("h2");
    heading.classList.add("settings__title", "settings__title--js");

    settingsHeader.append(imageSpeechBubble, imageBananya, heading);

    return settingsHeader;
  }

  createSettingsBody() {
    const settingsBody = document.createElement("div");
    settingsBody.classList.add("settings__body", "settings__body--js");
    this.createSettingsButtons(settingsBody);

    return settingsBody;
  }

  removeChildren(containerSelector) {
    const settingsBody = document.querySelector(containerSelector);
    deleteNodeChildren(settingsBody);

    return settingsBody;
  }

  createSettingsButtons(settingsBody) {
    settingsBody.append(this.createSettingsButton("EASY", "easy", false, "0s"));
    settingsBody.append(
      this.createSettingsButton("MEDIUM", "medium", false, ".2s")
    );
    settingsBody.append(this.createSettingsButton("HARD", "hard", true, ".4s"));
  }

  createSettingsButton(name, selector, isLastChild, delay) {
    const btn = document.createElement("button");

    btn.classList.add(
      "settings__button",
      "settings__button--js",
      "animate-settings-button"
    );
    if (isLastChild) {
      btn.classList.add("settings__button--last-without-margin");
    }
    btn.style.animationDelay = delay;
    btn.setAttribute("data-level", selector);
    btn.textContent = name;

    btn.addEventListener("click", () => {
      removeAnimationClasses("remove from settings");
      animateClickedButton(btn);
      btn.onanimationend = () => {
        this.subscribers.getCurrentBoard(selector);
        this.subscribers.getPlayersNumberView();
      };
    });

    return btn;
  }

  createSettingsContainer(settingsHeader, settingsBody) {
    const settingsContainer = document.createElement("section");
    settingsContainer.classList.add(
      "application__body",
      "application__body--js",
      "settings"
    );

    settingsContainer.append(settingsHeader, settingsBody);

    return settingsContainer;
  }

  attachToContainer(containerSelector, appHeader, settingsContainer) {
    document
      .querySelector(containerSelector)
      .append(appHeader, settingsContainer);
  }

  changeSettingsTitle() {
    const headingTitle = document.querySelector(".settings__title--js");
    headingTitle.textContent = LevelView.settingTitle;
    animateHeadingTitle(headingTitle);

    document
      .querySelector(".settings__bananya--js")
      .setAttribute(
        "alt",
        "Bananya presenting heading in speech bubble. Choose your level."
      );
  }

  revealFooterImage() {
    document.querySelector(".footer__images--js").classList.remove("remove");
    animateFooter("scare animation");
  }

  subscribe(subscribers) {
    this.subscribers = { ...this.subscribers, ...subscribers };
  }
}

export default LevelView;
