var helicopterIMG, helicopter1,helicopter2, helicopter3, helicopter4;
var  package,packageIMG;
var packageBody,ground;
var object1;
var object2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Matter.Body.setStatic(packageBody, false);

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 200, 10, 10);
	package.visible= false;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6;

	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 1 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	package=createSprite(width/2, 200, 10,10);
	package.addImage(packageIMG)
	package.isStatic = false;
	package.scale=0.2
	restitution : 0.5;
	packageBody = Bodies.circle(width/2 , 200 , 1 , {restitution:0.5, isStatic:false});
	package.bounce;
	World.add(world, packageBody);

	
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



