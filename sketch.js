const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

constructor(body1,body2,pointA,pointB);

this.pointA=pointA;
this.pointB=this.pointB;

var  options={
	bodyA:body1,
	bodyB:body2,
	pointB:{x:this.pointA,y:this.pointB}
	
}

  //call display() to show ropes here

  

  //create ellipse shape for multiple bobs here

 

