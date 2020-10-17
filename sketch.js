
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var ground;
var block1,block2,block3;
var ball;
function setup() {
	createCanvas(800, 400);

    
	engine = Engine.create();
	world = engine.world;

    var ball_option={
		isStatic:true,
		friction:1

	}

	//Create the Bodies Here.
    ground= new Ground (400,350,800,20);
	block1= new Dustbin(700,252,100,PI);
	block2= new Dustbin(550,230,100,PI);
	block3= new Dustbin(625,100,150,PI/2);
	ball=Bodies.circle(100,100,20,ball_option);
	World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
  keyPressed();
}

function keyPressed(){
	if(keycode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}


