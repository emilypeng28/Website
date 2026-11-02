
//setup

//canvas height and width
let cx = 400;
let cy = 400;

//arrays with x and y position for snake units
const sx = [200, 200, 200, 200, 200];
const sy = [300, 305, 310, 315, 320];

//x and y position for apple
let a = 0;
let ax = 200;
let ay = 200;

//trigger for direction the snake goes from keyboard
let i = 1;
let ii = 0;

//if apple is eaten triggers
let v = 0;
let vx = 0;
let vy = 0;

let game = 0;
let dd = 0;
let b = 20;
let st = 0;

let pz = 0;



      let myWidth=400;
      let myHeight=400;

         

      function setup() {
          
      if (windowWidth/400 < (windowHeight-30)/400){
          myWidth=windowWidth;
          myHeight=400*windowWidth/400;
      }
      else {
          myWidth=400*(windowHeight-30)/400;
          myHeight=windowHeight-30;
      }
        createCanvas(myWidth, myHeight);

        frameRate(25);
      }



      function windowResized() {
              
      if (windowWidth/400 < (windowHeight-30)/400){
          myWidth=windowWidth;
          myHeight=400*windowWidth/400;
      }
      else {
          myWidth=400*(windowHeight-30)/400;
          myHeight=windowHeight-30;
      }
          resizeCanvas(myWidth, myHeight);
      }

//key functions
function keyPressed() {
  if (key == "w" && i != 4) {
    ii = i;
    i = 1;
  }
  if (key == "a" && i != 3) {
    ii = i;
    i = 2;
  }
  if (key == "d" && i != 2) {
    ii = i;
    i = 3;
  }
  if (key == "s" && i != 1) {
    ii = i;
    i = 4;
  }

  if (key == "z") {
    noLoop();
  }
  if (key == "x") {
    loop();
  }

  //screens
  if (key == " ") {
    if (game == 0) {
      game = 1;
      i = 1;
    } else if (game == 1) {
      if (pz == 0) {
        noLoop();
        
        pz = 1;
      } else if (pz == 1) {
        loop();
    background(240, 255, 240);    
     checkerBackground(cx, cy, b, st);
    fill(0, 100, 0);
    rect(0, 0, cx, b);
    rect(0, cy - b, cx, b);
    rect(0, 0, b, cy);
    rect(cx - b, 0, b, cy);
        pz = 0;
      }
    } else if (game == 2) {
      reload();
      game = 1;
    }
  }
  
  //arrow keys
      if (keyCode == UP_ARROW && i != 4) {
      ii = i;
      i = 1;
    }
    if (keyCode == LEFT_ARROW && i != 3) {
      ii = i;
      i = 2;
    }
    if (keyCode == RIGHT_ARROW && i != 2) {
      ii = i;
      i = 3;
    }
    if (keyCode == DOWN_ARROW && i != 1) {
      ii = i;
      i = 4;
    }
  
  
}

//---------------myfunctions---------------

//for changing the snake's direction
function turnup() {
  //keyboard

  if (ii == 2) {
    //       rd=0;
    yy = sy[0];

    rd = (sx[0] - Math.floor(sx[0] / 20) * 20) / 5;
    for (u = 0; u < rd; u++) {
      sx[0] = sx[0] - 5;

      if (sx[0] < 1) {
        sx[0] = 400;
      }

      //move array back
      moveBack(sx, 1);
      moveBack(sy, 1);

      sy[0] = yy;

      //   print(sx[0]);
    }

    ii = 0;
  }

  if (ii == 3) {
    //              rd=0;
    yy = sy[0];
    //    print(yy);
    rd = (Math.ceil(sx[0] / 20) * 20 - sx[0]) / 5;
    for (u = 0; u < rd; u++) {
      sx[0] = sx[0] + 5;

      if (sx[0] < 1) {
        sx[0] = 400;
      }

      //move array back
      moveBack(sx, 1);
      moveBack(sy, 1);

      sy[0] = yy;

      //   print(sx[0]);
    }

    ii = 0;
  }

  sy[0] -= 5;
}

