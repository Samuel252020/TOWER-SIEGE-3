const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

var polygon, polygon_Img;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var floatingG1, floatingG2, bottomG;
var launcher;
var score;

//function preload(){
  //polygon_Img = loadImage("sprites/circle.jpg");
//}

function setup(){
  createCanvas(1200, 700);
  score = 0;

 
	engine = Engine.create();
  world = engine.world;
  
  floatingG1 = new Ground (500, height-100, 320, 10);
  floatingG2 = new Ground (900, height-300, 300, 10);
  bottomG = new Ground (width/2, height-5, width, 10);


  //pyramid_1
  block1 = new lightBlueBlock (380, height-130, 40, 50, 0);
  block2 = new lightBlueBlock (420, height-130, 40, 50, 0);
  block3 = new lightBlueBlock (460, height-130, 40, 50, 0);
  block4 = new lightBlueBlock (500, height-130, 40, 50, 0);
  block5 = new lightBlueBlock (540, height-130, 40, 50, 0);
  block6 = new lightBlueBlock (580, height-130, 40, 50, 0);
  block7 = new lightBlueBlock (620, height-130, 40, 50, 0);

  block8 = new redBlock (420, height-180, 40, 50, 0);
  block9 = new redBlock (460, height-180, 40, 50, 0);
  block10 = new redBlock (500, height-180, 40, 50, 0);
  block11 = new redBlock (540, height-180, 40, 50, 0);
  block12 = new redBlock (580, height-180, 40, 50, 0);

  block13 = new PinkBlock (460, height-230, 40, 50, 0);
  block14 = new PinkBlock (500, height-230, 40, 50, 0);
  block15 = new PinkBlock (540, height-230, 40, 50, 0);

  block16 = new GreyBlock (500, height-280, 40, 50, 0);

  //pyramid_2
  block17 = new lightBlueBlock (820, height-330, 40, 50, 0);
  block18 = new lightBlueBlock (860, height-330, 40, 50, 0);
  block19 = new lightBlueBlock (900, height-330, 40, 50, 0);
  block20 = new lightBlueBlock (940, height-330, 40, 50, 0);
  block21 = new lightBlueBlock (980, height-330, 40, 50, 0);

  block22 = new PinkBlock (860, height-380, 40, 50, 0);
  block23 = new PinkBlock (900, height-380, 40, 50, 0);
  block24 = new PinkBlock (940, height-380, 40, 50, 0);

  block25 = new redBlock (900, height-430, 40, 50, 0);
  
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
  };
  polygon = Bodies.circle(50, 200, 20, options);
  World.add(world, polygon);

  launcher = new Launcher (this.polygon, {x:100, y:200}); 

  Engine.run(engine);

}


function draw(){

  background("grey");
  textSize(25);
  fill("white");
  text("Press 'Space' to get a second Chance to Play!!",50 ,50);
  text("Score: "+score, width-150, 50);
  Engine.update(engine);
  

  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  
  
  floatingG1.display();
  floatingG2.display();
  bottomG.display();

  launcher.display();

  //imageMode(CENTER);
  ellipseMode(RADIUS);
  fill("yellow");
  ellipse(polygon.position.x, polygon.position.y, 20, 20);
  //image(polygon_Img, polygon.position.x, polygon.position.y, 40, 40);

  drawSprites();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
 
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(this.polygon, {x:235, y:420});
    launcher.attach(this.polygon);
  }
}
