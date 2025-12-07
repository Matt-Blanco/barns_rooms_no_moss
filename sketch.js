const margin = 5;
const width = window.innerWidth;
const height = window.innerHeight;
const typeStartX = -(width / 2);
const typeStartY = -(height / 2);
const grids = [[]];
const gridSize = 86;
const angleInc = 90;

let currentLine = grids[grids.length - 1];
let cursor = false;
let zPoints = getZPoints();
let camera;

let canvasAngle = 0;
let axis = 0;
let yAngle = 0;
let xAngle = 0;


let cursorX = typeStartX + ((gridSize) + 5) * (1 + currentLine.length) + 10;
let cursorY = typeStartY + (grids.length * gridSize);


function setup() {
  createCanvas(width, height, WEBGL);

  camera = createCamera();

  // Set the angle mode in degrees
  angleMode(DEGREES);
}

function draw() {
  background("#fff");

  if (cursor) {
    // cursorX = typeStartX + ((gridSize) + 5) * (1 + currentLine.length) + 10;
    // cursorY = typeStartY + (grids.length * gridSize);
    stroke("black");
    strokeWeight(1);
    line(cursorX, cursorY, 0, cursorX, cursorY + gridSize, 0);
  }

  push();
  rotateX(xAngle);
  rotateY(yAngle);

  grids.forEach(grid => grid.forEach(line => line.draw()));
  pop();

  if (frameCount % 25 === 0) {
    cursor = !cursor;

    if (keyIsPressed && key === 'Backspace') {
      currentLine.pop();
      if (currentLine.length <= 0) {
        grids.pop();
      }

      if (grids.length <= 0) {
        grids.push([]);
      }

      currentLine = grids[grids.length - 1];
    }
  }

  orbitControl();
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
    currentLine.push(new Grid(x, y, axis, key.toLowerCase()))
  } else if (key === " ") {
    canvasAngle += angleInc;
    zPoints = getZPoints();
    axis = random(3);

    // Moddify the x and y point based on the type of rotation
    x = x * cos(canvasAngle) - y * sin(canvasAngle);
    y = x * sin(canvasAngle) + y * cos(canvasAngle);

    cursorX = x + 5;
    cursorY = y + 5;

    currentLine.push(new Grid(x, y, axis, ''))

    // yAngle += angleInc;

    if (axis < 1) {
      xAngle += angleInc;
    } else if (axis < 2) {
      yAngle += angleInc;
    }

  } else {
    currentLine.push(new Grid(x, y, axis, ''))
  }
}

function getZPoints() {
  return Array.apply(null, Array(Math.ceil(Math.random() * 8))).map((_, i) => `p${Math.floor(Math.random() * 9)}`)
}

class Grid {
  size;
  startX;
  startY;
  letter = "";
  points = [];
  axis;

  constructor(startX, startY, axis, letter, size = gridSize) {
    this.startX = startX;
    this.startY = startY;
    this.size = size;
    this.letter = letter
    this.axis = axis;

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
    push();
    if (axis > 0) {
      if (this.axis < 1) {
        rotateX(angleInc);
      }
      else if (this.axis < 2) {
        rotateY(angleInc);
      }
    }

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
    pop();
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

