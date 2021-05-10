const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;

var polygon, p_image;
var slingshot;
var gr1, gr2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26;

function preload(){
    p_image = loadImage("polygon.png");
}
function setup(){
    createCanvas(1200, 700);

    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(150,500,20);
    World.add(world, polygon);

    slingshot = new SlingShot(this.polygon, {x: 150, y: 500});

    gr1 = new Ground(610, 500, 250, 10);
    gr2 = new Ground(960, 300, 200, 10);

    b1 = new Box(900, 275, 30, 40);
    b2 = new Box(930, 275, 30, 40);
    b3 = new Box(960, 275, 30, 40);
    b4 = new Box(990, 275, 30, 40);
    b5 = new Box(1020, 275, 30, 40);
    b6 = new Box(930, 235, 30, 40)
    b7 = new Box(960, 235, 30, 40)
    b8 = new Box(990, 235, 30, 40)
    b9 = new Box(960, 195, 30, 40);

    b11 = new Box(520,475,30,40);
    b12 = new Box(550,475,30,40);
    b13 = new Box(580,475,30,40);
    b14 = new Box(610,475,30,40);
    b15 = new Box(640,475,30,40);
    b16 = new Box(670,475,30,40);
    b17 = new Box(700,475,30,40);
    b18 = new Box(550,435,30,40);
    b19 = new Box(580,435,30,40);
    b20 = new Box(610,435,30,40);
    b21 = new Box(640,435,30,40);
    b22 = new Box(670,435,30,40);
    b23 = new Box(580,395,30,40);
    b24 = new Box(610,395,30,40);
    b25 = new Box(640,395,30,40);
    b26 = new Box(610,355,30,40);

    Engine.run(engine);

}

function draw(){
    background("pink");

    imageMode(CENTER);
    image(p_image, polygon.position.x, polygon.position.y, 40, 40);

    gr1.display();
    gr2.display();

    push();
    fill("lightblue");
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    pop();

    push();
    fill("lightgreen");
    b6.display();
    b7.display();
    b8.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    pop();

    push();
    fill("yellow")
    b23.display();
    b24.display();
    b25.display();
    pop();

    push();
    fill("grey")
    b9.display();
    b26.display();
    pop();

    slingshot.display();

    detectCollision(polygon, b1);
    detectCollision(polygon, b2);
    detectCollision(polygon, b3);
    detectCollision(polygon, b4);
    detectCollision(polygon, b5);
    detectCollision(polygon, b6);
    detectCollision(polygon, b7);
    detectCollision(polygon, b8);
    detectCollision(polygon, b9);

    detectCollision(polygon, b11);
    detectCollision(polygon, b12);
    detectCollision(polygon, b13);
    detectCollision(polygon, b14);
    detectCollision(polygon, b15);
    detectCollision(polygon, b16);
    detectCollision(polygon, b17);
    detectCollision(polygon, b18);
    detectCollision(polygon, b19);
    detectCollision(polygon, b20);
    detectCollision(polygon, b21);
    detectCollision(polygon, b22);
    detectCollision(polygon, b23);
    detectCollision(polygon, b24);
    detectCollision(polygon, b25);
    detectCollision(polygon, b26);
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(this.polygon, {x: 235, y: 420});
		slingshot.attach(this.polygon);
	}
}

function detectCollision(p, b){
	var boxbody = b.body.position;
	var pbody = p.position;

	var distance = dist(pbody.x, pbody.y, boxbody.x, boxbody.y);
	if(distance <= 50){
		Body.setStatic(b.body, false);
	}
}