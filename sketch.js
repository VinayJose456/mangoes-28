
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
//var slingshot;
var options={
	isStatic: false,
	restitution:0,
	friction:1,
	density:1.2
}

function preload(){
	boy=loadImage("images/boy.png");
	stoneObj=loadImage("images/stone.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	slingshot=new SlingShot(stoneObj.body,{x:200, y:50});
	//slingshot = new SlingShot(bird.body,{x:200, y:50});
	Engine.run(engine);


}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  image(stoneObj ,200,370,75,75);
  

  treeObj.display();
  mango1.display();
  slingshot.display();
  groundObject.display();

}
function mouseDragged(){
    if(gameState!=='launched'){
        Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched"
}
