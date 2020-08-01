const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinko = [];
var divisions = [];
var ground;

var divisionHeight = 300;

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,790,800,20);
  plinko = new Plinko(200,200,10);
  
}

function draw() {
  background(255,255,255);
  ground.display();
  plinko.display();
  for(var j = 0; j < particles.length; j++){
    particles[j].display();

  }
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 2), 10,10));
  }
  for(var k = 0;k <=width; k = k + 80){
    divisions.push(new Divisions)

  }
}