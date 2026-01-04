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

function setup() {
  createCanvas(1000, 1000, WEBGL);

  //set defaults:
  textSize(16);
  noStroke();
  fill(0);
}

function draw() {
  background(255);

  //global translate for all drawing operations.
  translate(-width / 2, -height / 2);

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
    indicator_x = last.x + t_size / 2;
    indicator_y = last.y + t_size / 2;
  }

  op = 128 + 127 * sin(frameCount * 0.05);

  fill(0, op);
  rect(indicator_x, indicator_y, w, h);
}
  

function keyPressed() {
  //every time a key is pressed, accumulate a string.
}

function accumulate_string() {}

class Word {
  constructor(str, x, y) {
    this.str = str;
    this.x = x;
    this.y = y;

    this.tw = textWidth(this.str); // with this i can calculate the width of the text box to affect the other text box positions.
  }

  display() {
    text(this.str, this.x, this.y);
  }
}
