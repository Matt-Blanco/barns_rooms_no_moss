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
  translate(-width / 2, -height / 2, 0); //translate back to 0,0
  for (let letterform of letterforms) {
    letterform.display();
    letterform.move();
  }
  pop();

  if (frameCount % 60 == 0) {
    //select a random point.
    let n = floor(random(letterforms[0].points.length)); 


  }
}

class Letterform {
  constructor(points, anchor) {
    this.points = points;

    this.origin_x = [];
    this.origin_y = [];
    this.origin_z = [];

    this.current_x = [];
    this.current_y = [];
    this.current_z = [];

    this.new_x = [];
    this.new_y = [];
    this.new_z = [];

    for (let i = 0; i < this.points.length; i++) {
      //set all to defaults received in construcion-points.
      this.origin_x.push(this.points[i].x);
      this.origin_y.push(this.points[i].y);
      this.origin_z.push(0);

      this.current_x.push(this.points[i].x);
      this.current_y.push(this.points[i].y);
      this.current_z.push(0);

      this.new_x.push(this.points[i].x);
      this.new_y.push(this.points[i].y);
      this.new_z.push(0);
    }

    this.anchor = {
      x: this.points[anchor].x,
      y: this.points[anchor].y,
    };
  }

  display() {
    stroke(255);
    strokeWeight(2);
    // beginShape(POINTS);
    for (let i = 0; i < this.points.length-1; i++) {
      strokeWeight(10);
      point(this.current_x[i], this.current_y[i], this.current_z[i]);

      strokeWeight (2);
      line(this.current_x[i], this.current_y[i], this.current_z[i], this.current_x[i + 1], this.current_y[i + 1], this.current_z[i + 1]);
    }
    // endShape();
  }

  move() {
    this.current_z = lerp(this.current_z, this.new_z, 0.5); 
  }
}
