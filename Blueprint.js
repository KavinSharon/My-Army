const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform;
var player,enemies;
var bG,bGImage;
function preload(){
bGImage = loadImage("India Background.jpg")
}

function setup(){
createCanvas(1600,800);
engine = Engine.create();
world = engine.world;
ground = new Ground(800,780,1600,40);

//creating BackGround
 bG= createSprite(800,400,1600,800);
bG.addImage("Ind",bGImage); 

//creating Player  
 player = createSprite(30,760,10,60);
}

function draw(){
Engine.update(engine);
background("white");
ground.display();
ground.move();

//making the player jump  
if(keyDown("space")&& player.y >= 180){
player.velocityY = -10;
}

//making the player move right using arrowKeys
if(keyDown("right")){
player.velocityX = 8;
}

//making the player move left using arrowKeys
if(keyDown("left")){
player.velocityX = -8;
}

if(player.x>bG.x){
bG.x = player.x+200;
}

//giving the player gravity
player.velocityY = player.velocityY + 0.8;

// colliding the player with the two grounds
// player.collide(ground);
// player.collide(platform);

//setting camera position
camera.position.x = player.x;

// ground.x = player.x+100;

spawnTerrorists();
drawSprites();

}

function spawnTerrorists(){
if(frameCount%70 === 0){
var terrorists = createSprite(camera.x+200, 200);

}



}

function spawnOstacles(){
if(frameCount%70 === 0){
 var obsatacles = createSprite(200, 200);
 
}
}