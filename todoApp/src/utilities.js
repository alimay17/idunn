/*============================================
=          Utilities: TODO APP               =
= Author: Alice Smith                        = 
=============================================*/

const view = {
  myTodos: document.forms[0],
  newTodo: document.forms[1],

  buildNewTodo(todo) {

  }
}

const process = {
  getList(){
    localStorage.setItem('myTodos')
  }
}

console.log(view.myTodos);
console.log(view.newTodo);



export {view}