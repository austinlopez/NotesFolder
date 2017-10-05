/* betterAnimation
Written by: Mr. Donze
Extended by: Austin Lopez
10/2/2017
Description: This program creates a moving circle which can have
its direction and speed controlled by a user.
***class and enum examples***
*******************************************************/

//Global Variables
var movementDirection = {
  //enum to enumerate directions
  LEFT: 0,
  RIGHT: 1,
  UP: 2,
  DOWN: 3
};  //enum variable

//canvas holds a reference to the HTML canvas
var canvas = document.getElementById("theCanvas");
//ctx holds the drawing context
var ctx = canvas.getContext("2d");

var hexColor = ["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f"];
function randomColor(){
  actualColor = "#000000";

  actualColor = "#"+hexColor[Math.floor(Math.random()*hexColor.length)]+hexColor[Math.floor(Math.random()*hexColor.length)]+hexColor[Math.floor(Math.random()*hexColor.length)]+hexColor[Math.floor(Math.random()*hexColor.length)]+hexColor[Math.floor(Math.random()*hexColor.length)]+hexColor[Math.floor(Math.random()*hexColor.length)];
  return actualColor;
}


//classes
class Ball {
  //member variables
  //x - x coordinate (position)
  //y - y coordinate (position)
  //radius - ball radius
  //speed - movement speed
  //color - ball color
  //direction - direction the ball is moving

  //member functions
  //constructor - creates a new ball
  //draw - tells the ball to draw itself
  //move - tells the ball to move
  //setDirection - sets the balls direction

  constructor(x,y,radius,color,speed,direction){
    //constructor for the ball class
    this.x = x; //starting x coordinate
    this.y = y; //starting y coordinate
    this.radius = radius; //starting radius
    this.color = color; //starting color
    this.speed = speed; //starting speed (can be 0)
    this.direction = direction; //starting direction
  }
  draw(){
    //Description: this function draws the ball to the canvas
    //input: none
    //output: a circle on the HTML canvas
    ctx.fillStyle = this.color; //sets the color
    ctx.beginPath(); //start drawing
    ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
    ctx.fill();
  }
  clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  move(){
    //Description: this function will set the movement
    //direction by changing the x and y
    //input: none
    //output: increment or decrement the correct x/y variable
    switch (this.direction) {
      case movementDirection.RIGHT:
        this.x += this.speed;
        break;
      case movementDirection.LEFT:
        this.x -= this.speed;
        break;
      case movementDirection.DOWN:
        this.y += this.speed;
        break;
      case movementDirection.UP:
        this.y -= this.speed;
        break;
      default:
        break;
    }
    this.draw();
  }
  setDirection(direct){
    //member function
    //description: This function changes the ball's direction
    //Input: movementDirection
    //Output: none
    this.direction = direct;
  }
  checkLoop(){
    if (this.x > (canvas.width+this.radius)){this.x = (0-this.radius)}
    if (this.x < (0-this.radius)){this.x = (canvas.width+this.radius)}
    if (this.y > (canvas.height+this.radius)){this.y = (0-this.radius)}
    if (this.y < (0-this.radius)){this.y = (canvas.height+this.radius)}
  }
}
var count = 0;
//functions
function animate(){ //loops for the animation
  b.clear();
  b.move();
  b.checkLoop();
  for (var i = 0; i < ballList.length; i++) {
    ballList[i].move();
    ballList[i].checkLoop();
  }
  count++;
  if (ballList.length < 1000) {
    if(count % 1 == 0){
      //ballList.push(new Ball(30,0,10,"red",1,movementDirection.DOWN));
      ballList.push(new Ball(Math.floor(Math.random()*800),Math.floor(Math.random()*400),Math.floor(Math.random()*50),randomColor(),Math.floor(Math.random()*20+1),movementDirection.DOWN));
    }
  }
  document.getElementById("x").innerHTML = "x:" + b.x;
  document.getElementById("y").innerHTML = "y:" + b.y;
  document.getElementById("radius").innerHTML = "radius:" + b.radius;
  document.getElementById("speed").innerHTML = "Speed:" + b.speed;
  document.getElementById("numberOfShapes").innerHTML = "    Number of Shapes:" + ballList.length;
}

var b = new Ball(50,50,70,"red",1,movementDirection.RIGHT)
var ballList = [new Ball(50,50,10,"blue",1,movementDirection.DOWN),
new Ball(Math.floor(Math.random()*400),Math.floor(Math.random()*400),Math.floor(Math.random()*50),"red",Math.floor(Math.random()*20),movementDirection.DOWN)];


window.setInterval(animate,10);
/*var ball1 = new Ball(50,100,50,"blue",10,movementDirection.RIGHT)
var ball2 = new Ball(55,200,80,"green",15,movementDirection.RIGHT)
var ball3 = new Ball(60,300,100,"orange",20,movementDirection.RIGHT)
var ball4 = new Ball(70,400,120,"grey",25,movementDirection.RIGHT)
*/

window.addEventListener("keydown",eventHandler);
function eventHandler(event){
  var keyCode = event.keyCode;
  switch(keyCode){
    case 37: //left arrow keyCode
    b.setDirection(movementDirection.LEFT);
    for (var i = 0; i < ballList.length; i++) {
      ballList[i].setDirection(movementDirection.LEFT);
    }
    break;
    case 38: //up arrow keyCode
    b.setDirection(movementDirection.UP);
    for (var i = 0; i < ballList.length; i++) {
      ballList[i].setDirection(movementDirection.UP);
    }
    break;
    case 39: //right arrow keyCode
    b.setDirection(movementDirection.RIGHT);
    for (var i = 0; i < ballList.length; i++) {
      ballList[i].setDirection(movementDirection.RIGHT);
    }
    break;
    case 40: //down arrow keyCode
    b.setDirection(movementDirection.DOWN);
    for (var i = 0; i < ballList.length; i++) {
      ballList[i].setDirection(movementDirection.DOWN);
    }
    break;
    case 65: //a
    if (b.speed > 0){
    b.speed -= 1;
    }
    break;
    case 68: //d
    b.speed += 1;
    break;
    case 83: //s
    if (b.radius > 5){
      b.radius -= 1;
    }
    break;
    case 87: //w
    b.radius += 1;
    break;
    case 32:
    b.speed = 0;
    break;
    default:
    break;
  }
}


/*window.addEventListener('mousemove', function (e) {
  b.newx = e.pageX;
  b.newy = e.pageY;
})
function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  b.draw();
  if (b.newx && b.newy) {
        b.x = b.newx;
        b.y = b.newy;
    }
}
window.setInterval(update,1);
*/
