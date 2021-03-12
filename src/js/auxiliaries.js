export const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }

  return shuffledArray;
};

export const deleteNodeChildrenExeptLastOne = (node) => {
  for (let i = node.children.length; i > 0; i--) {
    if (i === node.children.length) {
      continue;
    }
    node.children[i - 1].remove();
  }
};

export const deleteNodeBySelector = (selectors) => {
  for (let i = 0; i < selectors.length; i++) {
    document.querySelector(selectors[i]).remove();
  }
};

export const deleteNodeChildren = (node) => {
  for (let i = node.children.length; i > 0; i--) {
    node.children[i - 1].remove();
  }
};
