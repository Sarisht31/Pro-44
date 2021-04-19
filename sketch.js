var PLAY = 1;
var END = 0;
var gameState = PLAY;

var runner, runnerRunning, runnerCollided;
var ground, invisibleGround, groundImage;

var obstaclesGroup, obstacle1, obstacle2, obstacle3

var score = 0;

var gameOver, restart;

localStorage["HighestScore"] = 0;

function preload(){


}

function setup(){
createCanvas(800,200);

//Making Runner
runner = createSprite = (120,180,20,50);
//add animation
runner.scale = 0.5;

//Making Ground
ground = createSprite(200,180,200,20);
//addImage
ground.x = ground.width/2;
ground. velocityX = -2

//Making Invisible Ground
invisibleGround = createSprite(200,190,200,10);
invisibleGround.visible = false;

gameOver = createSprite(280,80,20,20);
//add image
gameOver.scale = 0.6;
gameOver.visible = false;

restart = createSprite(260,130,20,20);
//add image
restart.scale = 0.5;
restart.visible = false;

GroupObstacles = new Group();
}

function draw(){
background("black");

if (gameState === PLAY){

ground.velocityX = -(2 + Math.round(score/100));

if(keyDown("Space") && runner.y > 161 ){
runner.velocityX = -12;
jump.play();
}

runner.velocityY = runner.velocityY + 0.8;

//camera
camera.position.x = runner.x +200;

if(ground.x < 0){
ground.x = ground.width/2
}

spawnObstacles();

score = score + Math.round(getFrameRate()/60);

if(score > 0 && score % 100 === 0){
  check.play();
}

if(GroupObstacles.isTouching(runner)){
    die.play();
    gameState = END;
}

}else if(gameState === END){
  GroupObstacles.setVelocityXEach(0);
     // runner.changeAnimation("collided", );
    ground.velocityX=0;
    trex.velocityY=0;
    GroupObstacles.setLifetimeEach(-1);
     gameOver.visible = true;
    restart.visible = true;
}

trex.collide(invisibleGround);

if(localStorage["HighestScore" < score]){
  localStorage["HighestScore"] = score;
}
fill ("black");
textSize(15);
text("Score:" +score, 300, 50);
text("High Score:"+ localStorage["HighestScore"],150,50)

if(mousePressedOver(restart)){
  reset();
}

drawSprites();


}


