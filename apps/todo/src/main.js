/*============================================
=              Main JS: TODO APP             =
= Author: Alice Smith                        = 
=============================================*/

import * as todo from './todo.js';
import { view } from './utilities.js';

function start() {
  todo.todoHelpers.setUp();
}


view.addButton.addEventListener('click', (event) => {
  event.preventDefault();
  todo.todoHelpers.addTodo(view.newTodo.newItem.value);
})



start();