var Movingrect;
var Fixedrect;
var Rect3
var Rect4





function setup() {
  createCanvas(800,400);
  Movingrect = createSprite(400, 200, 50, 50);
  Fixedrect = createSprite(300,100,50,50);
  Rect3 = createSprite(100,100,50,50);
  Rect4 = createSprite(450,100,50,50);
}

function draw() {
  background(180);  
  drawSprites();
  Movingrect.x = mouseX;
  Movingrect.y = mouseY;

  


  if(Mytouching(Movingrect,Rect4)){
    Movingrect.shapeColor="red";
    Rect4.shapeColor="red";
  }
  else
  {
    Movingrect.shapeColor="green";
    Rect4.shapeColor="green";
  }

}


