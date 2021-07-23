var runner;
var runnerAn;
var road;
var roadIm;
var iWall1;
var iWall2;
function preload(){
  //pre-load images
roadIm = loadImage("path.png");
runnerAn = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200);
  road.addImage("scrolling",roadIm);
  
 
  runner = createSprite(200,350,10,10);
  runner.addAnimation("running",runnerAn);
  runner.scale = 0.035;
  
  createEdgeSprites();

  iWall1 = createSprite(345,200,20,400);
  iWall2 = createSprite(60,200,20,400);
  iWall1.visible = false;
  iWall2.visible = false;
}

function draw() {
  background(0);
  road.velocityY = 5;

  if(road.y>400){
    road.y = road.width/2;
  }

  runner.collide(iWall1);
  runner.collide(iWall2);

  if(keyDown("left")){
    runner.x = runner.x -3;
  }

  if(keyDown("right")){
    runner.x = runner.x +3;
  }
  
  drawSprites();
}
