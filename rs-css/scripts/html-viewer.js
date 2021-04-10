htmlViewerCode.addEventListener("mouseover", function (event) {
  let child = event.target;

  if (child.classList.contains("html-code")) {
    return;
  }

  let sequence = getChildSequence(child, htmlViewerCode);
  setHighlight(sequence, true);
});

htmlViewerCode.addEventListener("mouseout", function (event) {
  let child = event.target;

  if (child.classList.contains("html-code")) {
    return;
  }

  let sequence = getChildSequence(child, htmlViewerCode);
  setHighlight(sequence, false);
});

function buildElem(level, parent) {
  for (let i = 0; i < level.children.length; i++) {
    const childDiv = document.createElement("div");
    childDiv.innerText = level.children[i].openTag;

    if (level.children[i].children) {
      buildElem(level.children[i], childDiv);
    }

    if (level.children[i].closeTag) {
      childDiv.append(level.children[i].closeTag);
    }

    parent.appendChild(childDiv);
  }
}

function buildHtml(level) {
  htmlViewerCode.innerHTML = "";
  const headDiv = document.createElement("div");
  headDiv.classList.add('html');
  headDiv.innerText = "<div class='rectangle'>";

  buildElem(level, headDiv);

  headDiv.append("</div>");
  htmlViewerCode.append(headDiv);
}

buildHtml(levels[currentLevel].html);
