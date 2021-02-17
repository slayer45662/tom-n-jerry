var jungle,jungleimage
var cat,catsit,catwalk,catstop
var mouse,mousecheese,mousewave,mouseglass
function preload() {
    //load the images here
    jungleimage = loadImage("images/garden.png")
    catsit = loadImage("images/cat1.png")
    catwalk = loadAnimation("images/cat2.png","images/cat3.png")
    catstop = loadAnimation("images/cat4.png")
    mousecheese = loadImage("images/mouse1.png")
    mousewave = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseglass = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jungle = createSprite(500,400,1000,800)
    jungle.addImage(jungleimage)
    cat = createSprite(650,650,50,50)
    cat.scale = 0.1
    cat.addImage(catsit)
    cat.addAnimation("moving",catwalk)
    cat.addAnimation("sitting",catstop)
    cat.debug = true
    cat.setCollider("circle",0,0,30)

    
    mouse = createSprite(250,650,50,50)
    mouse.scale = 0.1
    mouse.addImage(mousecheese)
    mouse.addAnimation("waving",mousewave)
    mouse.addAnimation("standing",mouseglass)
    mouse.debug = true


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.velocityX = 0
        cat.changeAnimation("sitting",catstop)
        mouse.changeAnimation("standing",mouseglass)


    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===UP_ARROW){
    cat.changeAnimation("moving",catwalk)
    cat.velocityX = -4
    mouse.changeAnimation("waving",mousewave)
 }

}