function turnleft() {
  //  sx[0] -= 5;

  if (ii == 4) {
    yy = sx[0];

    rd = (Math.ceil(sy[0] / 20) * 20 - sy[0]) / 5;
    for (u = 0; u < rd; u++) {
      sy[0] = sy[0] + 5;

      if (sy[0] < 1) {
        sy[0] = 400;
      }
      //move array back
      moveBack(sx, 1);
      moveBack(sy, 1);
      sx[0] = yy;

      //   print(sx[0]);
    }

    ii = 0;
  }
  if (ii == 1) {
    yy = sx[0];
    //  print(yy);
    rd = (sy[0] - Math.floor(sy[0] / 20) * 20) / 5;
    for (u = 0; u < rd; u++) {
      sy[0] = sy[0] - 5;

      if (sy[0] < 1) {
        sy[0] = 400;
      }
      //move array back
      moveBack(sx, 1);
      moveBack(sy, 1);
      sx[0] = yy;

      //   print(sx[0]);
    }

    ii = 0;
  }

  sx[0] -= 5;
}

function turnright() {
  if (i == 3) {
    if (ii == 4) {
      yy = sx[0];

      rd = (Math.ceil(sy[0] / 20) * 20 - sy[0]) / 5;
      for (u = 0; u < rd; u++) {
        sy[0] = sy[0] + 5;

        if (sy[0] < 1) {
          sy[0] = 400;
        }
        //move array back
        moveBack(sx, 1);
        moveBack(sy, 1);

        sx[0] = yy;

        //   print(sx[0]);
      }

      ii = 0;
    }
    if (ii == 1) {
      yy = sx[0];

      rd = (sy[0] - Math.floor(sy[0] / 20) * 20) / 5;
      for (u = 0; u < rd; u++) {
        sy[0] = sy[0] - 5;

        if (sy[0] < 1) {
          sy[0] = 400;
        }

        //move array back
        moveBack(sx, 1);
        moveBack(sy, 1);

        sx[0] = yy;

        //   print(sx[0]);
      }

      ii = 0;
    }

    sx[0] += 5;
  }
}

function turndown() {
  if (ii == 3) {
    yy = sy[0];

    rd = (Math.ceil(sx[0] / 20) * 20 - sx[0]) / 5;
    for (u = 0; u < rd; u++) {
      sx[0] = sx[0] + 5;

      if (sx[0] < 1) {
        sx[0] = 400;
      }

      //move array back
      moveBack(sx, 1);
      moveBack(sy, 1);

      sy[0] = yy;
    }

    ii = 0;
  }

  if (ii == 2) {
    yy = sy[0];

    rd = (sx[0] - Math.floor(sx[0] / 20) * 20) / 5;
    for (u = 0; u < rd; u++) {
      sx[0] = sx[0] - 5;

      if (sx[0] < 1) {
        sx[0] = 400;
      }
      //move array back
      moveBack(sx, 1);
      moveBack(sy, 1);

      sy[0] = yy;

      //   print(sx[0]);
    }

    ii = 0;
  }

  sy[0] += 5;

  //        sx[0] = Math.floor(sx[0]/20)*20;
  //  ii=0;
}

