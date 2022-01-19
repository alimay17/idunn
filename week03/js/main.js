/*============================================
=         JS for My Heroes - Week 03         =
= Author: Alice Smith                        =
=============================================*/

/* Heroes Object */
const heroes = [{
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

  getHeroes(element, heroes) {
    const myDisplay = element;
    myDisplay.innerHTML = '';
    for (const hero of heroes) {
      let myHero = document.createElement('li');
      myHero.innerText = `${hero.alias} - Real Name: ${hero.realName}`;
      myDisplay.appendChild(myHero);
    }
  },

  sortHeroesAlias(heroes) {
    return heroes.sort((a, b) => {
      let aName = a.alias.toLowerCase();
      let bName = b.alias.toLowerCase();
      if ( aName < bName) {
        return -1;
      } else if (aName > bName) {
        return 1;
      } else return 0;
    });
  }, 
  sortHeroesName(heroes){
    return heroes.sort((a, b) => {
      let aName = a.realName.toLowerCase().split(' ');
      let bName = b.realName.toLowerCase().split(' ');
      if ( aName[1] < bName[1]) {
        return -1;
      } else if (aName[1] > bName[1]) {
        return 1;
      } else return 0;
    });
  }
}

// html element variables
const heroDisplay = heroHelpers.getElement('heroDisplay');
const toggleButton = heroHelpers.getElement('toggle');
const sort1Button = heroHelpers.getElement('sort1');
const sort2Button = heroHelpers.getElement('sort2');
const reset = heroHelpers.getElement('reset');

// initial state
heroHelpers.hide(heroDisplay);
heroHelpers.getHeroes(heroDisplay, heroes);

// event listeners
toggleButton.addEventListener('click', () => {
  heroHelpers.toggle(heroDisplay);
});

sort1Button.addEventListener('click', () => {
  const sorted = heroHelpers.sortHeroesAlias(heroes);
  heroHelpers.getHeroes(heroDisplay, sorted);
  heroHelpers.show(heroDisplay);
});

sort2Button.addEventListener('click', () => {
  const sorted = heroHelpers.sortHeroesName(heroes);
  heroHelpers.getHeroes(heroDisplay, sorted);
  heroHelpers.show(heroDisplay);
});

reset.addEventListener('click', ()=>{
window.location.reload();})