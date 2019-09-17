
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xMove = unit * 1;
  this.yMove = 0;
  this.score = 0;
  this.tail = [];

  this.draw = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, unit, unit);
    for(let i=0;i<this.tail.length; i++){
        ctx.fillRect(this.tail[i].x, this.tail[i].y, unit, unit);
    }

  };

  this.move = () => {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }
    this.tail[this.score - 1] = {
      x: this.x,
      y: this.y
    };
    this.x += this.xMove;
    this.y += this.yMove;

    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
  };

  this.changeDirection = direction => {
    switch (direction) {
      case "Up":
        this.yMove -= unit;
        this.xMove = 0;
        break;
      case "Down":
        this.yMove += unit;
        this.xMove = 0;
        break;
      case "Left":
        this.xMove -= unit;
        this.yMove = 0;
        break;
      case "Right":
        this.xMove += unit;
        this.yMove = 0;
        break;
    }
  };

  this.eat = food => {
    if (this.x === food.x && this.y === food.y) {
        this.score++;
      return true;
    }
    return false;
  };

  this.checkCollision = ()=>{
    for( let i=0; i<this.tail.length; i++){
        if (this.x === this.tail[i].x && this.y === this.tail[i].y){
            this.score =0;
            this.tail =[];
        }
    } 
  }
}
