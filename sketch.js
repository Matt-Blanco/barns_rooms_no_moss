const typeStartX = 15;
const typeStartY = 15;
const grids = [];
const gridSize = 90;


const letterRules = {
  m: [
    { start: "p4", end: "p5" },
    { start: "p4", end: "p7" },
    { start: "p5", end: "p6" },
    { start: "p5", end: "p8" },
    { start: "p6", end: "p9" }
  ]
}

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background("white");

  grids.forEach(grid => grid.draw());
}

function keyPressed(e) {
  e.preventDefault()
  if (key.toLowerCase() === 'm') {
    grids.push(new Grid(typeStartX + (gridSize + 5) * (1 + grids.length), typeStartY, key))
  } else if (key === "Backspace") {
    grids.pop();
  } else {
    grids.push(new Grid(typeStartX + (gridSize + 5) * (1 + grids.length), typeStartY, ''))
  }
}

class Grid {
  size;
  startX;
  startY;
  letter = "";
  points = [];

  constructor(startX, startY, letter, size = gridSize) {
    this.startX = startX;
    this.startY = startY;
    this.size = size;

    this.letter = letter

    let count = 1;
    const inc = this.size / 3;
    for (let rows = 0; rows < 3; rows++) {
      for (let col = 0; col < 3; col++) {
        let x = this.startX + ((col + 1) * inc)
        let y = this.startY + ((rows + 1) * inc)

        const p = new Point(x, y, `p${count}`)
        this.points.push(p);
        count++
      }
    }
  }


  draw() {
    noStroke();
    fill("black");

    this.points.forEach(p => p.draw())
    if (this.letter !== "") {
      const rules = letterRules[`${this.letter}`]
      for (let rule of rules) {
        const startPoint = this.points.find(p => p.label === rule.start)
        const endPoint = this.points.find(p => p.label === rule.end)

        strokeWeight(1);
        stroke("black");
        line(startPoint.x, startPoint.y, endPoint.x, endPoint.y)
      }
    }
  }
}

const radius = 2;
class Point {
  x;
  y;
  label;

  constructor(x, y, label) {
    this.x = x;
    this.y = y;
    this.label = label;
  }

  draw() {
    circle(this.x, this.y, radius)
  }
}

