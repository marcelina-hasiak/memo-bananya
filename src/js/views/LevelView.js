import chattingBananya from "../../assets/img/chatting-bananya.svg";
import bananyaTitle from "../../assets/img/bananya-title.svg";
import bananyaSubtitle from "../../assets/img/bananya-subtitle.svg";

class LevelView {
  static settingTitle = "CHOOSE YOUR LEVEL";

  constructor(typeOfRender, containerSelector) {
    this.render(typeOfRender, containerSelector);
    this.subscribers = {};
  }

  render(typeOfRender, containerSelector) {
    switch (typeOfRender) {
      case "first render": {
        this.createNodes(containerSelector);
        break;
      }
      case "render from settings": {
        const settingsBody = this.removeChildren(containerSelector);
        this.createSettingsButtons(settingsBody);
        break;
      }
      case "render from board": {
        this.revealFooterImage();
        this.deleteNodeBySelector([".board--js", ".player-panel--js"]);
        this.createNodes(containerSelector);
        break;
      }
      case "render from endgame": {
        this.revealFooterImage();
        this.deleteNodeBySelector([".player-panel--js", ".game-over"]);
        this.createNodes(containerSelector);
        break;
      }
    }
    this.changeSettingsHeader();
  }

  createNodes(containerSelector) {
    const appHeader = this.createAppHeader();
    const settingsHeader = this.createSettingsHeader();
    const settingsBody = this.createSettingsBody();
    this.createSettingsButtons(settingsBody);
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

    const image = document.createElement("img");
    image.classList.add("settings__bananya", "settings__bananya--js");
    image.setAttribute("src", chattingBananya);

    const heading = document.createElement("h2");
    heading.classList.add("settings__title", "settings__title--js");

    settingsHeader.append(image, heading);

    return settingsHeader;
  }

  createSettingsBody() {
    const settingsBody = document.createElement("div");
    settingsBody.classList.add("settings__body", "settings__body--js");

    return settingsBody;
  }

  removeChildren(containerSelector) {
    const settingsBody = document.querySelector(containerSelector);
    this.deleteNodeChildren(settingsBody);

    return settingsBody;
  }

  createSettingsButtons(settingsBody) {
    settingsBody.append(this.createSettingsButton("EASY", "easy"));
    settingsBody.append(this.createSettingsButton("MEDIUM", "medium"));
    settingsBody.append(this.createSettingsButton("HARD", "hard", true));
  }

  createSettingsButton(name, selector, isLastChild) {
    const btn = document.createElement("button");
    btn.classList.add("settings__button", "settings__button--js");
    btn.setAttribute("data-level", selector);
    btn.textContent = name;

    if (isLastChild) {
      btn.classList.add("settings__button--last-without-margin");
    }

    btn.addEventListener("click", () => {
      this.subscribers.getCurrentBoard(selector);
      this.subscribers.getPlayersNumberView();
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

  changeSettingsHeader() {
    document.querySelector(".settings__title--js").textContent =
      LevelView.settingTitle;
    document
      .querySelector(".settings__bananya--js")
      .setAttribute(
        "alt",
        "Bananya presenting heading in speech bubble. Choose your level."
      );
  }

  revealFooterImage() {
    document.querySelector(".footer__images--js").classList.remove("remove");
  }

  deleteNodeBySelector(selectors) {
    for (let i = 0; i < selectors.length; i++) {
      document.querySelector(selectors[i]).remove();
    }
  }

  deleteNodeChildren(node) {
    for (let i = node.children.length; i > 0; i--) {
      node.children[i - 1].remove();
    }
  }

  subscribe(subscribers) {
    this.subscribers = { ...this.subscribers, ...subscribers };
  }
}

export default LevelView;
