/*============================================
=              Main JS: TODO APP             =
= Author: Alice Smith                        = 
=============================================*/
import * as todo from "./todo.js";
import {
  save
} from "./ls.js";
import {
  view
} from "./utilities.js";


//console.log(view.newTodo);

/* Adding event listeners for button clicks */
function eventListeners() {
  const dButtons = Object.values(document.getElementsByClassName('delete'));
  dButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      todo.todoHelpers.deleteTodo(event.path[1]);
      console.log(event.path[1])
    })
  });
};

view.addButton.addEventListener('click', (event) => {
  event.preventDefault();
  todo.todoHelpers.addTodo(view.newTodo.newItem.value);
  eventListeners();
})