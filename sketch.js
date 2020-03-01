function setup() {
  createCanvas(500, 400);
  background(227, 214, 179);

}

function draw() {
  drawWindowPanes();
  drawSmallWindows(4, 4);
  drawWalls();
  drawBigCouch();
  drawSmallCouch();


  //decor
  fill(247, 231, 225)
  ellipse(380, 283, 20, 30)
  ellipse(400, 290, 15, 20)
  fill(0)
  rect(325, 285, 8, 15)
  rect(312, 285, 8, 15)
  rect(298, 285, 8, 15)
  rect(230, 260, 35, 40)


  fill(191, 92, 6)
  ellipse(386, 346, 50, 20)
  fill(227, 216, 207)
  ellipse(200, 330, 20, 50)
}

function drawWindowPanes() {
  stroke(0);
  strokeWeight(2)
  fill(207, 120, 91)
  rect(75, 100, 75, 200);
  rect(200, 100, 225, 200)
  fill(0)
  rect(70, 100, 85, 2)
  rect(195, 100, 235, 2)
}

function drawSmallWindows(rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      fill(155);
      stroke(54, 70, 89);
      strokeWeight(3)
      rect(93, 105 + j * 50, 35, 35)
      rect(205 + i * 60, 105 + j * 50, 35, 35)
    }
  }
}

function drawWalls() {
  stroke(163, 155, 134);
  strokeWeight(1);
  // line()
  let x = mouseX;
  let y = mouseY;
  //console.log(x, y); // used to figure out cordinants for lines
  line(60, 70, 0, 30)
  line(60, 70, 60, 380)
  line(60, 70, 450, 70)
  line(60, 380, 40, 400)
  line(450, 70, 500, 30)
  line(450, 70, 450, 380)
  line(450, 380, 460, 400)
}

function drawBigCouch() {
  stroke(0)
  fill(13, 81, 140); //couch dark
  rect(190, 305, 250, 45);
  fill(70, 128, 179); //couch light
  rect(180, 350, 270, 40)
  fill(219, 164, 0) //couch arms
  rect(180, 330, 10, 20)
  rect(440, 330, 10, 20)

}

function drawSmallCouch() {
  fill(13, 81, 140);
  rect(68, 305, 80, 45)
  fill(70, 128, 179);
  rect(60, 350, 95, 40)
  fill(219, 164, 0) //couch arms
  rect(60, 330, 10, 20)
  rect(145, 330, 10, 20)
}
