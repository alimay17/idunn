/*============================================
=         JS for animation - Week 09         =
= Original Author: Darren Jones              =
= Customized: Alice Smith                    =
=============================================*/

// un comments lines 8 - 17 to view javascript animation.
// you must comment out lines 14 & 17 in animation.css first



/*----------  Animation  ----------*/
// const squareElement = document.getElementById('square');
// let angle = 0;

// function rotate() {
//   angle = (angle + 2)%360;
//   squareElement.style.transform = `rotate(${angle}deg)`
//   window.requestAnimationFrame(rotate);
// }

// const id = requestAnimationFrame(rotate);


/*----------  Color Changing  ----------*/
const btn = document.getElementById('rainbow');
const resetBtn = document.getElementById('reset');

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];

function change() {
  document.body.style.background = rainbow[Math.floor(7 *
    Math.random())];
}
btn.addEventListener('click', change);
resetBtn.addEventListener('click', ()=> {
  document.body.style.background = '#383C4A';
})


/*----------  Factorize  ----------*/
const factorForm = document.forms[0];
factorForm.addEventListener('submit', factorize, false);

function factorize(event) {
  // prevent the form from being submitted
  event.preventDefault();   
  document.getElementById('output').innerHTML = '<p>This could take a while ...</p>';
  const number = Number(factorForm.number.value);

  if(window.Worker) {
      const worker = new Worker('../js/factors.js');
      worker.postMessage(number);
      worker.addEventListener('message', (event) => {
      document.getElementById('output').innerHTML = event.data;
      }, false);
  }
}


/*----------  Websockets  ----------*/
const URL = 'wss://echo.websocket.org/';
const outputDiv = document.getElementById('webSocketOutput');
const websocketForm = document.forms[1];
const connection = new WebSocket(URL);

connection.addEventListener('open', () => {
  output('CONNECTED');
}, false);

function message(event) {
  event.preventDefault();
  const text = websocketForm.message.value;
  output(`SENT: ${text}`);
  connection.send(text);
}

function output(message) {
  const para = document.createElement('p');
  para.innerHTML = message;
  outputDiv.appendChild(para);
}

connection.addEventListener('message', (event) => {
  output(`RESPONSE: ${event.data}`);
}, false);

websocketForm.addEventListener('submit', message, false);