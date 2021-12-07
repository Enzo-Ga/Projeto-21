
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bola;
var solo;
var parede_esquerda, parede_direita;
var botao;

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;

    solo= new Solo(200,400,400,10);
	parede_esquerda= new Solo(220,390,10,150);
	parede_direita= new Solo(280,390,10,150);
    
	//Create the Bodies Here.
  var options_bola ={
	  isStatic: false,
      restitution: 0.3,
	  friction: 0,
	  density:1.2,
  }
  bola = Bodies.circle(100,70,20,options_bola);
  World.add(world,bola);
  
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(bola.position.x,bola.position.y,40);
  parede_esquerda.show();
  parede_direita.show();
  solo.show();
  KeyPressed();
  
  Engine.update(engine);
  drawSprites();
 
}

function KeyPressed(){
      if(keyCode === UP_ARROW){
      Matter.Body.applyForce(bola,bola.position,{x:0.5,y:-8});
    }
  }

