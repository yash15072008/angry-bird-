const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1, box2, ground;

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    ground = new Ground(600,590,1200,20);

    box1 =new Box(800,550);
    box2 =new Box(1000,550);
    
}

function draw(){
    background(0);
    Engine.update(myEngine);
    
    ground.display();
    box1.display();
    box2.display();
}