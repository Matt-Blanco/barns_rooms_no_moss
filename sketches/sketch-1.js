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

//variables to store current x & y positions.
let base_x = margin;
let base_y = margin;

function preload() {
  font = loadFont("../assets/CrimsonText-Regular.ttf");
}

function setup() {
  createCanvas(c_size, c_size, WEBGL);

  base_x = width/2; 
  base_y = height/2;

  //set defaults:
  textFont(font);
  textSize(16);
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  //orbit control: 
    orbitControl();

  //global translate for all drawing operations.
  translate(-width / 2, -height / 2, 0);

  for (let word of words) {
    word.display();
  }

  //also, when being typed, show what is being typed.
  base_x = words.length < 1 ? width/2 : words[words.length - 1].x + words[words.length - 1].tw + t_size / 2;

  fill(190);
  text(str, base_x, base_y);

  indicator({
    x: base_x + textWidth(str),
    y: base_y,
  });

}

//function to draw indicator when typing.
function indicator({ x = margin, y = margin, w = 1, h = t_size } = {}) {
  //make it blink.
  let op = 128 + 127 * sin(frameCount * 0.05);

  fill(0, op);
  rect(x, y - h * 0.8, w, h);
}

function keyPressed() {
  //every time a key is pressed, accumulate a string.

  if (keyCode === ENTER) {
    //move to next line
    base_y += leading;
    base_x = margin;
    return;
  }

  if (key === " ") {
    //you have to push a new object.
    if (str.length > 0) {
      words.push(new Word(str, base_x, base_y));

      //advance x position after committing word
      base_x += textWidth(str) + t_size / 2;

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
