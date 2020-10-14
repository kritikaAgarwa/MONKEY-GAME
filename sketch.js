
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground,invisibleGround,groundImage;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 groundImage=loadImage("ground2.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("obstacle.png")
}



function setup() {
  createCanvas(600, 400);
  
  monkey = createSprite(50,400,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.20;
  
  
  ground = createSprite(300,400,600,15);
  ground.velocityX= -3;
  ground.x = ground.width /2;
  ground.addImage("ground",groundImage);
  
  invisibleGround = createSprite(200,400,400,5);
  invisibleGround.visible = false;
  
   
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
   background("white")
  
  if(keyDown("space")&& monkey.y >=195) {
        monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");    
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime : "+survivalTime,100,50);
  
  spawnObstacles();
  foodSpawn();
  drawSprites();
}

function foodSpawn(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,100,60,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
  
}
 
function spawnObstacles(){
    if(frameCount%300===0){
  var obstacle = createSprite(290,400,50,50);
  obstacle.y = Math.round(random(300,410));
  obstacle.addImage(obstacleImage);
  obstacleGroup.add(obstacle);
  obstacle.velocityX=-5;
  obstacle.lifetime = 300;
  obstacle.scale=0.20;
}
}

 
  
