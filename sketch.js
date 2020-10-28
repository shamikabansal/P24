 var paper1;
 var dustbin1; 
 var ground1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
    world = engine.world;
	

	//Create the Bodies Here.
paper1 = new Paper(200, 450, 40);
dustbin1 = new dustbin(1200,650)
ground1 =new Ground(width/2,670,width,20);

var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1200,
	  height: 700,
	  wireframes: false
	}
  })

  Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  dustbin1.display();
  ground1.display();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:70, y:-70})
	}
}

