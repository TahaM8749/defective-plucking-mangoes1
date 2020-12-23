
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyIm;
var boy;

function preload(){
	boyIm=loadImage("Images/boy.png");

}
	
	


function setup() {
	createCanvas(800, 700);
	

//	boy = createSprite(20,20,20,20);
//	boy.addImage(boyIm);

	

	//Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);
	image(boyIm,200,200,20,20);
  drawSprites();
 
}



