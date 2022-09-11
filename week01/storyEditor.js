/*============================================
=         JS for Story Editor - Week 01      =
= Original Author: Lee Barney                =
= Customized: Alice Smith                    =
=============================================*/
function loadStory() {
  const storyName = document.getElementById('nameInput').value;
  const storyHTML = localStorage.getItem(storyName);
  const storyEditor = document.getElementById('storyEditor');

  storyEditor.value = storyHTML;
}

function saveStory() {
  const storyName = document.getElementById('nameInput').value;
  const storyHTML = document.getElementById('storyEditor').value;

  localStorage.setItem(storyName, storyHTML);
}

function displayStory() {
  const storyHTML = document.getElementById('storyEditor').value;
  const storyDisplay = document.getElementById('storyDisplay');

  storyDisplay.innerHTML = storyHTML;
}

const loadButton = document.getElementById('load');
const saveButton = document.getElementById('save');
const displayButton = document.getElementById('display');

loadButton.addEventListener('click', loadStory);
saveButton.addEventListener('click', saveStory);
displayButton.addEventListener('click', displayStory);