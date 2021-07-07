var ship, ship_running,sea,seaImage,edges;
function preload(){ 
  ship_running =  loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
    seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(100,90,50,50);
  sea.velocityX=-5; 
  sea.addImage(seaImage);
  sea.scale = 0.5;
  ship = createSprite(200,130,30,30);
  ship.addAnimation("swimming",ship_running);
  ship.scale = 0.3;
}

function draw() {
 background("blue");
  sea.velocityX = -2;
  
  if(sea.x<0){
    sea.x = sea.x+ sea.width/8;
  }
  drawSprites();
 
}