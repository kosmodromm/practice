
let currentLevel = +localStorage.getItem('lvl') || 0; 
const levels = [
  {
    html: {
      children: [
        {
          openTag: "<square>",
          closeTag: "</square>",
        },
        {
          openTag: "<square>",
          closeTag: "</square>",
        },
      ],
    },
    answer: "square",
    objective: "Select squares",
    name: "Type Selector",
    id: "1",
  },
  {
    html: {
      children: [
        {
          openTag: "<round>",
          closeTag: "</round>",
        },
        {
          openTag: "<square>",
          closeTag: "</square>",
        },
        {
          openTag: "<round>",
          closeTag: "</round>",
        },
      ],
    },
    answer: "round",
    objective: "Select rounds",
    name: "Type Selector",
    id: "2",
  },
  {
    html: {
      children: [
        {
          openTag: "<square id='fancy'>",
          closeTag: "</square>",
        },
        {
          openTag: "<square>",
          closeTag: "</square>",
        },
        {
          openTag: "<round>",
          closeTag: "</round>",
        },
      ],
    },
    answer: "#fancy",
    objective: "Select fancy square",
    name: "ID Selector",
    id: "3",
  },
  {
    html: {
      children: [
        {
          openTag: "<round>",
          closeTag: "</round>",
        },
        {
          openTag: "<square>",
          children: [
            {
              openTag: "<rectangle/>",
            },
          ],
          closeTag: "</square>",
        },
        {
          openTag: "<rectangle>",
          closeTag: "</rectangle>",
        },
      ],
    },
    answer: "square>rectangle",
    objective: "Select rectangle inside square",
    name: "Descendant Selector",
    id: "4",
  },
  {
    html: {
      children: [
        {
          openTag: "<round>",
          children: [
            {
              openTag: "<rectangle/>",
            },
          ],
          closeTag: "</round>",
        },
        {
          openTag: "<square id='fancy'>",
          children: [
            {
              openTag: "<circle/>",
            },
          ],
          closeTag: "</square>",
        },
        {
          openTag: "<square>",
          children: [
            {
              openTag: "<circle/>",
            },
          ],
          closeTag: "</square>",
        },
      ],
    },
    answer: "#fancy>circle",
    objective: "Select the circle on the fancy square",
    name: "Descendant & ID Selector",
    id: "5",
  },
  {
    html: {
      children: [
        {
          openTag: "<round>",
          closeTag: "</round>",
        },
        {
          openTag: "<round class='small'>",
          closeTag: "</round>",
        },
        {
          openTag: "<square>",
          children: [
            {
              openTag: "<round class='small'/>",
            },
          ],
          closeTag: "</square>",
        },
        {
          openTag: "<square>",
          closeTag: "</square>",
        },
      ],
    },
    answer: ".small",
    objective: "Select the small rounds",
    name: "Class Selector",
    id: "6",
  },
  {
    html: {
      children: [
        {
          openTag: "<round>",
          closeTag: "</round>",
        },
        {
          openTag: "<round class='small'>",
          closeTag: "</round>",
        },
        {
          openTag: "<round>",
          children: [
            {
              openTag: "<square class='small'>",
              closeTag: "</square>",
            },
          ],
          closeTag: "</round>",
        },
        {
          openTag: "<round>",
          children: [
            {
              openTag: "<square/>",
            },
          ],
          closeTag: "</round>",
        },

        {
          openTag: "<square>",
          children: [
            {
              openTag: "<square class='small'/>",
            },
          ],
          closeTag: "</square>",
        },
      ],
    },
    answer: "square.small",
    objective: "Select the small squares",
    name: "Class Selector",
    id: "7",
  },
  {
    html: {
      children: [
        {
          openTag: "<square>",
          children: [
            {
              openTag: "<round/>",
            },
          ],
          closeTag: "</square>",
        },
        {
          openTag: "<round class='small'>",
          closeTag: "</round>",
        },
        {
          openTag: "<square>",
          children: [
            {
              openTag: "<round class='small'>",
              closeTag: "</round>",
            },
          ],
          closeTag: "</square>",
        },
        {
          openTag: "<square>",
          children: [
            {
              openTag: "<square class='small'>",
              closeTag: "</square>",
            },
          ],
          closeTag: "</square>",
        },
        {
          openTag: "<square>",
          children: [
            {
              openTag: "<round class='small'>",
              closeTag: "</round>",
            },
          ],
          closeTag: "</square>",
        },
      ],
    },
    answer: "square>round.small",
    objective: "Select the small rounds in squares",
    name: "Class Selector",
    id: "8",
  },
  {
    html: {
      children: [
        {
          openTag: "<circle/>",
          closeTag: "</circle>",
        },
        {
          openTag: "<round>",
          children: [
            {
              openTag: "<circle class='small'/>",
            },
          ],
          closeTag: "</round>",
        },
        {
          openTag: "<square>",
          children: [
            {
              openTag: "<circle class='small'>",
              closeTag: "</circle>",
            },
          ],
          closeTag: "</square>",
        },
        {
          openTag: "<round>",
          children: [
            {
              openTag: "<circle class='small'/>",
            },
          ],
          closeTag: "</round>",
        },
        {
          openTag: "<circle class='small'/>",
        },
      ],
    },
    answer: "square, round",
    objective: "Select all rounds and squares",
    name: "Class Selector",
    id: "9",
  },
  {
    html: {
      children: [
        {
          openTag: "<round>",
          closeTag: "</round>",
        },
        {
          openTag: "<round>",
          children: [
            {
              openTag: "<circle class='small'/>",
            },
          ],
          closeTag: "</round>",
        },
        {
          openTag: "<square>",
          closeTag: "</square>",
        },
        {
          openTag: "<square>",
          children: [
            {
              openTag: "<circle>",
              closeTag: "</circle>",
            },
          ],
          closeTag: "</square>",
        },
        {
          openTag: "<square id='fancy'>",
          closeTag: "</square>",
        },
      ],
    },
    answer: "*",
    objective: "Select all the things!",
    name: "The Universal Selector",
    id: "10",
  },
];

