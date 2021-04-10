gameViewChild.innerHTML = htmlViewerCode.innerText;

gameViewChild.addEventListener("mouseover", function (event) {
  let child = event.target;

  if (child.classList.contains("playground")) {
    return;
  }

  let sequence = getChildSequence(child, gameViewChild);
  setHighlight(sequence, true);
});

gameViewChild.addEventListener("mouseout", function (event) {
  let child = event.target;

  if (child.classList.contains("playground")) {
    return;
  }

  let sequence = getChildSequence(child, gameViewChild);
  setHighlight(sequence, false);
});
