/*============================================
=          Utilities: TODO APP               =
= Author: Alice Smith                        = 
=============================================*/
import * as todo from './todo.js';

const view = {
  listContainer: document.getElementById('todoList'),
  Todos: document.querySelectorAll('.item'),
  newTodo: document.forms[0],
  addButton: document.getElementById('addButton'),
  alerts: document.getElementById('alerts'),
  numSpan: document.getElementById('numSpan')
}

const helpers = {
  makeid() {
    let id = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  },

  eventListeners() {

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
        todo.todoHelpers.completeTodo(event.path[2]);
      }))
    });

    // filter buttons
    const allButton = document.getElementById('all');
    const activeButton = document.getElementById('active');
    const completedButton = document.getElementById('completed');
    allButton.addEventListener('click', this.filterAll);
    activeButton.addEventListener('click', this.filterActive);
    completedButton.addEventListener('click', this.filterCompleted);
  }
  ,
  filterAll() {
    console.log('filter all');
  },
  filterActive() {
    console.log('filter active');
  },
  filterCompleted() {
    console.log('filter complete');
  },

  getCount() {
    let complete = 0;
    todo.todoHelpers.myTodos.forEach(item => {
      if (item.status.find(x => x === 'completed')) {
        complete++
      }
    });
    view.numSpan.innerText = todo.todoHelpers.myTodos.length - complete;
  },
}


export {
  view,
  helpers
}