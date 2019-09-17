const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const unit = 10;
const rows = canvas.height / unit;
const colums = canvas.width / unit;

let snake;
let key;

(function start() {
  snake = new Snake();
  food = new Food();

  food.setLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    food.draw();
    snake.draw();

    if (snake.eat(food)){
        food.setLocation();
    }

    snake.checkCollision();

    document.querySelector(".score").innerText = snake.score;
  }, 80);
})();

document.addEventListener("keydown", event => {
  if (event.keyCode == 37 && key != "Right") {
    key = "Left";
  } else if (event.keyCode == 38 && key != "Down") {
    key = "Up";
  } else if (event.keyCode == 39 && key != "Left") {
    key = "Right";
  } else if (event.keyCode == 40 && key != "Up") {
    key = "Down";
  }
  snake.changeDirection(key);
});
