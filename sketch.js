/* mimi's ask: 
Discover something!
You can take something you did earlier this semester and expand it. You can scratch a new itch. You can make a Frankenstein project by combining earlier code. And yes you can present the coding portion of your PComp final so long as you can speak to how you applied computational thinking to shape the project.
What do you find interesting about what you did?
How did coding it make the final product different from using software?
Did coding it reveal something to you?
*/

/*
matt & i want to make spatially represented typography that evolves over time. computation is the only way to do it, simply because so many patterns exist. and, latin letters seem to be constructed with rules; but they're not usually thought of as that way. 
*/

/*
i looked at what matt did, and wondered how i could contribute in the limited time i had. so, i played with 3-d space.
*/

/*
a letterform is made with vertices in order. 
*/

let letterforms = [];

function setup() {
  createCanvas(1000, 1000, WEBGL);

  let feed_points = [
    {
      x: 100,
      y: 100,
    },
    {
      x: 200,
      y: 100,
    },
    {
      x: 300,
      y: 100,
    },
    {
      x: 300,
      y: 200,
    },
    {
      x: 200,
      y: 200,
    },
    {
      x: 100,
      y: 200,
    },
    {
      x: 100,
      y: 300,
    },
    {
      x: 200,
      y: 300,
    },
    {
      x: 300,
      y: 300,
    },
    {
      x: 300,
      y: 200,
    },
  ];

  console.log(feed_points);

  letterforms[0] = new Letterform(feed_points, 0);
}

function draw() {
  background(0);

  push();
  translate(-width / 2, -height / 2); //translate back to 0,0
  for (let letterform of letterforms) {
    letterform.display();
  }
  pop();
}

class Letterform {
  constructor(points, anchor) {
    this.points = points;

    this.x = [];
    this.y = [];

    for (let i = 0; i < this.points.length; i++) {
      this.x.push(this.points[i].x);
      this.y.push(this.points[i].y);
    }

    this.anchor = {
      x: this.points[anchor].x,
      y: this.points[anchor].y,
    };
  }

  display() {
    stroke (255); 
    strokeWeight (2);
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i < this.points.length; i++) {
      vertex(this.points[i].x, this.points[i].y); 
      strokeWeight (5);
      point(this.points[i].x, this.points[i].y); 
    }
    endShape();
  }
}
