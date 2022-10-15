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
    this.id = helpers.makeid();
    this.xIcon = 'close';
  }
}

export const todoHelpers = {
  myTodos: [],
  completedTodos: [],

  getTodos() {
    view.listContainer.innerHTML = '';
    if (this.myTodos) {
      for (const [key, value] of Object.entries(this.myTodos)) {
        this.buildTodo(value);
      };
    }
  },

  addTodo(name) {
    view.newTodo.newItem.value = '';

    const coolItem = new Todo(name);
    this.myTodos = this.myTodos || [];
    this.myTodos.push(coolItem);

    todoHelpers.getTodos();
    save.saveChange();
  },

  completeTodo(completeItem) {
    this.completeTodo.push(completeItem);
    save.saveComplete();
    this.deleteTodo(completeItem);

    alert(`Item ${completeItem.firstChild.innerText} removed`);
  },

  deleteTodo(deleteItem) {
    for (const [key, value] of Object.entries(this.myTodos)) {
      if (value.id === deleteItem.id) {
        this.myTodos.splice(key, 1);
      }
      save.saveChange();
    };

    this.getTodos();
    alert(`Item ${deleteItem.firstChild.innerText} removed`);
  },

  buildTodo(item) {
    /* creating the disparate elements */
    const container = this.createItem('div', '', {
      class: 'itemContainer',
      id: item.id
    });
    const label = this.createItem('label', '', {
      class: 'item'
    });
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
    container.appendChild(label);
    container.appendChild(button);

    /* Add to View */
    console.log('added new item to view');
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