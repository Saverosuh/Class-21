var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "yellow";

  gameObject2 = createSprite(100,200,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(100,300,50,50);
  gameObject3.shapeColor = "green";

  gameObject4 = createSprite(400,300,50,50);
  gameObject4.shapeColor = "yellow";

  gameObject3.velocityX = 2;
  gameObject4.velocityX = -2;

  gameObject1.velocityY = 2;
  gameObject2.velocityY = -2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  // if(isTouching(movingRect, gameObject4)){
  //   movingRect.shapeColor = "blue";
  //   gameObject4.shapeColor = "blue";
  // }
  // else{
  //   movingRect.shapeColor = "green";
  //   gameObject4.shapeColor = "green";
  // }
  bounceOff(gameObject3, gameObject4);
  bounceOff(gameObject1, gameObject2);

  drawSprites();
}

