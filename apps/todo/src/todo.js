/*============================================
=     ToDo Class and helpers: TODO APP       =
= Author: Alice Smith                        = 
=============================================*/
import { view, helpers } from './utilities.js';
import { save } from './ls.js';

/*----------  ToDo Class  ----------*/
export class Todo {
  constructor(name) {
    this.name = name;
    this.active = true;
    this.classes = ['item'];
    this.id = helpers.makeid();
    this.xIcon = 'close';
  }
}

/*----------  ToDo helpers  ----------*/
export const todoHelpers = {
  myTodos: [],

  // Get toDo List
  getTodos(list = []) {
    view.listContainer.innerHTML = '';
    view.listContainer.style.display = 'block';
    if (list.length === 0) {
      this.myTodos.forEach(item => {
        this.buildTodo(item);
      });
    } else {
      list.forEach(item => {
        this.buildTodo(item)
      });
    }
    helpers.eventListeners();
    helpers.getCount();
  },

  // Add New Todo
  addTodo(name) {
    view.newTodo.newItem.value = '';
    if (!name) {
      return;
    }
    const newItem = new Todo(name);
    this.myTodos = this.myTodos || [];
    this.myTodos.push(newItem);

    this.getTodos();
    save.saveChange();
  },

  // Complete ToDo
  completeTodo(completeItem) {
    this.myTodos.forEach(item => {
      if (item.id === completeItem.id) {
        if (item.active === false) {
          item.classes.pop();
          item.active = true;
        } else {
          item.classes.push('completed');
          item.active = false;
        }
      }
      save.saveChange();
    });
    this.getTodos();
  },

  // Delete Todo
  deleteTodo(deleteItem) {
    this.myTodos.forEach(item => {
      if (item.id === deleteItem.id) {
        this.myTodos.splice(item, 1);
      }
      save.saveChange();
    });
    this.getTodos();
  },

  // Build ToDo for render
  buildTodo(item) {
    const container = helpers.createItem('div', 0, {
      class: 'itemContainer',
      id: item.id
    });
    const label = helpers.createItem('label');
    const check = helpers.createItem('input', 0, {
      type: 'checkbox'
    });
    const span = helpers.createItem('span', 0, {
      class: 'check'
    });
    const button = helpers.createItem('button', item.xIcon, {
      class: 'material-icons delete'
    });

    label.appendChild(check);
    label.appendChild(span);
    label.appendChild(document.createTextNode(item.name));
    item.classes.forEach(x => {
      label.classList.add(x);
    });
    container.appendChild(label);
    container.appendChild(button);

    view.listContainer.appendChild(container);
  },

  // Initialize
  setUp() {
    if (!this.myTodos) {
      return;
    }
    this.myTodos = save.getStorage();
    this.getTodos();
  }
}