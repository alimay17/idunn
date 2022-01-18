/*============================================
=         JS for My Heroes - Week 03         =
= Author: Alice Smith                        =
=============================================*/

/* Heroes Object */
export const heroes = [{
  alias: "Superman",
  realName: "Clark Kent"
},
{
  alias: "Wonder Woman",
  realName: "Diana Prince"
},
{
  alias: "Batman",
  realName: "Bruce Wayne"
},
{
  alias: "Tarzan",
  realName: "John Clayton"
}
]

/* My Heroes namespace object */
const heroHelpers = {
  show(element) {
    element.style.display = 'block';
  },
  hide(element) {
    element.style.display = 'none';
  },
  toggle(element) {
    element.style.display === "block" ? element.style.display = "none" :
      element.style.display = "block";
  },

  getElement(string) {
    return document.getElementById(string);
  },

  getInput(element) {
    return this.getElement(element).value;
  },

  addHero(list,...input) {
    const newHero = {
      alias: this.getInput(input)
    };
    console.log(newHero.alias);
    if (newHero.alias != '') {
      heroArray.push(newHero)
      alert(`${newHero.alias} has been successfully added`)
    } else {
      alert('Please enter a name');
    }
  },
  removeHero(input){

  },

  getHeroes(element, heroes) {
    const myDisplay = element;
    myDisplay.innerHTML = '';
    for (const hero of heroes) {
      let myHero = document.createElement('li');
      myHero.innerText = `${hero.alias}`;
      myDisplay.appendChild(myHero);
    }
  }
}


const heroDisplay = heroHelpers.getElement('heroDisplay');
const showButton = heroHelpers.getElement('show');
const addButton = heroHelpers.getElement('add');
const removeButton = heroHelpers.getElement('remove');
const heroAdd = heroHelpers.getElement('heroAdd');
const submitAdd = heroHelpers.getElement('submitAdd');
const heroRemove = heroHelpers.getElement('heroRemove');


heroHelpers.hide(heroAdd);
heroHelpers.hide(heroRemove);

showButton.addEventListener('click', () => {
  heroHelpers.toggle(heroDisplay);
  heroHelpers.getHeroes(heroDisplay, heroes);
  heroHelpers.hide(heroAdd);
  heroHelpers.hide(heroRemove);
});

addButton.addEventListener('click', () => {
  heroHelpers.show(heroAdd);
  heroHelpers.hide(heroDisplay);
  heroHelpers.hide(heroRemove);
});

removeButton.addEventListener('click', () => {
  heroHelpers.show(heroRemove);
  heroHelpers.hide(heroDisplay);
  heroHelpers.hide(heroAdd);
});

submitAdd.addEventListener('click', () => {
  
  heroHelpers.addHero('heroAlias', heroes)
  heroHelpers.hide(heroAdd);
});