function standard() {
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');

  context.strokeStyle = 'red';
  context.fillStyle = 'blue';

  context.fillRect(10, 10, 100, 100);
  context.strokeRect(10, 10, 100, 100);
}

function drawPattern() {
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');
  context.strokeStyle = "white";

  var img = new Image();
  img.src = "../img/arc.png";
  img.onload = function () {
    const pattern = context.createPattern(img, "repeat");
    context.fillStyle = pattern;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
  };
}

const patternButton = document.getElementById('pattern');
patternButton.addEventListener('click', drawPattern());