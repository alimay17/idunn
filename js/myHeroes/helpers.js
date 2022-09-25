/* Hero Helpers object */
export const heroHelpers = {
  getHeroes(element, heroes) {
    const myDisplay = element;

    // initial table setup
    myDisplay.innerHTML = '';
    let table = document.createElement('tr');
    let header1 = document.createElement('th');
    let header2 = document.createElement('th');
    header1.innerText = 'Real Name';
    table.appendChild(header1);
    header2.innerText = 'Alias';
    table.appendChild(header2);
    myDisplay.appendChild(table);

    // add hero data
    for (const hero of heroes) {
      let myHero = document.createElement('tr');
      let alias = document.createElement('td');
      let realName = document.createElement('td');
      alias.innerText = hero.alias;
      realName.innerText = hero.realName;
      myHero.appendChild(realName);
      myHero.appendChild(alias);
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

/* View and Render helpers object */
export const view = {
  info: document.getElementById('info'),
  result: document.getElementById('result'),

  show(element) {

    if (element.nodeName == 'TABLE') {
      element.style.display = 'table';
    } else {
      element.style.display = 'block';
    }
  },

  hide(element) {
    element.style.display = 'none';
  },

  toggle(element) {
    if (element.style.display === 'block') {
      element.style.display = 'none'
    } else if (element.style.display === 'table') {
      element.style.display = 'none'
    } else if (element.nodeName == 'TABLE') {
      element.style.display = 'table';
    } else {
      element.style.display = 'block';
    }
  },

  getElement(string) {
    return document.getElementById(string);
  },

  render(target, content) {
    target.innerHTML = content;
  }
}