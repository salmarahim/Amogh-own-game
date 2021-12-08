
var monkey, ground
var monkeyImg;
var bgImg
function preload(){
monkeyImg=loadImage("monkey.png")
bgImg=loadImage("bg.jpg")
}



function setup()
{
  createCanvas(1200,700);

  bg=createSprite(400,200,1200,800);
  bg.addImage(bgImg);
  bg.velocityX=-2
  monkey=createSprite(50,100,20,20);
  monkey.addImage(monkeyImg) ;
  monkey.scale=0.5
  ground=createSprite(600,680,1200,10);

}

function draw() 
{
  background(0);
  if(keyDown("space")&&monkey.collide(ground)){
  monkey.velocityY=-15
  }
  //gravity statement
  monkey.velocityY=monkey.velocityY+0.5;

  monkey.collide(ground)

  drawSprites()
}