//creates the pixel snake on title screen
function sku() {
  const ary = [
    10,
    11,
    12,
    10,
    13,
    4,
    5,
    6,
    9,
    14,
    2,
    3,
    7,
    9,
    11,
    15,
    1,
    4,
    5,
    8,
    12,
    15,
    1,
    8,
    10,
    12,
    15,
    1,
    8,
    9,
    12,
    15,
    1,
    8,
    12,
    15,
    1,
    4,
    5,
    8,
    12,
    15,
    2,
    8,
    11,
    15,
    3,
    4,
    7,
    8,
    9,
    10,
    15,
    5,
    6,
    9,
    14,
    10,
    12,
    13,
    14,
    11,
    15,
    12,
    13,
    14,
  ];
  const arx = [
    1,
    1,
    1,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
  ];

  const gy = [
    11,
    10,
    11,
    12,
    4,
    5,
    10,
    12,
    13,
    2,
    3,
    9,
    10,
    13,
    2,
    6,
    2,
    3,
    4,
    5,
    6,
    9,
    13,
    2,
    3,
    4,
    5,
    6,
    10,
    13,
    2,
    3,
    4,
    5,
    6,
    9,
    10,
    13,
    2,
    3,
    6,
    9,
    10,
    13,
    3,
    4,
    5,
    12,
    13,
    11,
    12,
    13,
  ];

  const gx = [
    2,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
  ];

  const dgy = [
    12,
    13,
    14,
    7,
    11,
    14,
    7,
    11,
    14,
    7,
    11,
    14,
    7,
    11,
    14,
    7,
    11,
    14,
    7,
    9,
    10,
    14,
    5,
    6,
    14,
    10,
    11,
    12,
    13,
    11,
    12,
    13,
    14,
  ];

  const dgx = [
    2,
    3,
    4,
    5,
    5,
    5,
    6,
    6,
    6,
    7,
    7,
    7,
    8,
    8,
    8,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    14,
    14,
    14,
  ];

  for (q = 1; q < arx.length; q++) {
    noStroke();
    fill(0, 255, 0);
    rect(gx[q - 1] * 10 + 130, gy[q - 1] * 10 + 200, 10, 10);

    fill(0, 200, 0);
    rect(dgx[q - 1] * 10 + 130, dgy[q - 1] * 10 + 200, 10, 10);
    //         noFill();
    // stroke(0);
    fill(0);
    rect(arx[q] * 10 + 130, ary[q] * 10 + 200, 10, 10);

    fill(255, 100, 100);
    rect(170, 260, 10, 10);
    rect(230, 260, 10, 10);
  }
}

function skd() {
  const aryy = [
    10,
    11,
    12,
    10,
    13,
    5,
    6,
    7,
    9,
    14,
    3,
    4,
    8,
    9,
    11,
    15,
    2,
    5,
    6,
    9,
    12,
    15,
    2,
    9,
    10,
    12,
    15,
    2,
    9,
    9,
    12,
    15,
    2,
    9,
    12,
    15,
    2,
    5,
    6,
    9,
    12,
    15,
    3,
    9,
    11,
    15,
    4,
    5,
    8,
    9,
    9,
    10,
    15,
    6,
    7,
    9,
    14,
    10,
    12,
    13,
    14,
    11,
    15,
    12,
    13,
    14,
  ];
  const arxx = [
    1,
    1,
    1,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    11,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
  ];

  const gyy = [
    11,
    10,
    11,
    12,
    5,
    6,
    10,
    12,
    13,
    3,
    4,
    9,
    10,
    13,
    3,
    7,
    3,
    4,
    5,
    6,
    7,
    9,
    13,
    3,
    4,
    5,
    6,
    7,
    10,
    13,
    3,
    4,
    5,
    6,
    7,
    10,
    10,
    13,
    3,
    4,
    7,
    10,
    10,
    13,
    4,
    5,
    6,
    12,
    13,
    11,
    12,
    13,
  ];

  const gxx = [
    2,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    8,
    9,
    9,
    9,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
  ];

  const dgyy = [
    12,
    13,
    14,
    8,
    11,
    14,
    8,
    11,
    14,
    8,
    11,
    14,
    8,
    11,
    14,
    8,
    11,
    14,
    8,
    9,
    10,
    14,
    6,
    7,
    14,
    10,
    11,
    12,
    13,
    11,
    12,
    13,
    14,
  ];

  const dgxx = [
    2,
    3,
    4,
    5,
    5,
    5,
    6,
    6,
    6,
    7,
    7,
    7,
    8,
    8,
    8,
    9,
    9,
    9,
    10,
    10,
    10,
    10,
    11,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    14,
    14,
    14,
  ];

  for (q = 1; q < arxx.length; q++) {
    noStroke();
    // fill(0+q);
    fill(0, 255, 0);
    rect(gxx[q - 1] * 10 + 130, gyy[q - 1] * 10 + 200, 10, 10);

    fill(0, 200, 0);
    rect(dgxx[q - 1] * 10 + 130, dgyy[q - 1] * 10 + 200, 10, 10);

    fill(0);
    // noFill();
    rect(arxx[q] * 10 + 130, aryy[q] * 10 + 200, 10, 10);

    fill(255, 100, 100);
    rect(170, 270, 10, 10);
    rect(230, 270, 10, 10);
  }
}

