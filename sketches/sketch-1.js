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
  textFont (font); 
  textSize(16);
  noStroke();
  fill(0);
}

function draw() {
  background(255);

  //global translate for all drawing operations.
  translate(-width / 2, -height / 2, 0);

  indicator({});

  for (let word of words) {
    word.display();
  }
}

//function to draw indicator when typing.
let indicator_x = 0;
let indicator_y = 0;

function indicator({ w = 1, h = t_size, op = 0 }) {
  if (words.length < 1) {
    indicator_x = margin;
    indicator_y = margin;
  } else {
    let last = words[words.length - 1];
    indicator_x = last.x + last.tw + t_size / 2;
    indicator_y = margin;
  }

  //make it blink.
  op = 128 + 127 * sin(frameCount * 0.05);

  fill(0, op);
  rect(indicator_x, indicator_y, w, h);
}

function keyPressed() {
  //every time a key is pressed, accumulate a string.

  if (key !== " ") {
    //accumulate it.
    str += key;

    //update indicator position: 
    indicator_x+=textWidth(str)+ 10;

    //also show it. 
    fill (190); 
    text (str, indicator_x, indicator_y)
  } else if (key === " ") {
    //you have to push a new object.
    let x, y;

    words.length < 1 ? words.push(new Word(str, margin, margin)) : words.push(new Word(str, words[words.length - 1].x + words[words.length - 1].tw + t_size / 2, margin));

    //reset accumulator string.
    str = "";
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
    translate (0,0,0); 
    text(this.str, this.x, this.y);
    pop();
  }
}
