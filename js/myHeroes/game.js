/* My Heroes Quiz Game */
import { view } from "./helpers.js";

export const game = {
  score: 0,
  key: 'myScore',

  
  /* Quiz Loop */
  start(quiz) {
    this.questions = [...quiz];
    this.score = 0;
    for (const question of this.questions) {
      this.question = question;
      this.ask();
    }
    this.gameOver();
  },

  
  /* Functions */
  ask() {
    const question = `What is ${this.question.alias}'s real name?`;
    const response = prompt(question);
    this.check(response);
  },

  check(response) {
    const answer = this.question.realName;
    if (response.toLowerCase() === answer.toLowerCase()) {
      alert('Correct!');
      this.score++;
  
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  },

  gameOver() {
    view.show(view.result);
    view.render(view.result, `Game Over, you scored ${this.score} of ${this.questions.length}`);
    localStorage.setItem(this.key, this.score);
  },

  getScore() {
    const myScore = localStorage.getItem(this.key);
    if (myScore > 0) {
      view.render(view.result, `<p>Your last game score was: ${myScore} of 5</p>`);
    } else {
      view.render(view.result, `<p>No score saved</p>`);
    }
  }
  
}