//for switching between the two title screen snakes
var o = 0;
var p = 0;

//the snake on title screen
const ssy = [140, 140, 140, 140, 140, 140, 140, 140, 140, 140];
const ssx = [300, 305, 310, 315, 320, 325, 330, 335, 340, 345];

//creates title screen
function titleScreen() {
  // checkerBackground(cx, cy, 20);
  background(200, 255, 200);

  fill(0, 100, 0);
  textSize(80);
  text("SNAKE", 70, 90);

  fill(0, 200, 0);
  textSize(20);
  text("Press Space To Start", 110, 120);

  // rect(50, 130, 120, 70)
  // rect(220, 130, 120, 70)

  g=255;
  s=0;
  makeSnake(ssx, ssy, g, s);
  moveBack(ssx, 1);
  moveBack(ssy, 1);
  fill(0);

  fill(0);
  //rect(sx[0], sy[0], 10, 5);
  // rect(sx[0], sy[0]+15, 10, 5);
  ellipse(ssx[0] + 6, ssy[0] + 2.3, 5, 5);
  ellipse(ssx[0] + 6, ssy[0] + 17.5, 5, 5);
  ssx[0] = ssx[0] - 5;
  if (ssx[0] < 0) {
    ssx[0] = 400;
  }

  if (p == 1) {
    if (o == 10) {
      p = 0;
      o = 0;
    } else {
      skd();
      o = o + 1;
    }
  }

  if (p == 0) {
    sku();
    o = o + 1;
    if (o == 10) {
      p = 1;
      o = 0;
    }
  }

  fill(0, 100, 0);
  rect(0, 0, cx, b);
  rect(0, cy - b, cx, b);
  rect(0, 0, b, cy);
  rect(cx - b, 0, b, cy);
}
let g = 250;
let s = 0;
//creates snake body
function makeSnake(sx, sy, g, s) {
  var e = 1;
  //snake border
  for (w = 1; w < sx.length; w++) {
    fill(s, 260, s);
    stroke(0, 100, 0);
    strokeWeight(2);
    //rect(sx[sx.length - w], sy[sy.length - w], 20, 20);
    circle(sx[sx.length - w] + 10, sy[sy.length - w] + 10, 20);
  }
  //snake fill
  for (w = 1; w < sx.length; w++) {
    noStroke();
    if ((w + 4) / 5 == ceil((w + 4) / 5)) {
      fill(0, 200, 0);
    } else {
      fill(s, g, s);
    }

    // rect(sx[sx.length - w], sy[sy.length - w], 20, 20);
    circle(sx[sx.length - w] + 10, sy[sy.length - w] + 10, 20);
  }

  //snake head
  stroke(0, 100, 0);
  strokeWeight(1);
  fill(s, g, s);
  // rect(sx[0], sy[0], 20, 20);
  circle(sx[0] + 10, sy[0] + 10, 20);

  // eyes
  stroke(0);
  if (i == 1) {
    fill(0);
    // rect(sx[0], sy[0], 5, 10);
    //  rect(sx[0]+15, sy[0], 5, 10);
    ellipse(sx[0] + 2.3, sy[0] + 5, 5, 5);
    ellipse(sx[0] + 17.2, sy[0] + 5, 5, 5);
  }
  if (i == 4) {
    fill(0);
    //  rect(sx[0], sy[0]+10, 5, 10);
    //  rect(sx[0]+15, sy[0]+10, 5, 10);
    ellipse(sx[0] + 2.3, sy[0] + 16, 5, 5);
    ellipse(sx[0] + 17.2, sy[0] + 16, 5, 5);
  }
  if (i == 2) {
    fill(0);
    //rect(sx[0], sy[0], 10, 5);
    // rect(sx[0], sy[0]+15, 10, 5);
    ellipse(sx[0] + 5, sy[0] + 2.3, 5, 5);
    ellipse(sx[0] + 5, sy[0] + 17.5, 5, 5);
  }
  if (i == 3) {
    fill(0);
    //  rect(sx[0]+10, sy[0], 10, 5);
    //  rect(sx[0]+10, sy[0]+15, 10, 5);
    ellipse(sx[0] + 13, sy[0] + 2.3, 5, 5);
    ellipse(sx[0] + 13, sy[0] + 17.5, 5, 5);
  }
}

