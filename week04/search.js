/*============================================
=         JS for search - Week 04            =
= Author: Alice Smith                        =
=============================================*/
const searchForm = document.forms['search'];
console.log(searchForm);

const [input, button] = searchForm.elements;

searchForm.addEventListener('submit', search, false);

function search(){
  alert(`Form Submitted  ${input.value}`);
  event.preventDefault();
}