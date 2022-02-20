const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var backgroundImg
var sprite1
var snowArray = []

function preload() {
  backgroundImg = loadImage("snow1.jpg")
  sprite = loadImage("sprite1.png")
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  sprite1 = createSprite(400, 200, 50, 50);
  sprite1.addImage(sprite)
  iground = createSprite(400, 380, 800, 10)
  iground.visible = false
  
 


  
  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  if (keyDown("right")) {
    sprite1.x = sprite1.x + 5
  }
  if (keyDown("left")) {
    sprite1.x = sprite1.x - 5
  }
  if (keyDown("up")) {
    sprite1.velocityY = -5
  }
  sprite1.velocityY = sprite1.velocityY + 0.7
  sprite1.collide(iground)

  for(var i=0; i<snowArray.length; i++){
     snowArray[i].display()
  }
  

  drawSprites();
}

function keyPressed(){
  if(keyIsDown(DOWN_ARROW)){
    snow = new Snow(random(100, 700), 0, 50, 50)
    snowArray.push(snow)
  }
}

   