//creates checkerboard background
//cx=canvas width, cy=canvas height, sz=checker size
function checkerBackground(cx, cy, sz, st) {
 // background(240, 255, 240);

  for (q = st; q < cx; q = q + sz * 2) {
    for (w = 0; w < cx; w = w + sz * 2) {
      fill(220, 250, 220);
      noStroke();
      rect(w + sz / 2 + 10, 10 + (q + sz / 2), sz, sz);
    }
  }
  for (q = -sz+st; q < cx; q = q + sz * 2) {
    for (w = -sz; w < cx; w = w + sz * 2) {
      fill(220, 250, 220);
      noStroke();
      rect(w + sz / 2 + 10, q + sz / 2 + 10, sz, sz);
    }
  }
}

//moves each element of array back
//a = the array, sp = the amount of spaces to move back
function moveBack(ar, sp) {
  for (w = 0; w < sp; w++) {
    for (q = 1; q < ar.length; q++) {
      ar[ar.length - q] = ar[ar.length - (q + 1)];
    }
  }
}

//makes the screen loop
function torusLoop(cx, cy, b, na, nb) {
  if (na[0] < b) {
    na[0] = cx - b;
  }
  if (na[0] > cx - b) {
    na[0] = b;
  }
  if (nb[0] < b) {
    nb[0] = cy - b;
  }
  if (nb[0] > cy - b) {
    nb[0] = b;
  }
}

//moves apple
function newApple() {
  for (l = 0; l < 5; l++) {
    if (
      Math.abs(Math.abs(ax) - Math.abs(sx[l])) < 3 &&
      Math.abs(Math.abs(ay) - Math.abs(sy[l])) < 3
    ) {
      // print ("asd");

      // making apple
      ax = Math.round(Math.random() * 20) * 20;
      ay = Math.round(Math.random() * 20) * 20;

      for (t = 0; t <= sx.length; t++) {
        //if apple spawns on snake
        if (sx[t] == ax && ay == sy[t]) {
          ax = Math.round(Math.random() * 20) * 20;
          ay = Math.round(Math.random() * 20) * 20;

          t = 0;
        }

        if (ax < b) {
          ax = b;
        }
        if (ax > cx - 2 * b) {
          ax = cx - 2 * b;
        }
        if (ay < b) {
          ay = b;
        }
        if (ay > cy - 2 * b) {
          ay = cy - 2 * b;
        }
      }

      v = 1;
      vx = sx[0];
      vy = sy[0];
    }
    ll = 4;
  }
}

