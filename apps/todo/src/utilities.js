/*============================================
=          Utilities: TODO APP               =
= Author: Alice Smith                        = 
=============================================*/
import { todoHelpers as todo } from "./todo.js";

/*----------  View Object  ----------*/
export const view = {
  listContainer: document.getElementById('todoList'),
  Todos: document.querySelectorAll('.item'),
  newTodo: document.forms[0],
  addButton: document.getElementById('addButton'),
  alerts: document.getElementById('alerts'),
  numSpan: document.getElementById('numSpan')
}

/*----------  Helper functions  ----------*/
export const helpers = {

  // make a random ID
  makeid() {
    let id = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  },

  // create new item
  createItem(name, content = 0, attributes = 0) {
    const newElement = document.createElement(name);
    if (attributes != 0) {
      for (const [key, value] of Object.entries(attributes)) {
        newElement.setAttribute(key, value);
      }
    }
    if (content != 0) {
      newElement.innerText = content;
    }
    return newElement
  },

  // add event listeners to all elements
  eventListeners() {
    // delete check
    const dButtons = Object.values(document.getElementsByClassName('delete'));
    dButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const itemId = event.target.value;
        todo.deleteTodo(itemId);
      })
    });

    // complete checks
    const completeCheck = Object.values(document.getElementsByClassName('check'));
    completeCheck.forEach(check => {
      check.addEventListener('click', (event => {
        const itemId = event.target.previousElementSibling.value;
        todo.completeTodo(itemId);
      }))
    });

    // add new item button
    view.addButton.addEventListener('click', (event) => {
      event.preventDefault();
      todo.addTodo(view.newTodo.newItem.value);
    })

    // filter buttons
    const allButton = document.getElementById('all');
    const activeButton = document.getElementById('active');
    const completedButton = document.getElementById('completed');
    allButton.addEventListener('click', this.filterAll);
    activeButton.addEventListener('click', this.filterActive);
    completedButton.addEventListener('click', this.filterCompleted);
  },


  /*----------  View Filters  ----------*/
  filterAll() {
    todo.getTodos();
  },

  // displays array of active ToDo Items
  filterActive() {
    const active = [];
    todo.myTodos.forEach(item => {
      if (item.active === true) {
        active.push(item);
      }
    });
    if (active.length > 0) {
      todo.getTodos(active);
    } else {
      view.listContainer.style.display = 'none';
    }
  },

  // displays array of completed ToDo Items
  filterCompleted() {
    const complete = [];
    todo.myTodos.forEach(item => {
      if (item.active === false) {
        complete.push(item);
      }
    });
    if (complete.length > 0) {
      todo.getTodos(complete);
    } else {
      view.listContainer.innerHTML = '';
    }
  },

  // displays count of active ToDo items
  getCount() {
    let complete = 0;
    todo.myTodos.forEach(item => {
      if (item.active === false) {
        complete++
      }
    });
    view.numSpan.innerText = todo.myTodos.length - complete;
  },
}