nextLevelBtn.addEventListener("click", moveToNextLevel);

function moveToNextLevel() {
  if (levels.length === currentLevel + 1) {
    console.log("wrong level");
    return;
  }

  moveToLevel(currentLevel+1);
}

let levelList = document.createElement('div');
levelList.classList.add('level-list');

levelStatus.appendChild(levelList);

let completedLevels = JSON.parse(localStorage.getItem('completed') || '[]');

function levelListInit () {

  while (levelList.firstChild) {
    levelList.removeChild(levelList.firstChild);
  }

  for (let i = 0; i < levels.length; i++){
    let level = document.createElement('a');
    let levelName = document.createElement('h3');
    let levelObjective = document.createElement('p');
    levelList.appendChild(level);
    level.innerHTML = levels[i].id;
    level.appendChild(levelName);
    level.appendChild(levelObjective);
    levelName.innerHTML = levels[i].name;
    levelObjective.innerHTML = levels[i].objective;

    if (completedLevels.indexOf(i) !== -1) {
      level.classList.add('completed');
    } else {level.classList.remove('completed');}

    if (i === currentLevel) {
      levelList.children[currentLevel].classList.add('selected');
    }
    
  level.addEventListener('click', () => moveToLevel(i)); 
  };
}

levelListInit();

function moveToLevel(lvl) {
  levelList.children[currentLevel].classList.remove('selected');
  checkSelector.value = "";
  currentLevel = lvl;
  buildHtml(levels[lvl].html);
  gameViewChild.innerHTML = htmlViewerCode.innerText;
  localStorage.setItem('lvl', lvl);
  levelList.children[currentLevel].classList.add('selected');
  helpBtn.disabled = false;
  }


resetBtn.addEventListener('click', () => {
  localStorage.removeItem('lvl');
  localStorage.removeItem('completed');
  moveToLevel(0);
  levelListInit();
});

menuBurger.addEventListener('click', () => {
  if (levelStatus.classList.contains('visible')) {
    levelStatus.classList.remove('visible');
    fadeBg.classList.remove('display');
    resetBtn.classList.remove('display');
  } else {
    levelStatus.classList.add('visible');
    fadeBg.classList.add('display');
    resetBtn.classList.add('display');
  }
});