
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,tree,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12,mango13;
var stoneObj,launcherObj;


var gameState="onSling"

function preload() {
  
}

function setup(){
      createCanvas(1200,900);
    
	engine = Engine.create();
      world = engine.world;
    
      ground = new Ground(600,850,1200,20);

      tree = new Tree(900,465,600,800);
     
      boy = new Boy(200,760,320,380);
   
      
      mango1= new Mango(850,330,90);
     
      mango2= new Mango(690,320,80);

      mango3= new Mango(900,190,70);
    
      mango4= new Mango(1000,180,100);
     
      mango5= new Mango(760,250,60);
   
      mango6= new Mango(1100,290,85);

      mango7= new Mango(1000,290,75);

      mango8= new Mango(940,260,95);

      mango9= new Mango(990,370,86);

      mango10= new Mango(830,200,86);

      mango11= new Mango(740,400,79);

      mango12= new Mango(780,330,88);

      mango13= new Mango(1100,290,100);

      stoneObj= new Stone(100,670,60,60);

    launcherObj= new Launcher(stoneObj.body,{x:100,y:670})
}

function draw(){
      background(225);
      Engine.update(engine);
      


     
      stoneObj.display();

      boy.display();
      
      tree.display();
      mango1.display();
      mango2.display();
      mango3.display();
      mango4.display();
      mango5.display();
      mango6.display(); 
      mango7.display();
      mango8.display();
      mango9.display();
      mango10.display();
      mango11.display();
      mango12.display();
      mango13.display();
     
      ground.display(); 

      launcherObj.display();


    

      detectCollision(stoneObj,mango1);
      detectCollision(stoneObj,mango2);
      detectCollision(stoneObj,mango3);
      detectCollision(stoneObj,mango4);
      detectCollision(stoneObj,mango5);
      detectCollision(stoneObj,mango6);
      detectCollision(stoneObj,mango7);
      detectCollision(stoneObj,mango8);
      detectCollision(stoneObj,mango9);
      detectCollision(stoneObj,mango10);
      detectCollision(stoneObj,mango12);
      detectCollision(stoneObj,mango13);

}

function detectCollision(lstone,lmango){
      mangoBodyPosition = lmango.body.position
      stoneBodyPosition = lstone.body.position
                                                                                                                
      var distance = dist( stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

      if(distance<=lmango.r+lstone.r){
            Matter.Body.setStatic(lmango.body,false);
      }
}

function mouseDragged(){
      if(gameState !== "launched"){
          Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
      }
      }
     
  
  
  function mouseReleased(){
      launcherObj.fly();
      gameState="launched";
  }
  
  function keyPressed(){
      if(keyCode === 32){
          launcherObj.attach(stoneObj.body);
      }
  }