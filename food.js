function Food (){
    this.x;
    this.y;

    this.setLocation = ()=>{
        this.x = (Math.floor(Math.random()* rows -1)+1) * unit;
        this.y = (Math.floor(Math.random()* colums -1)+1) * unit;
    }

    this.draw = ()=>{
        ctx.fillStyle = "black";
        ctx.fillRect(this.x,this.y,unit,unit);
    }
}