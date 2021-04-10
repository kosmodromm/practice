const pageWrapper = createElement('div', 'page-wrapper');

const header = createElement("header", "header");
pageWrapper.appendChild(header);

const title = createElement('h1', 'title', "RS CSS");
header.appendChild(title);

const main = document.createElement("main");
pageWrapper.appendChild(main);

const wrapper = createElement("div", "wrapper");
main.appendChild(wrapper);

const footer = createElement("footer", "footer");
pageWrapper.appendChild(footer);

const gitHub = createElement('a', 'github');
gitHub.href = "https://github.com/kosmodromm";
footer.appendChild(gitHub);

const gitHubImg = createElement('img', 'github-img');
gitHubImg.src = "./media/svg/github.svg";
gitHubImg.alt = "github";
gitHub.appendChild(gitHubImg);

const year = createElement('p', 'year', '2020');
footer.appendChild(year);

const rss = createElement('a', 'rss');
rss.href = "https://app.rs.school/";
footer.appendChild(rss);

const rssImg = createElement('img', 'rss-img');
rssImg.src = "./media/svg/rs_school_js.svg";
rssImg.alt = "rss";
rss.appendChild(rssImg);

const gameElements = createElement("section", "game-elements");
wrapper.append(gameElements);

const gameView = createElement("div", "game-view");
gameElements.append(gameView);

const gameEditor = createElement("div", "game-editor");
gameElements.append(gameEditor);

const cssEditor = createElement("div", "css-editor");
gameEditor.append(cssEditor);

const cssEditorHeader = createElement("div", "html-header", "CSS Editor");
cssEditor.append(cssEditorHeader);

const cssEditorContent = createElement("div", "css-content");
cssEditorContent.classList.add("css-content");
cssEditor.append(cssEditorContent);

const htmlViewer = createElement("div", "html-viewer");
gameEditor.append(htmlViewer);

const htmlViewerHeader = createElement("div", "html-header", "HTML Viewer");
htmlViewer.append(htmlViewerHeader);

const htmlViewerContent = createElement("div", "html-content");
htmlViewer.append(htmlViewerContent);

const htmlViewerOrder = createElement("div", "html-order");
for (let i=1;i<15;i++) {
  htmlViewerOrder.innerHTML += i + '<br>';
}
htmlViewerContent.append(htmlViewerOrder);

const htmlViewerCode = createElement("div", "html-code");
htmlViewerContent.append(htmlViewerCode);

const gameViewChild = createElement("div", "playground");
gameView.append(gameViewChild);

const cssEditorOrder = htmlViewerOrder.cloneNode(true);
cssEditorContent.append(cssEditorOrder);

const checkSelector = createElement("input");
cssEditorContent.append(checkSelector);

const checkBtn = createElement("button", "enter", "Enter");
cssEditorContent.append(checkBtn);

const levelStatus = createElement("aside", "level-status");
wrapper.append(levelStatus);

const levelButtons = createElement('div', 'level-buttons');
levelStatus.appendChild(levelButtons);

const nextLevelBtn = createElement("button", 'next-level', 'Next Level');
levelButtons.append(nextLevelBtn);

const resetBtn = createElement("button", 'reset-game', 'Reset');
levelButtons.append(resetBtn);

const menuBurger = createElement('button', 'burger', 'LVL MENU');
main.append(menuBurger);

const helpBtn = createElement("button", "help", "Help");
main.append(helpBtn);

const fadeBg = createElement('div', 'fade-bg');
pageWrapper.append(fadeBg);

document.body.appendChild(pageWrapper);

function createElement(el, className, content = '') {
  const block = document.createElement(el);
  block.classList.add(className);
  block.innerHTML = content;
  return block;
}
