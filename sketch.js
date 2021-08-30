const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var snow=[]
function preload(){
  snow2=loadImage("snow2.jpg");
}



function setup() {
 
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  boy1=createSprite(400, 550, 50, 50);
  snow1=new Snow(200,10,10);
 
}

function draw() {
  background(snow2);  
  Engine.update(engine);
  if (keyDown(LEFT_ARROW)){
    boy1.x=boy1.x-5;
  }
  if (keyDown(RIGHT_ARROW)){
    boy1.x=boy1.x+5;
  }
  if( frameCount%5===0){
    snow.push(new Snow(random(20,900),10,10))
  }
  
 
  for (var i=0;i<snow.length;i++){
  
  snow[i].display();
}
 // if (keyDown(UP_ARROW)){
   // boy1.y=boy1.y-5;
  //}
 // if (keyDown(DOWN_ARROW)){
   // boy1.y=boy1.y+5;
 // }
snow1.display();
  drawSprites();
}