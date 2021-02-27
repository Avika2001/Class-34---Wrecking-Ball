
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var ground;
var block1, block2, block3, block4;
var b5, b6, b7, b8, b9, b10;
var b11, b12, b13;
var ball;
var slingShot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,600,1200,20);

	block1 = new Block(600,260,50,50);
	block2 = new Block(600,310,50,50);
	block3 = new Block(600,360,50,50);
	block4 = new Block(600,410,50,50);

	b5 = new Block(530,260,50,50);
	b6 = new Block(530,310,50,50);
	b7 = new Block(530,360,50,50);
	b8 = new Block(530,410,50,50);
	b9 = new Block(530,460,50,50);
	b10 = new Block(530,510,50,50);
	
	b11 = new Block(460,260,50,50);
	b12 = new Block(460,310,50,50);
	b13 = new Block(460,360,50,50);

	ball = new Ball(50,50,65);

	slingShot = new Sling(ball.body,{x:210,y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(80,80,80);
  
	ground.display();
	
	block1.display();
	block2.display();
	block3.display();
	block4.display();

	b5.display();
	b6.display();
	b7.display();
	b8.display();
	b9.display();
	b10.display();

	b11.display();
	b12.display();
	b13.display();
	
	ball.display();

	slingShot.display();

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
	slingShot.fly();
  }



