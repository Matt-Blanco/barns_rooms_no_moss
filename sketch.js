const margin = 5;
const width = window.innerWidth;
const height = window.innerHeight;
const typeStartX = -(width / 2);
const typeStartY = -(height / 2);
const grids = [[]];
let currentLine = grids[grids.length - 1];
const gridSize = 86;
let cursor = false;
let zPoints = ["p1", "p5", "p6"]


const letterRules = {
  m: [
    { start: "p1", end: "p2" },
    { start: "p1", end: "p4" },
    { start: "p2", end: "p3" },
    { start: "p2", end: "p5" },
    { start: "p3", end: "p6" },
    { start: "p4", end: "p7" },
    { start: "p5", end: "p8" },
    { start: "p6", end: "p9" },
  ],
  o: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p4", end: "p1" },
    { start: "p4", end: "p7" },
    { start: "p6", end: "p3" },
    { start: "p6", end: "p9" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" }
  ],
  a: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p3", end: "p6" },
    { start: "p4", end: "p5" },
    { start: "p4", end: "p7" },
    { start: "p5", end: "p6" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
    { start: "p9", end: "p6" },
  ],
  b: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p3", end: "p6" },
    { start: "p1", end: "p4" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p4", end: "p7" },
    { start: "p2", end: "p3" },
    { start: "p6", end: "p9" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
  ],
  r: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
  ],
  n: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p1", end: "p4" },
    { start: "p3", end: "p6" },
    { start: "p4", end: "p7" },
    { start: "p6", end: "p9" },
  ],
  s: [
    { start: "p1", end: "p2" },
    { start: "p1", end: "p4" },
    { start: "p2", end: "p3" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p6", end: "p9" },
    { start: "p8", end: "p9" },
    { start: "p8", end: "p7" },
  ],
  t: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },
    { start: "p8", end: "p9" },
  ],
  p: [
    { start: "p1", end: "p2" },
    { start: "p1", end: "p4" },
    { start: "p3", end: "p6" },
    { start: "p2", end: "p3" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p4", end: "p7" },
  ],
  e: [
    { start: "p1", end: "p2" },
    { start: "p1", end: "p4" },
    { start: "p2", end: "p3" },
    { start: "p3", end: "p6" },
    { start: "p4", end: "p7" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
  ],
  d: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p6" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p6" },
  ],
  u: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
  ],
  j: [
    { start: "p2", end: "p3" },
    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p7", end: "p8" },
    { start: "p4", end: "p7" },
  ]
}

function setup() {
  createCanvas(width, height, WEBGL);
}

function draw() {
  background("#fff");

  grids.forEach(grid => grid.forEach(line => line.draw()));

  if (frameCount % 25 === 0) {
    cursor = !cursor;
  }

  if (cursor) {
    let cursorX = typeStartX + ((gridSize) + 5) * (1 + currentLine.length) + 10;
    let cursorY = typeStartY + (grids.length * gridSize);
    stroke("black");
    strokeWeight(1);
    line(cursorX, cursorY, 0, cursorX, cursorY + gridSize, 0);
  }
}

function keyPressed(e) {
  e.preventDefault()

  currentLine = grids[grids.length - 1]

  if (key === "Backspace") {
    currentLine.pop();
    if (currentLine.length <= 0) {
      grids.pop();
    }

    if (grids.length <= 0) {
      grids.push([]);
    }

    currentLine = grids[grids.length - 1];
    return;
  }

  let x = typeStartX + (gridSize + 5) * (1 + currentLine.length);
  let y = typeStartY + (grids.length * gridSize);
  if (x >= ((width / 2) - (gridSize * 2))) {
    grids.push([]);
    currentLine = grids[grids.length - 1];
    x = typeStartX + (gridSize + 5) * (1 + currentLine.length);
    y += gridSize
  }

  if (letterRules[key.toLowerCase()] !== undefined) {
    currentLine.push(new Grid(x, y, key.toLowerCase()))
  } else if (key === " ") {
    const newZPoints = Array.apply(null, Array(Math.ceil(random(8)))).map((_, i) => `p${i + 1}`)
    zPoints = newZPoints
    currentLine.push(new Grid(x, y, ''))
  } else {
    currentLine.push(new Grid(x, y, ''))
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
        let pointLabel = `p${count}`;
        let x = this.startX + ((col + 1) * inc)
        let y = this.startY + ((rows + 1) * inc)

        let z = 0;

        if (zPoints.some(p => p === pointLabel)) {
          z = (gridSize);
        }

        const p = new Point(x, y, z, pointLabel)
        this.points.push(p);
        count++
      }
    }
  }

  draw() {
    noStroke();
    fill("black");

    if (this.letter !== "") {
      const rules = letterRules[`${this.letter}`]
      for (let rule of rules) {
        const startPoint = this.points.find(p => p.label === rule.start)
        const endPoint = this.points.find(p => p.label === rule.end)

        strokeWeight(1);
        stroke("black");
        line(startPoint.x, startPoint.y, startPoint.z, endPoint.x, endPoint.y, endPoint.z)
      }
    }
  }
}

const radius = 2;
class Point {
  x;
  y;
  z;
  label;

  constructor(x, y, z, label) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.label = label;
  }
}

