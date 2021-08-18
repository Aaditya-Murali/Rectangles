var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(300,150,80,50);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="yellow";
  fixedRect.debug=true;
  movingRect.debug=true;

  
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  drawSprites();
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2
    &&fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2
    &&movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
  }else{
    fixedRect.shapeColor="blue";
  movingRect.shapeColor="yellow";
  }
}