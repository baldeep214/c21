var fixedRect, movingRect;
var one,two,three,four;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  one = createSprite(200,100,80,30);
  one.shapeColor = "green";
  two = createSprite(400,100,80,30);
  two.shapeColor = "green";
  three = createSprite(600,100,80,30);
  three.shapeColor = "green";
  four = createSprite(800.100,80,30);
  four.shapeColor="green";





}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,two)){
    movingRect.shapeColor = "red";
    two.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    two.shapeColor = "green";
  }
  bounceoff(movingRect,fixedRect);
  drawSprites();
}

