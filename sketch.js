
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//preloading the images
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {

//creating the canvas
	createCanvas(800, 700);
	rectMode(CENTER);
	
//creatig the package sprite	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

//creating helicopter sprite	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

//creating ground sprite	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

//creating the engine and adding it to the world
	engine = Engine.create();
	world = engine.world;

//creating the package body and adding it to the world	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

//Creating a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
 
  moveHelicopter();
  
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  
  if(packageSprite.y<=200)
  { 
     packageSprite.x=helicopterSprite.x;
  }

  drawSprites();
  
}

//function for moving the objects
function moveHelicopter(){
	if(keyDown("left"))
	{
		helicopterSprite.velocityX=-5;
	}

	else
	{
		helicopterSprite.velocityX=0;
	}

	if(keyDown("right"))
	{
		helicopterSprite.velocityX=5;
	}

	if(keyDown("down"))
	{
		Matter.Body.setStatic(packageBody,false);
		packageBody.velocityY=-4;
	}

}
