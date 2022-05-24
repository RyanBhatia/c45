var bg
var ground
var boyimg
var boy
//var zombie
function preload(){
  bg = loadImage("bg img.jpeg")
  boyimg = loadImage("boy.png")
  //zombie = loadImage("") 
}

function setup() {

  createCanvas(windowWidth, windowHeight);
 ground = createSprite(width/2, height-10, windowWidth, 50);
 ground.visible = false
 boy = createSprite(50, height-120,20,50)
boy.addImage(boyimg)
boy.scale = 0.5
boy.velocityX = 6

}

function draw() {
  background(bg);  
  if(boy.x>1200){
    boy.x = 50
  }
console.log(boy.x)

  drawSprites();
}

//function zombieSpawn(){
  
//}