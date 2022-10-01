/*============================================
=         JS for My Heroes - Week 03         =
= Author: Alice Smith                        =
=============================================*/

/* Import Modules */
import { heroHelpers, view } from "./helpers.js";
import { heroes } from "./heroes.js";
import { game} from "./game.js";

/* DOM Element Variables */
const heroDisplay = view.getElement('heroDisplay');
const toggleButton = view.getElement('toggle');
const sort1Button = view.getElement('sort1');
const sort2Button = view.getElement('sort2');
const resetButton = view.getElement('reset');
const scoreButton = view.getElement('scoreButton');
const quizButton = view.getElement('quiz');

/* Initial State */
heroHelpers.getHeroes(heroDisplay, heroes);
view.show(heroDisplay);
view.hide(result);
view.hide(info);
/* Event Listeners */
toggleButton.addEventListener('click', () => {
  view.toggle(heroDisplay);
});

sort1Button.addEventListener('click', () => {
  const sorted = heroHelpers.sortHeroesAlias(heroes);
  heroHelpers.getHeroes(heroDisplay, sorted);
  view.show(heroDisplay);
});

sort2Button.addEventListener('click', () => {
  const sorted = heroHelpers.sortHeroesName(heroes);
  heroHelpers.getHeroes(heroDisplay, sorted);
  view.show(heroDisplay);
});

resetButton.addEventListener('click', () => {
  localStorage.clear();
  view.hide(view.result);
});

quizButton.addEventListener('click', ()=>{
  view.hide(heroDisplay);
  view.hide(view.result);
  setTimeout(()=>game.start(heroes), 1);
});

scoreButton.addEventListener('click', ()=>{
  game.getScore();
  view.show(view.result);
});



