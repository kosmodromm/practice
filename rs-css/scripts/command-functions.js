function setHighlight(sequence, highlight) {
  let targetOne = htmlViewerCode;
  let targetTwo = gameViewChild;

  for (let i = 0; i < sequence.length; i++) {
    targetOne = targetOne.children[sequence[i]];
    targetTwo = targetTwo.children[sequence[i]];
  }

  if (highlight) {
    showMessage(elementToString(targetTwo));
    targetOne.classList.add("highlight");
    targetTwo.classList.add("highlight");
  } else {
    targetOne.classList.remove("highlight");
    targetTwo.classList.remove("highlight");
    hideMessage();
  }
}

function getChildSequence(child, topParent) {
  let sequence = [];
  let node;

  do {
    node = child.parentElement;
    sequence.unshift([...node.children].indexOf(child));
    child = child.parentElement;
  } while (node !== topParent);

  return sequence;
}

function showMessage(text) {
  let message = document.createElement("div");
  message.classList.add("message");
  message.innerText = text;
  gameViewChild.append(message);
}

function hideMessage() {
  let message = gameViewChild.querySelector(".message");
  if (message) {
    gameViewChild.removeChild(message);
  }
}

function elementToString(elem) {
  return elem.outerHTML.replace(elem.innerHTML, "").replace(` class=""`, "");
}
