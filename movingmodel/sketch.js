function setup() {
  createCanvas(800, 600);
  background(255, 248, 224);
  colorMode(HSB,360,100,100,100);
}

function draw() {
  if(mouseIsPressed){
    fill (0);
  } else {
    fill(255);
    triangle(mouseX,mouseY,80,80);}
}