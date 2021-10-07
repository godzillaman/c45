var bg,bgImg;
var theif,theifImg
var spiderman,spidermanImg;
var tower,towerImg;

function preload(){
  
 
  bgImg = loadImage("assets/background.jpg")
  theifImg=loadImage("assets/theif.png")
  spidermanImg=loadImage("assets/spiderman.png")
  towerImg=loadImage("assets/tower.gif")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.2
  

//creating the player sprite
  theif=createSprite(width-100,height-50,50,50);
  theif.addImage(theifImg)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches


//player goes back to original standing image once we stop pressing the space bar


drawSprites();

}
