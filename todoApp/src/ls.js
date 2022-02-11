/*============================================
=      Local Storage Helpers: TODO APP       =
= Author: Alice Smith                        = 
=============================================*/

const save = {
  setStorage() {
    localStorage.setItem('myTodos', JSON.stringify(myTodos));
    const storage = JSON.parse(localStorage.getItem('myTodos'));
  },

  saveNew(item){
    console.log(`${item.name} saved!`);
  },

  getStorage() {

  }
}

export {save} 