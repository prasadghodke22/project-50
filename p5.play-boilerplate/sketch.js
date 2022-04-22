var astroid, heart1, heart2, heart3, spaceship
var astroidImg, heart1Img, heart2Img, heart3Img, bgImg, spaceshipImg


function preload() {

  heart1Img = loadImage("images/heart_1.png")
  heart2Img = loadImage("images/heart_2.png")
  heart3Img = loadImage("images/heart_3.png")

  spaceshipImg = loadImage("images/spaceship.jpg")
  bgImg = loadImage("images/background.png")
  astroidImg = loadImage("images/astroid.jpg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  createSprite(400, 200, 50, 50);
}



function draw(bgImg) {
  background(255, 255, 255);
  drawSprites();
}