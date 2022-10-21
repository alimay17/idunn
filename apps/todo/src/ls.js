/*============================================
=      Local Storage: TODO APP               =
= Author: Alice Smith                        = 
=============================================*/
import { todoHelpers as todo } from "./todo.js";

/*----------  Local Storage Object  ----------*/
export const save = {
  saveChange() {
    localStorage.setItem('myTodos', JSON.stringify(todo.myTodos));
  },

  getStorage() {
    if (localStorage.getItem('myTodos')) {
      return JSON.parse(localStorage.getItem('myTodos'));
    }
  },
  checkStorage() {
    if (localStorage.getItem('myTodos')) {
      return true;
    } 
  }
  
}