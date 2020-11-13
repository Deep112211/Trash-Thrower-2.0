
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundsprite;

var trashball, trashballimg;

var ground;

var box1, box2, box3;

var bin;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600, 690, 1200, 20);

	trashball = new Paper(200, 500, 10);

	box1 = new Box(1000, 675, 100, 10);
	box2 = new Box(945, 655, 10, 50);
	box3 = new Box(1050, 630, 10, 100);

	bin = new Bin(1000, 630, 100, 100);

	Engine.run(engine);
  
}


function draw() {
  background("white");

  ground.display();

  bin.display();

  trashball.display();

  box1.display();
  box2.display();
  box3.display();

  
  
  keypressed();
  drawSprites();
 
}

function keypressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(trashball.body, trashball.body.position, {x:0.0007, y:-0.0007})
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(trashball.body, trashball.body.position, {x:0, y:-0})
	}
}

