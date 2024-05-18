html, body {
  margin: 0;
  padding: 0;
}
canvas {
  display: block;
}
function setup() {
  createCanvas(600, 600);
   background("black");
}

function draw() {
 stroke("blue");
  fill("red");

  if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 35);
  }
}

