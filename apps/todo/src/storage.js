/*============================================
=      Local Storage Helpers: TODO APP       =
= Author: Alice Smith                        = 
=============================================*/
import { todoHelpers } from "./todo.js";

const save = {
  saveComplete() {
    localStorage.setItem('completed', JSON.stringify(todoHelpers.completed));
  },

  saveChange() {
    localStorage.setItem('myTodos', JSON.stringify(todoHelpers.myTodos));
  },

  getStorage() {
    if (localStorage.getItem('myTodos')){
    return JSON.parse(localStorage.getItem('myTodos'));
    }
  }
}

export {save}