const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();

  world=engine.world;

  // ground=new Ground(width/2, height, width, 20);
  
  for (var k = 0; k <=width; k =k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
   
   for (var j = 75; j <=width; j=j+50)
   {
     blocks.push(new Block(j,75));
   }
   
   for (var j = 50; j <=width-10; j=j+50)
   {
     blocks.push(new Block(j,175));
   }
   
   for (var j = 75; j <=width; j=j+50)
   {
     blocks.push(new Block(j,275));
   }
   
   for (var j = 50; j <=width-10; j=j+50)
   {
     blocks.push(new Block(j,375));
   }
}

var balls= [];
var blocks= [];
var divisions= [];

var divisionHeight= 300;
var score=0;

function draw() {
  background(255,255,255);

  text("Score: "+score, 50, 40);

  Engine.update(engine);

  for (var i = 0; i < blocks.length; i++) { 
    blocks[i].display(); 
  } 
  if(frameCount%60===0){ 
    balls.push(new Ball(random(width/2-30, width/2+30), 10,10)); 
    score++; } 
    for (var j = 0; j < balls.length; j++) { 
      balls[j].display(); } 
      for (var k = 0; k < divisions.length; k++) { 
      divisions[k].display(); }

      // if(balls!=null)
      // {
      // balls.display();
      // if (balls.body.position.y>760)
      // {
      //   if(balls.body.position.x<300)
      //   {
      //   score=score+500;
      //   particle=null;
      //   if(count>=5) gameState="end";
      // }
      //   }
      // }

  // ground.display();
//   function mousePressed (){
//     if(gameState!=="end");
//   {
//   count++;
//   balls=new Ball(mouseX, 10, 10, 10);
//   }}
  
//   drawSprites();
}