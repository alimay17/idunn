/*============================================
=         JS for Forms - Week 04            =
= Author: Alice Smith                       =
=============================================*/

/*----------  Helpers  ----------*/
function show(element) {
  element.style.display = 'block';
}

function hide(element) {
  element.style.display = 'none';
}

/*----------  Basic Search Form  ----------*/
const searchForm = document.forms['search'];
const [input, button] = searchForm.elements;

function search(event) {
  let sDisplay = document.getElementById('searchResult');
  show(sDisplay);
  sDisplay.innerText = `You searched for: "${input.value}"`;
  event.preventDefault();
}
searchForm.addEventListener('submit', search, false);

/*----------  Make New Hero  ----------*/
const newHeroForm = document.forms['hero'];

function makeHero(event) {
  event.preventDefault();
  const hero = {};
  hero.name = newHeroForm.heroName.value;
  hero.realName = newHeroForm.realName.value;
  let display = document.getElementById('showHero');
  show(display);
  display.innerText = `Real Name: ${hero.realName}, Hero Name: ${hero.name}`;
  return hero;
}
newHeroForm.addEventListener('submit', makeHero, false);

/*----------  Basic Form Practice  ----------*/
const myForm = document.forms['example'];

// get form data
function processForms(event) {
  event.preventDefault();
  const formData = {};

  // assign
  formData.default = myForm.default.value;
  formData.password = myForm.password.value;
  formData.number = myForm.number.value;
  formData.search = myForm.search.value;
  formData.checkbox = myForm.checkbox.value;
  formData.color = myForm.color.value;
  const myDate = new Date(myForm.datetime.value);
  formData.datetime = myDate.toUTCString();
  formData.email = myForm.email.value;
  formData.file = myForm.file.value;
  formData.radio = myForm.radio.value;
  formData.range = myForm.range.value;
  formData.hidden = myForm.hidden.value;

  display(formData);
}

// display forms data
function display(data) {
  const display = document.getElementById('output');
  show(display);
  display.innerHTML = '';
  const ul = document.createElement('ul');
  for (const key in data) {
    const li = document.createElement('li');
    li.innerText = `${key}: ${data[key]}`;
    ul.appendChild(li);
  }
  display.appendChild(ul);
}

myForm.addEventListener('submit', processForms, false);

// initial page setup
hide(document.getElementById('searchResult'));
hide(document.getElementById('showHero'));
hide(document.getElementById('output'));