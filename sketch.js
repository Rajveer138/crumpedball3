
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper1,dustbin1,dustbin2,dustbin3,ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 paper1=new Paper(200,100,40);
	 dustbin1=new Dustbin(1200,650);
	 slingShot = new SlingShot(paper1.body,{x:200,y:100});
	 ground1=new Ground(800,670,1600,20);
     


  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.run(engine);
  paper1.display();
  dustbin1.display();
 slingShot.display();
  ground1.display();
  

  
  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});

}

function mouseReleased() {
    slingShot.fly();
}
 




