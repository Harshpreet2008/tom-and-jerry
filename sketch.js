var bg;
var cat,catIMG;
var mouse,mouseIMG;
function preload() {
    //load the images here
  bg = loadImage("garden.png");
  catIMG = loadImage("cat1.png");
  mouseIMG = loadImage("mouse1.png");
  catIMG2 = loadImage("cat2.png")
  mouseIMG2 = loadImage("mouse2.png");
  catIMG3 = loadImage("cat3.png")
  mouseIMG3 = loadImage("mouse3.png");
  catIMG4 = loadImage("cat4.png")
  mouseIMG4= loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(150,50,20,50);
    cat.addAnimation("cat",catIMG);
    cat.scale = 0.8;

    mouse = createSprite(50,150,20,50);
    mouse.addAnimation("mouse",mouseIMG);
    mouse.scale = 0.8;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < cat.width/2 + mouse.width/2){
        cat.addAnimation("catHappy",catIMG4)
        cat.changeAnimation("catHappy");
        mouse.addAnimation("mouseHappy",mouseIMG4);
        mouse.changeAnimation("mouseHappy");
    }
   
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){
    
    mouse.addAnimation("mouseTeasing",mouseIMG2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
if(keyCode === LEFT_ARROW){
cat.addAnimation("catMoving",catIMG2)
cat.changeAnimation("catMoving");
    cat.frameDelay = 25;
}
}
