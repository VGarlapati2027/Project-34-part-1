const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, boyImg, boy_options;
var controller, controllerImg;

function preload(){
  boyImg = loadImage("boy character.jpg");
  controller = loadImage("controller image.jpg");
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var boy_options={
    static:0
  }

  boy = Bodies.Rectangle(100,100,20,20,boy_options)
  boy.addImage(boyImg);
  World.add(world,boy);  
}


function draw() 
{
  background(51);
  drawSprites();
  rectMode(CENTER);
  Engine.update(engine);
  
}

