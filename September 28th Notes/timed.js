var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.style.border = "10px salmon solid"
ctx.strokeStyle = "blue";
ctx.fillStyle = "red";

class Point{
  constructor(x,y,radius,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }
  moveRight(){
    this.x += 1;
    this.draw();
  }
  moveLeft(){
    this.x -= 1;
    this.draw();
  }
  moveUp(){
    this.y -= 1;
    this.draw();
  }
  moveDown(){
    this.y += 1;
    this.draw();
  }
  draw(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius, 0, 2 * Math.PI,false);
    ctx.closePath();
    ctx.fill();
  }
}

var myCircle = new Point(75, 75, 20, "red");
//var ballRadius = 15;
//var id = setInterval(frame, 1);
//draw();

/*function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x,ball.y,ballRadius, 0, 2 * Math.PI,false);
  ctx.closePath();
  ctx.fill();
}*/

function clear()
{
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function animate(){
  clear();
  myCircle.moveRight();
}

function animateY(){
  clear();
  myCircle.moveDown();
}

window.setInterval(animate,10);
window.setInterval(animateY,50);
