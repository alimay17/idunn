/*============================================
=         JS for My Heroes - Week 03         =
= Author: Alice Smith                        =
=============================================*/
import { heroes } from "./heroes.js";

const display = 'heroDisplay'

for(const [key, value] of Object.entries(heroes)) {
  console.log(key);
  for(const [innerKey, innerValue] of Object.entries(value)) {
    let myHero = document.createElement(li);
    myHero.value = `${innerKey}: ${innerValue}`;
    myHelpers.display()
  }
}
