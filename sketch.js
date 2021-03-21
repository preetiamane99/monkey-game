 
var monkey , monkey_running
var banana ,bananaImage, obstacles, obstaclesImage
var FoodsGroup, obstaclesGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 obstaclesImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  createCanvas(400,400);
  monkey=createSprite(80,300,20,20)
monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  
  ground=createSprite(400,320,900,10)
  ground.velocityX=4;
  ground.x=ground.width/2
  ground.collide(monkey)
  console.log(ground.x)
  obstaclesGroup = new Group();
  foodsGroup = new Group ();
}


function draw() {

  
  background ("white");
  obstacles();
  foods();
  
  text("survivalTime:" + survivalTime, 100,50)
  stroke("white")
  textSize(20)
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())
  
  ground.velocityX= -4
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  monkey.collide(obstaclesGroup)
  
  
 
  drawSprites();
    
   if(monkey.isTouching(foodsGroup)){
    survivalTime=survivalTime+1
  }
}
function obstacles() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
   var obstacles = createSprite(400,310,40,10);
  //  obstacles.y = Math.round(random(10,300));
    obstacles.addImage(obstaclesImage);
    obstacles.scale = 0.1;
    obstacles.velocityX = -3;
    
    obstaclesGroup.add(obstacles);
  }

}


  function foods() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
    banana .y = Math.round(random(10,60));
    banana .addImage(bananaImage);
    banana .scale = 0.1;
    banana .velocityX = -3;
    
     //assign lifetime to the variable
    banana .lifetime = 134;
    
    //adjust the depth
    banana .depth = monkey.depth;
    monkey.depth = banana.depth + 1;
    
    //adding banana to the group
   foodsGroup.add(banana );
    }
}





