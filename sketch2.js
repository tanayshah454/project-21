var bullet,wall,thickness
var speed,weight
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet= createSprite(50, 200, 80, 5);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor='black';
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    wall.shapeColor='red';
    bullet.velocityX=0;
    bullet.x=1500;
  }
  drawSprites();
}