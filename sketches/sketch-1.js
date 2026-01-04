/*
what: 
date: 
author: arjun

thought(s):
*/

let str = "";

let words = []; //array to store words that i type.

//constants; global-variables.
const t_size = 16;
const leading = t_size * 1.2; //120% of t_size.

const margin = 50;

let font;

//we always draw on a square canvas for now; so as to have a cube.
const c_size = 1000;

function preload() {
  font = loadFont("../assets/CrimsonText-Regular.ttf");
}

function setup() {
  createCanvas(c_size, c_size, WEBGL);

  //set defaults:
  textFont(font);
  textSize(16);
  noStroke();
  fill(0);
}

function draw() {
  background(255);

  //global translate for all drawing operations.
  translate(-width / 2, -height / 2, 0);

  for (let word of words) {
    word.display();
  }

  //also show it.  (moved from keyPressed; drawing must happen every frame)
  let baseX = words.length < 1 ? margin : words[words.length - 1].x + words[words.length - 1].tw + t_size / 2;

  let baseY = margin;

  fill(190);
  text(str, baseX, baseY);

  indicator({
    x: baseX + textWidth(str),
    y: baseY,
  });
}

//function to draw indicator when typing.
function indicator({ x = margin, y = margin, w = 1, h = t_size } = {}) {
  //make it blink.
  let op = 128 + 127 * sin(frameCount * 0.05);

  fill(0, op);
  rect(x, y-h*0.8, w, h);
}

function keyPressed() {
  //every time a key is pressed, accumulate a string.

  if (key === " ") {
    //you have to push a new object.
    if (str.length > 0) {
      let x = words.length < 1 ? margin : words[words.length - 1].x + words[words.length - 1].tw + t_size / 2;

      words.push(new Word(str, x, margin));

      //reset accumulator string.
      str = "";
    }
  } else if (key.length === 1) {
    //accumulate it.
    str += key;
  }
}

class Word {
  constructor(str, x, y) {
    this.str = str;
    this.x = x;
    this.y = y;

    this.tw = textWidth(this.str); // with this i can calculate the width of the text box to affect the other text box positions.
  }

  display() {
    fill(0);

    push();
    //translation necessary for z-dimension.
    translate(0, 0, 0);
    text(this.str, this.x, this.y);
    pop();
  }
}
