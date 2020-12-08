
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage,treeImage;
var stone,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8

function preload()
{
    boyImage=loadImage("Plucking mangoes/boy.png")
	treeImage=loadImage("Plucking mangoes/tree.png")
}

function setup() {
  createCanvas(1600,500);
  
	engine = Engine.create();
	world = engine.world;

  ground=new Ground(600,490,2000,20);
  stone=new Stone(210,360,38,38);
  shot=new Shot(stone.body,{x:210, y:360});
  mango1=new Mango(980,300,20,20);
  mango2=new Mango(1150,220,22,22);
  mango3=new Mango(1065,280,25,25);
  mango4=new Mango(1140,290,14,14);
  mango5=new Mango(1115,310,20,20);
  mango6=new Mango(1260,280,35,35);
  mango7=new Mango(1165,310,20,20);
  mango8=new Mango(1085,220,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  image(boyImage,175,310,200,200)
  image(treeImage,975,170,300,300)
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  shot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  shot.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
   if(distance<=lmango.r+lstone.r){
      Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed(){
  if (keyCode === 32){
    Matter.body.setPosition(stone.body,{x:210,y:360})
    shot.attach(stone.body);
  }
}