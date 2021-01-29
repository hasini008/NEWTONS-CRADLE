
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(200 , 250);
	bob2 = new Bob(400 , 250);
	bob3 = new Bob(600 , 250);
	bob4 = new Bob(800 , 250);
	bob5 = new Bob(950 , 250);

	roof = new Roof(100 , 190 , 20 , 1000);

	rope1 = new Rope(bob1.body , roof.body , -bobDiamter*2 , 0 );
	rope2 = new Rope(bob2.body , roof.body , -bobDiamter*2 , 0);
	rope3 = new Rope(bob3.body , roof.body , -bobDiamter*2 , 0);
	rope4 = new Rope(bob4.body , roof.body , -bobDiamter*2 , 0);
	rope5 = new Rope(bob5.body , roof.body , -bobDiamter*2 , 0);
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  display()
  
  
  drawSprites();
 
}



