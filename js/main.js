/*=============================================
=        Main Javascript Page for Idunn       =
= Author: Alice Smith                         =
=============================================*/

import { navLinks } from './navlinks.js';
/* Create a dynamic menu from array data */
function buildMenu(myMenu) {
  const navDisplay = document.getElementById('myNav');
  myMenu.map(element => {
    let aLink = document.createElement('a');
    aLink.href = element.URL;
    aLink.id = element.ID;
    aLink.textContent = element.Label;

    let aListItem = document.createElement('li');
    aListItem.appendChild(aLink);

    navDisplay.appendChild(aListItem);
  });
}

buildMenu(navLinks);