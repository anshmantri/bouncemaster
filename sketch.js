var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1200, 400);

  speed = random(111,160);
  weight = random(15,26);

  bullet = createSprite(75, 200, 50, 10);
  bullet.velocityX = speed;

  thickness = random(11,41);
  
  wall = createSprite(780, 200, thickness, 100);
}

function draw() {
  background(0,0,0);  

  if (hasCollided()) {
    bullet.velocityX = 0;

    var damage = weight*speed*speed/(thickness*thickness*thickness)

    if (damage > 10) {
      wall.shapeColor = color(255,0,0);
    }
    if (damage < 10) {
      wall.shapeColor = color(0,255,0);
    }
  }

  hasCollided();
  drawSprites();
}

function hasCollided () {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge =  wall.x;

  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}