var gameState = 0;
var game 
var level1ButtonImg , level2ButtonImg
var girlImg , boyImg ;
var bgImg , lvl1BgImg
var tickImg
var player_walking;
var plasticText , metalText;
var oopsSound ; 
var girlAnimation , boyAnimation ;

function preload()
{
	level1ButtonImg = loadImage("images/level1.png");
	level2ButtonImg = loadImage("images/level2.png");
	girlImg = loadImage("images/girl.png");
	boyImg = loadImage("images/Boy.png");
	bgImg = loadImage("images/Background1stpg.jpg");
    tickImg = loadImage("images/tick.png")
	lvl1BgImg = loadImage("images/kitchen for level 1.png")
	plasticText = loadImage("images/plasticText.png")
	metalText = loadImage("images/metalText.png")
	oopsSound = loadSound("sounds/alert1.mp3")
	girlAnimation = loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png")
    boyAnimation = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png","images/boy4.png")
}

function setup() {
	createCanvas(windowWidth , windowHeight);
game = new Game();

	
  
}


function draw() {
	background("white")
 if(gameState === 0){
	 game.start();
 }
 if(gameState === 1){
	 game.quiz();
 }
 if(gameState === 2){
	 game.play();
 }
 if(gameState === 3){
	 game.end();
 }
 drawSprites()
}



