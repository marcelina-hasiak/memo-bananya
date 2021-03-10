import bananyaTitle from "../../assets/img/bananya-title.svg";
import bananyaSubtitle from "../../assets/img/bananya-subtitle.svg";
import chattingBananya from "../../assets/img/chatting-bananya.svg";
import speechBubble from "../../assets/img/speech-bubble.svg";

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
    this.changeSettingsTitle();
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

    const imageSpeechBubble = document.createElement("img");
    imageSpeechBubble.classList.add("settings__speech-bubble");
    imageSpeechBubble.setAttribute("src", speechBubble);

    const imageBananya = document.createElement("img");
    imageBananya.classList.add("settings__bananya", "settings__bananya--js", "animate-jumping-bananya");
    imageBananya.setAttribute("src", chattingBananya);

    const heading = document.createElement("h2");
    heading.classList.add("settings__title", "settings__title--js");

    settingsHeader.append(imageSpeechBubble, imageBananya, heading);

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
    settingsBody.append(this.createSettingsButton("EASY", "easy", false, '0s'));
    settingsBody.append(this.createSettingsButton("MEDIUM", "medium", false,'.2s'));
    settingsBody.append(this.createSettingsButton("HARD", "hard", true, '.4s'));
  }

  createSettingsButton(name, selector, isLastChild, delay) {
    const btn = document.createElement("button");

    btn.classList.add("settings__button", "settings__button--js", "animate-settings-button");
    btn.style.animationDelay = delay
    if (isLastChild) {
      btn.classList.add("settings__button--last-without-margin");
    }

    btn.setAttribute("data-level", selector);

    btn.textContent = name;

    btn.addEventListener("click", () => {
      this.removeAnimationClasses()
      this.animateClickedButton(btn)
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
    const headingTitle = document.querySelector(".settings__title--js")
    headingTitle.textContent = LevelView.settingTitle;
    headingTitle.classList.add("animate-speech-bubble");

    document
      .querySelector(".settings__bananya--js")
      .setAttribute(
        "alt",
        "Bananya presenting heading in speech bubble. Choose your level."
      );
  }

  revealFooterImage() {
    document.querySelector(".footer__images--js").classList.remove("remove");
    const madBananya = document.querySelector('.footer__bananya--js')
    const mouse = document.querySelector('.footer__mouse--js')
    madBananya.classList.add('animate-mad-bananya')
    mouse.classList.add('animate-mouse')
    madBananya.classList.remove('animate-chasing-bananya')
    mouse.classList.remove('animate-escaping-mouse')
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

  animateClickedButton(btn) {
    btn.style.animationDelay ='0s'
    btn.classList.add("btn-clicked")
  }

  removeAnimationClasses() {
    const heading = document.querySelector(".settings__title--js");
    heading.classList.remove('animate-speech-bubble');
    const settingButtons = document.querySelectorAll('.settings__button--js')
    settingButtons.forEach(button => button.classList.remove("animate-settings-button"))
  }
}

export default LevelView;
