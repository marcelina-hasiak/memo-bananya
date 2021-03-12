export const animateClickedButton = (btn) => {
  btn.classList.add("btn-clicked");
  btn.style.animationDelay = "0s";
};

export const removeAnimationClasses = (typeOfRemoval) => {
  switch (typeOfRemoval) {
    case "remove from settings": {
      const heading = document.querySelector(".settings__title--js");
      heading.classList.remove("animate-speech-bubble");

      const settingButtons = document.querySelectorAll(".settings__button--js");
      settingButtons.forEach((button) =>
        button.classList.remove("animate-settings-button")
      );

      const escapeButton = document.querySelector(".btn-back--js");
      if (escapeButton) {
        escapeButton.classList.remove("fade-in");
      }

      break;
    }
    case "remove from board": {
      const playerPanelContainer = document.querySelector(".player-panel--js");
      playerPanelContainer.classList.remove("fade-in");

      const refreshButton = document.querySelector(".btn-refresh--js");
      refreshButton.classList.remove("btn-clicked");

      break;
    }
  }
};

export const animateFooter = (typeOfAnimation) => {
  const madBananya = document.querySelector(".footer__bananya--js");
  const mouse = document.querySelector(".footer__mouse--js");

  switch (typeOfAnimation) {
    case "escape animation": {
      madBananya.classList.remove("animate-mad-bananya");
      madBananya.classList.add("animate-chasing-bananya");

      mouse.classList.remove("animate-mouse");
      mouse.classList.add("animate-escaping-mouse");
      break;
    }
    case "scare animation": {
      madBananya.classList.add("animate-mad-bananya");
      madBananya.classList.remove("animate-chasing-bananya");

      mouse.classList.add("animate-mouse");
      mouse.classList.remove("animate-escaping-mouse");
      break;
    }
  }
};

export const animateHeadingTitle = (headingTitle) => {
  headingTitle.classList.add("animate-speech-bubble");
};

export const animatePlayerPanel = () => {
  const playerPanelContainer = document.querySelector(".player-panel--js");
  playerPanelContainer.classList.add("fade-in");
};

export const fadeOutAnimation = (node) => {
  return node.animate({ opacity: [1, 0] }, 500);
}