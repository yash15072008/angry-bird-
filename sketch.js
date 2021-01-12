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
    
    bird =new Bird(100,100);

    box1 =new Box(800,550);
    box2 =new Box(1000,550);
    pig1 =new Pig(900,550);
    log1 =new Log(900,510,300,PI/2);
    
    box3 =new Box(800,450);
    box4 =new Box(1000,450);
    pig2 =new Pig(900,450);
    log2 =new Log(900,410,300,PI/2);

    box5 =new Box(900,350);
    log3 =new Log(800,350,150,PI/7);
    log4 =new Log(1000,350,150,-PI/7);
 
}

function draw(){
    background(0);
    Engine.update(myEngine);
    
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    bird.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();

}