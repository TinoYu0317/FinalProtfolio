var ballx = 300;
var bally = 300;
var ballSizeX = 60;
var ballSizeY = 75;
var ballSize = (ballSizeX, ballSizeY);
var score = 0;
var gameState = "L1";

function preload() {
  boom = loadImage('https://tinoyu0317.github.io/FinalProtfolio/boom.png'); 
}  
function setup() {
 createCanvas(600, 600);
 textAlign(CENTER);
 textSize(20)
}


function draw() {
 background(220);
 if(gameState == "L1"){
  levelOne();
 }
 if(gameState == "L2"){
   levelTwo();
 }
 if(gameState == "L3"){
   levelThree();
 }
 if(gameState == "L4"){
   levelFour();
 }
 text(("Defuse progress:" + score),width/2,40);
 
}

function levelOne(){
    text("level 1", width/2, height -20);
    var distToBall = dist(ballx,bally,mouseX, mouseY)
    if(distToBall < ballSize/2){
      ballx = random(width);
      bally = random(height);
      score = score +1; 
  }    
  if(score>= 10){
    gameState = "L2";
  }
  
  line(ballx, bally, mouseX,mouseY);
  imageMode(CENTER);
  image(boom,ballx,bally,ballSizeX, ballSizeY);
  
}

function levelTwo(){
    text("level 2", width/2, height -20);
    var distToBall = dist(ballx,bally,mouseX, mouseY)
    if(distToBall < ballSize/2){
      ballx = random(width);
      bally = random(height);
      score = score +1; 
  }    
  if(score>= 20){
    gameState = "L3";
  }
  
  imageMode(CENTER);
  image(boom,ballx,bally,ballSizeX,ballSizeY);
  
}

function levelThree(){
    text("level 3", width/2, height -20);
    var distToBall = dist(ballx,bally,mouseX, mouseY)
    if(distToBall < ballSize/2){
      ballx = random(width);
      bally = random(height);
      score = score +1; 
      ballSize = ballSize + 10;
  }    
  if(score>= 30){
    gameState = "L4";
    background(random(255,255,255));
  }
  
  imageMode(CENTER);
  image(boom,ballx,bally,ballSize,ballSize);
  
}
function levelFour(){
    text("level 4", width/2, height -20);
    var distToBall = dist(ballx,bally,mouseX, mouseY)
    if(distToBall < ballSize/2){
      ballx = random(width);
      bally = random(height);
      score = score +1; 
      ballSize = ballSize + 20;
  }    
  if(score>= 40){
    background(random(255));
  }
  imageMode(CENTER);
  image(boom,ballx,bally,ballSize,ballSize);
}
