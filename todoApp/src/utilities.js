/*============================================
=          Utilities: TODO APP               =
= Author: Alice Smith                        = 
=============================================*/

const view = {
  Todos: document.querySelectorAll('.item'),
  newTodo: document.forms[1],

  buildNew(item) {
    const xIcon = '&#xE5CD';
    const container = this.createItem('div', '', {class:'itemContainer'});
    const label = this.createItem('label', item.name, {class: 'item'});
    const check = this.createItem('input', '', {class: 'checkbox', id: item.id});
    const span = this.createItem('span', '', {class: 'check'});
    const button = this.createItem('button', xIcon, {class: 'material-icons'});

  },


  createItem(name, content, attributes) {
    const newElement = document.createElement(name);
    for (const key in attributes) {
      if (Object.hasOwnProperty.call(attributes, key)) {
        newElement.setAttribute(key, attributes[key]);
      }
    }
    console.log(name);
    newElement.innerText = content;
    console.log(newElement);
    return newElement;
  }
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




const myTodos = {}
for (const [key, value] of Object.entries(view.Todos)) {
  myTodos[key] = value.innerText;
};


localStorage.setItem('myTodos', JSON.stringify(myTodos));

const storage = JSON.parse(localStorage.getItem('myTodos'));

view.buildNew('stuff');


//console.log(view.newTodo);



export {view, helpers}