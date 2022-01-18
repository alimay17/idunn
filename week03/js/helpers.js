export const myHelpers = {
  show(element){
    element.style.display = 'block';
  },
  hide(element){
    element.style.display = 'none';
  },

  display(element, content) {
    const myDisplay = document.getElementById(element);
    myDisplay.appendChild(content);
  }

}