// ends the game
function endGame() {
  stroke(0, 100, 0);
  strokeWeight(5);
  fill(200, 255, 200);

  rect(50, 125, 300, 150);
  strokeWeight(1);
  //noLoop();

  //  print(sx.length / 5 - 1);

  fill(0, 100, 0);
  textSize(30);
  text("Your Score", cx / 2 - 75, cy / 2 - 30);
  textSize(50);
  if (sx.length / 5 - 1 < 10) {
    text(ceil(sx.length / 5 - 1), cx / 2 - 10, cy / 2 + 30);
  } else {
    text(ceil(sx.length / 5 - 1), cx / 2 - 25, cy / 2 + 30);
  }

  game = 2;
}

//to replay the game if snake died
function reload() {
  if (game == 2) {
    sx.length = 0;
    sy.length = 0;
    for (q = 0; q < 5; q = q + 1) {
      sy[q] = 300 + q * 5;
      sx[q] = 200;
    }

    //reseting variables
    a = 0;
    ax = 200;
    ay = 200;

    //trigger for direction the snake goes from keyboard
    i = 1;
    ii = 0;

    //other variables
    v = 0;
    vx = 0;
    vy = 0;
    game = 1;
  }
}

function draw() {

    scale(myWidth/400);
    
  if (game == 0) {
    i = 0;
    titleScreen(ssx, ssy);
  }

  if (game == 1) {
 
background(240, 255, 240);
    checkerBackground(cx, cy, b, st);

    fill(0, 100, 0);
    rect(0, 0, cx, b);
    rect(0, cy - b, cx, b);
    rect(0, 0, b, cy);
    rect(cx - b, 0, b, cy);


    
    // if snake touches apple
    newApple();

    //if apple was eaten
    if (v != 0) {
      sx.push(vx);
      sy.push(vy);
      v = v + 1;

      if (v == 6) {
        v = 0;
      }
    }

    //print(i);
    stroke(100, 0, 0);
    fill(260, 0, 0);
    ellipse(ax + 10, ay + 10, 20, 20);

    //moving array elements
    moveBack(sx, 1);
    moveBack(sy, 1);

    
    //making snake
    g=250;
    s=0;
    makeSnake(sx, sy, g, s);

    var rd = 0;
    var yy = 0;

    //turnsnake();

    if (i == 1) {
      turnup();
    }
    if (i == 2) {
      turnleft();
    }
    if (i == 3) {
      turnright();
    }
    if (i == 4) {
      turndown();
    }

    //showing point
    fill(255);
    textSize(18);
    text(ceil(sx.length / 5 - 1), 5, 17);

    //identifying if the snake hit border
    if (sx[0] < b) {
      endGame();
    }
    if (sx[0] > cx - 2 * b) {
      endGame();
    }
    if (sy[0] < b) {
      endGame();
    }
    if (sy[0] > cy - b * 2) {
      endGame();
    }

    //identifying if snake hit itself
    for (r = 4; r < sx.length; r++) {
      if (
        Math.abs(Math.abs(sx[r]) - Math.abs(sx[0])) < 1 &&
        Math.abs(Math.abs(sy[r]) - Math.abs(sy[0])) < 1
      ) {
        //setTimeout(endGame(), 1000);
        endGame();
      }
    }
    
    //for pauzing
        if(pz==1)
      {
        //background
        background(200, 230, 200);
        checkerBackground(cx, cy, b, st+20);
        
        //border
        fill(0, 100, 0);
        rect(0, 0, cx, b);
        rect(0, cy - b, cx, b);
        rect(0, 0, b, cy);
        rect(cx - b, 0, b, cy);
        
        //apple
        fill(200, 100, 100);
        circle(ax+10, ay+10, 20)
         
        //snake
        makeSnake(sx, sy, 210, 100);
        
        //pause triangle
        fill(250, 0, 0);
        stroke(100, 0, 0);
        triangle(180, 170, 180, 230, 240, 200);
                     
        
        fill(255);
    textSize(18);
    text(ceil(sx.length / 5 - 1), 5, 17);
      }
    
  }
}