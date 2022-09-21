/*============================================
=         JS for SuperHero Quiz - Week 02    =
= Author: Alice Smith                        =
=============================================*/
const heroes = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonder Woman's real name?", "Diana Prince"],
  ["What is Batman's real name?", "Bruce Wayne"],
  ["What is Tarzan's real name?", "John Clayton"]
];

let score = 0;
const key = 'myScore';

function game() {
  for (const [question, answer] of heroes) {
    console.log(question);
    const response = ask(question);
    check(response, answer);
  }
  gameOver();
}

function ask(question) {
  return prompt(question);
}

function check(response, answer) {
  if (response.toLowerCase() === answer.toLowerCase()) {
    alert('Correct!');
    score++;
  } else {
    alert(`Wrong, the correct answer is ${answer}`);
  }
}

function gameOver() {
  alert(`Game Over, your score is ${score} of ${heroes.length}`);
  localStorage.setItem(key, score);
  getScore();
}

function getScore() {
  const myScore = localStorage.getItem(key);
  const display = document.getElementById('score');
  display.innerHTML = `<p>Your last game score was: ${myScore} of ${heroes.length} </p>`;
}

const gameButton = document.getElementById('playGame');
gameButton.addEventListener('click', game);