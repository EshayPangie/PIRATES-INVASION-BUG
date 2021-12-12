const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Pirate_background;
var ground;
var myWorld, myEngine, box;

function preload() {
  Pirate_background = loadImage("background.gif");
}

function setup() {
  createCanvas(1200, 600);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ground = new Ground(600, 590, 1200, 10);
  tower = new Tower(120, 360, 120, 300);
  cannonBase = new Cannon(140, 130, 130, 100, 0);
  cannonBall = new CannonBall(cannonBase.x, cannonBase.y);
}

function draw() {
  background(Pirate_background);
  Engine.update(myEngine);
  tower.display();
  cannonBase.display();
  cannonBall.display();
}
function keyReleased() {
  if (keyCode == DOWN_ARROW) {
    console.log("hi");
    cannonBall.shoot();
  }
}
