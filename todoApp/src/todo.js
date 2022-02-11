/*============================================
=            ToDo Class: TODO APP            =
= Author: Alice Smith                        = 
=============================================*/

import {
  view,
  helpers
} from "./utilities.js";
import {
  save
} from "./ls.js";

export class Todo {
  constructor(name) {
    this.name = name;
    this.id = helpers.makeid();
    this.xIcon = "close";
  }
}

export const todoHelpers = {
  myTodos: {},
  getTodos() {

    for (const [key, value] of Object.entries(view.Todos)) {
      myTodos[key] = value.innerText;
    };
  },

  addTodo(info) {
    view.newTodo.newItem.value = '';
    const coolItem = new Todo(info);
    this.buildTodo(coolItem);
    save.saveNew(coolItem);
  },

  deleteTodo(deleteItem) {
    const Todelete = document.getElementById(deleteItem.id);
    view.listContainer.removeChild(Todelete);
    alert(`Item ${deleteItem.firstChild.innerText} removed!`)
  },

  buildTodo(item) {

    /* creating the disparate elements */
    const container = this.createItem('div', '', {
      class: 'itemContainer', id: item.id
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
    view.listContainer.appendChild(container);
  },

  createItem(name, content, attributes) {
    const newElement = document.createElement(name);
    for (const [key, value] of Object.entries(attributes)) {
      newElement.setAttribute(key, value);
    }
    newElement.innerText = content;
    return newElement;
  }
}