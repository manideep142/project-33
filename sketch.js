var canvas,background;
var img1,img2,img3,img4;
var backgroundImg;
var bg;  

function setup() {
  backgroundImg = loadImage("snow3.jpg")
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
}

function draw() {
  
  //this.ground = loadImage("snow1.jpg",500,400);

  

  background(backgroundImg);  
  drawSprites();
}
