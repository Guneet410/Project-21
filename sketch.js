
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ground_options = {
	   isStatic : true,
   }

    ground = Bodies.rectangle(300,390,900,20,ground_options);
    World.add(world,ground);

	wall1 = Bodies.rectangle(450,390,10,100,ground_options);
    World.add(world,wall1);

	wall2 =Bodies.rectangle(550,390,10,100,ground_options);
    World.add(world,wall2);
   
  var ball_options={
    restitution : 0.09,
    friction : 0,
    isStatic : false,
    density :1.2,
  }

	paper = Bodies.circle(100,0,10,ball_options);
  World.add(world,paper)  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode (RADIUS);
  
  text("Press up key to play, throw ball in dustbin.Press left if you go too left",200,200);

  fill("pink")
  rect ( ground.position.x, ground.position.y,600,20 );
  rect ( wall1.position.x, wall1.position.y,10,100);
  rect ( wall2.position.x, wall2.position.y,10,100);

  fill("green");
  ellipse( paper.position.x,paper.position.y,10,10)
}


function keyPressed(){
    if (keyCode === UP_ARROW) {

  Matter.Body.applyForce (paper , {x:0,y:0} , {x:3,y:3} )}
  
  
  if (keyCode === LEFT_ARROW) {

    Matter.Body.applyForce (paper , {x:0,y:0} , {x:-3,y:-3} )
  }  
  }
