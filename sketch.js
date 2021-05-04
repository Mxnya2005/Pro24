
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper= new Paper(100,500,30);
ground= new Ground(400,670,800,20);
leftBin= new Dustbin(500,610,20,100);
rightBin= new Dustbin(700,610,20,100);
centerBin= new Dustbin(600,650,200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  centerBin.display();
  leftBin.display();
  rightBin.display();
  drawSprites();
 
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-100});
    }
}



