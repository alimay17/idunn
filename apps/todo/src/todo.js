/*============================================
=            ToDo Class: TODO APP            =
= Author: Alice Smith                        = 
=============================================*/
import {
  view,
  helpers
} from './utilities.js';
import {
  save
} from './storage.js';

export class Todo {
  constructor(name) {
    this.name = name;
    this.status = ['item'];
    this.id = helpers.makeid();
    this.xIcon = 'close';
  }
}

export const todoHelpers = {
  myTodos: [],

  getTodos() {
    view.listContainer.innerHTML = '';
    if (this.myTodos) {
      for (const [key, value] of Object.entries(this.myTodos)) {
        this.buildTodo(value);
      };
    }
    helpers.eventListeners();
    helpers.getCount();
  },

  addTodo(name) {
    view.newTodo.newItem.value = '';

    const newItem = new Todo(name);
    this.myTodos = this.myTodos || [];
    this.myTodos.push(newItem);

    this.getTodos();
    save.saveChange();
  },

  completeTodo(completeItem) {
    for (const [key, value] of Object.entries(this.myTodos)) {
      if (value.id === completeItem.id) {
        if (value.status.find(e => e === 'completed')) {
          value.status.pop();
        } else {
          value.status.push('completed');
        }
      }
      save.saveChange();
    };

    this.getTodos();
  },

  deleteTodo(deleteItem) {
    for (const [key, value] of Object.entries(this.myTodos)) {
      if (value.id === deleteItem.id) {
        this.myTodos.splice(key, 1);
      }
      save.saveChange();
    };

    this.getTodos();
  },


  buildTodo(item) {
    /* creating the disparate elements */
    const container = this.createItem('div', '', {
      class: 'itemContainer',
      id: item.id
    });
    const label = this.createItem('label', '', '');
    const check = this.createItem('input', '', {
      type: 'checkbox'
    });
    const span = this.createItem('span', '', {
      class: 'check'
    });
    const button = this.createItem('button', item.xIcon, {
      class: 'material-icons delete'
    });

    /* Building the final Todo */
    label.appendChild(check);
    label.appendChild(span);
    label.appendChild(document.createTextNode(item.name));
    item.status.forEach(x => {
      label.classList.add(x);
    });
    container.appendChild(label);
    container.appendChild(button);

    /* Add to View */
    view.listContainer.appendChild(container);
  },

  createItem(name, content, attributes) {
    const newElement = document.createElement(name);
    for (const [key, value] of Object.entries(attributes)) {
      newElement.setAttribute(key, value);
    }
    newElement.innerText = content;
    return newElement
  },

  setUp() {
    if (!this.myTodos) {
      return;
    }
    this.myTodos = save.getStorage();
    this.getTodos();
  }
}