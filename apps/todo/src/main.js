/*============================================
=              Main JS: TODO APP             =
= Author: Alice Smith                        = 
=============================================*/

import { save } from './storage.js';
import * as todo from './todo.js';
import { view } from './utilities.js';

function start() {
  todo.todoHelpers.setUp();
  eventListeners();
}

function eventListeners() {

  // delete check
  const dButtons = Object.values(document.getElementsByClassName('delete'));
  dButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      todo.todoHelpers.deleteTodo(event.path[1]);
    })
  });

  // complete checks
  const completeCheck = Object.values(document.getElementsByClassName('check'));
  completeCheck.forEach(check => {
    check.addEventListener('click', (event => {
      todo.todoHelpers.deleteTodo(event.path[2]);
    }))
  })
};

view.addButton.addEventListener('click', (event) => {
  event.preventDefault();
  //console.log(view.newTodo.newItem.value);
  todo.todoHelpers.addTodo(view.newTodo.newItem.value);
  //eventListeners();
})

start();