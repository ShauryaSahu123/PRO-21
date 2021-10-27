var bullet, wall;

var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);

  bullet=createSprite(50,200,50,30);
  bullet.shapeColor="white";
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  


  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
    console.log(weight);
    console.log(speed);
    console.log(damage);
    if(damage>10)
    {
      bullet.shapeColor="red";
      console.log(damage);
    }
   
    if(damage<10)
    {
      bullet.shapeColor="green";
      console.log(damage);
    }
  }
  drawSprites();
}

