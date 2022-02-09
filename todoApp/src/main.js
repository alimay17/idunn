/*============================================
=              Main JS: TODO APP             =
= Author: Alice Smith                        = 
=============================================*/
import { view, helpers } from "./utilities.js";


class Todo {
  constructor(name) {
    this.name = name;
    this.id = helpers.makeid();
  }
}

const coolItem = new Todo('high');

console.log(coolItem);
