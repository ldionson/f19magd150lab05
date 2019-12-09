var rectX, rectY;      
var circleX, circleY;  
var rectSize = 30;     
var circleSize = 30;   
var rectColor, circleColor, baseColor;
var rectHighlight, circleHighlight;
var currentColor;
var rectOver = false;
var circleOver = false;

var cx,cy; //circle
var cspeed; // motion for circle

function setup() {
  createCanvas(600, 600);
  rectColor = color(75);
  rectHighlight = color(226, 19, 234);
  circleColor = color(75);
  circleHighlight = color(226, 243, 14);
  baseColor = color(255);
  tvColor = baseColor;
  circleX = width/2+circleSize+197;
  circleY = height/2;
  rectX = width/2+rectSize+182;
  rectY = height/2-rectSize/2-65;
//  ellipseMode(CENTER);
  a = height / 2;
  cx=95;
  cy=height/2;
  cspeed =3;

}

function draw() {
  update(mouseX, mouseY);
  background(111, 70, 85);
  strokeWeight (3);

  //television frame
  fill(73, 85, 92)
  rect(50, 125, 500, 400);
  fill(tvColor)
  rect(95, 150, 410, 350);

  //anteanna
  line(300, 125, 100, 75);
  line(300, 125, 500, 75);

  //ellipse(526, 300, 30, 30);

  //button labels
  fill(225, 44, 18);
  textSize(22);
  text('1', 520, 242);
 
  fill(52, 105, 235);
  text('2', 520, 308);

  //toggled text
  fill(0);
  text('Loading...', 255, 280);

  //loading bar
  fill(0)
  rect(cx,cy,100,25);
  cx+= cspeed;  // move rectangle horizontally by speed variable
  
  // set conditional for rectangle touching the edges
  if(cx-95 <= 0 || cx+95>500){  
    cspeed *= -1; //reset so that rectangle begins off-screen
  }

  if (rectOver) {
    fill(rectHighlight);
  } else {
    fill(rectColor);
  }
  rect( rectX, rectY, rectSize, rectSize);

  if (circleOver) {
    fill(circleHighlight);
  } else {
    fill(circleColor);
  }
  ellipse(circleX, circleY, circleSize, circleSize);

  //button labels
  fill(225, 44, 18);
  textSize(22);
  text('1', 520, 242);
 
  fill(52, 105, 235);
  text('2', 520, 308);

}
function update( x,  y) {
  if ( overCircle(circleX, circleY, circleSize) ) {
    circleOver = true;
    rectOver = false;
  } else if ( overRect(rectX, rectY, rectSize, rectSize) ) {
    rectOver = true;
    circleOver = false;
  } else {
    circleOver = rectOver = false;
  }
}

function mousePressed() {
  if (circleOver) {
    tvColor = baseColor
  }
  if (rectOver) {
    tvColor = color(0)
  }
}

function overRect( x,  y,  width,  height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

function overCircle( x,  y,  diameter) {
  var disX = x - mouseX;
  var disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < diameter/2 ) {
    return true;
  } else {
    return false;
  }
}