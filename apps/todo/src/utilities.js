/*============================================
=          Utilities: TODO APP               =
= Author: Alice Smith                        = 
=============================================*/

const view = {
  listContainer: document.getElementById('todoList'),
  Todos: document.querySelectorAll('.item'),
  newTodo: document.forms[0],
  addButton: document.getElementById('addButton'),
  alerts: document.getElementById('alerts')
}

const helpers = {
  makeid() {
    let id = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return id;
  }
}

export {view, helpers}