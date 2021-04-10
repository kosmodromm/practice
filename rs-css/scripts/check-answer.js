checkBtn.addEventListener("click", checkAnswer);

checkSelector.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    checkAnswer();
  }
});

helpBtn.addEventListener("click", () => {
  checkSelector.value = "";
  for (let i = 0; i < levels[currentLevel].answer.length; i++) {
    setTimeout(function () {
      checkSelector.value += levels[currentLevel].answer[i];
    }, i * 500);
    helpBtn.disabled = true;
  }
});

function checkAnswer() {
  const userAnswer = checkSelector.value;
  if (!userAnswer) {
    showError();
    return;
  }
  const userPickedElements = Array.from(gameView.querySelectorAll(userAnswer));
  const rightElements = Array.from(
    gameView.querySelectorAll(levels[currentLevel].answer)
  );
  if (userPickedElements.length !== rightElements.length) {
    showError();
    return;
  }
  for (let i = 0; i < userPickedElements.length; i++) {
    if (userPickedElements[i] !== rightElements[i]) {
      showError();
      return;
    }
  }

  for (let i = 0; i < userPickedElements.length; i++) {
    userPickedElements[i].classList.add("fly-from-table");
    gameViewChild.classList.remove("fly-from-table");
  }

  levelList.children[currentLevel].classList.add('completed');
  saveProgress();
  isWin();
  setTimeout(moveToNextLevel, 1000);
}

// if user write wrong selector
function showError() {
  cssEditor.classList.add("wrong-answer");
  setTimeout(() => cssEditor.classList.remove("wrong-answer"), 1500);
}

function saveProgress() {
  let completedLevels = JSON.parse(localStorage.getItem('completed') || '[]');
  completedLevels.push(currentLevel);
  localStorage.setItem('completed', JSON.stringify(completedLevels));
}

function isWin() {
  let completedLevels = JSON.parse(localStorage.getItem('completed') || '[]');
  if (completedLevels.length === levels.length) {
    alert ('hurray!');
  }
}