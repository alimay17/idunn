/* Hero Helpers object */

export const heroHelpers = {
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
      if (aName < bName) {
        return -1;
      } else if (aName > bName) {
        return 1;
      } else return 0;
    });
  },

  sortHeroesName(heroes) {
    return heroes.sort((a, b) => {
      let aName = a.realName.toLowerCase().split(' ');
      let bName = b.realName.toLowerCase().split(' ');
      if (aName[1] < bName[1]) {
        return -1;
      } else if (aName[1] > bName[1]) {
        return 1;
      } else return 0;
    });
  }
}


/* View and Render helpers Object */
export const view = {
  info: document.getElementById('info'),
  result: document.getElementById('result'),

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

  render(target, content) {
    target.innerHTML = content;
  }
}