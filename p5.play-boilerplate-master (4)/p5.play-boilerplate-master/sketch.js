function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background("black");
  var c = rgb(0, 255, 233);
  fill(c);
  rect(275, 100, 40, 400);
  rect(260, 350, 100, 150);
  rect(130, 300, 100, 200);
  rect(200, 250, 100, 250);
  var b = rgb(0, 101, 255);
  fill(b);
  triangle(295, 10, 340, 100, 250, 100);
  triangle(315, 260, 390, 350, 245, 350);
  triangle(175, 210, 250, 300, 105, 300);
  triangle(257, 160, 325, 250, 180, 250);
  drawSprites();
  //295, 100   340, 100   250, 100
}