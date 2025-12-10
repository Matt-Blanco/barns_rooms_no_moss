const margin = 5;
const width = window.innerWidth;
const height = window.innerHeight;
const typeStartX = -(width / 2);
const typeStartY = -(height / 2);
const lines = [[]];
const gridSize = 86;
const angleInc = 90;

let currentLine = lines[lines.length - 1];
let cursor = false;
let zPoints = getZPoints();

let canvasAngle = 0;
let axis = 0;
let yAngle = 0;
let xAngle = 0;

let cursorX = typeStartX + ((gridSize) + 5) * (1 + currentLine.length) + 10;
let cursorY = typeStartY + gridSize;

let cam;

function setup() {
  createCanvas(width, height, WEBGL);

  angleMode(DEGREES);

  cam = createCamera();
  cam.setPosition(0, 0, 800);
}

function draw() {
  background("#fff");

  push();

  // Part 03: Enable canvas rotation
  // if (axis > 0) {
  //   if (axis < 1) {
  //     rotateX(-angleInc);
  //   } else if (axis < 2) {
  //     rotateX(-angleInc);
  //   }
  // }

  lines.forEach((line, lineIndx) => line.forEach((letter, letterIndx) => letter.draw(lineIndx === lines.length - 1 && letterIndx === line.length - 1)));
  pop();

  if (frameCount % 25 === 0) {
    cursor = !cursor;

    if (keyIsPressed && key === "Backspace") {
      deleteLastLetter();
    }
  }

  if (currentLine.length <= 0 && cursor) {
    line(cursorX, cursorY, cursorX, cursorY + gridSize);
  }

  orbitControl();
}

function deleteLastLetter() {
  currentLine.pop();
  if (currentLine.length <= 0) {
    lines.pop();
  }
  if (lines.length <= 0) {
    lines.push([]);
  }
  currentLine = lines[lines.length - 1];
}

function keyPressed(e) {
  e.preventDefault();

  currentLine = lines[lines.length - 1];

  if (key === "Backspace") {
    deleteLastLetter();
    return;
  }

  let x = typeStartX + (gridSize + 5) * (1 + currentLine.length);
  let y = typeStartY + lines.length * gridSize;
  if (x >= width / 2 - gridSize * 2) {
    lines.push([]);
    currentLine = lines[lines.length - 1];
    x = typeStartX + (gridSize + 5) * (1 + currentLine.length);
    y += gridSize;
  }

  if (letterRules[key.toLowerCase()] !== undefined) {
    currentLine.push(new Grid(x, y, axis, key.toLowerCase()))
  } else if (key === " ") {
    currentLine.push(new Grid(x, y, axis, ''))

    canvasAngle += angleInc;
    zPoints = getZPoints();

    // Part 02: Enable the rotation axis to change
    // axis = random(3);
    axis = 0;

    x = x * cos(canvasAngle) - y * sin(canvasAngle);
    y = x * sin(canvasAngle) + y * cos(canvasAngle);

    cursorX = x;
    cursorY = y;

    if (axis < 1) {
      yAngle += angleInc;
    } else if (axis < 2) {
      xAngle += angleInc;
    }

  } else {
    currentLine.push(new Grid(x, y, axis, ''))
  }
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

        if (zPoints.some((p) => p === pointLabel)) {
          z = gridSize;
        }

        const p = new Point(x, y, z, pointLabel);
        this.points.push(p);
        count++;
      }
    }
  }

  draw(isLast) {
    // Part 0: Drawing the grid of each letter
    this.points.forEach((p) => p.draw());

    // Part 02: Enable word rotation
    // push();
    // if (this.axis > 0) {
    //   if (this.axis < 1) {
    //     rotateY(angleInc);
    //   }
    //   else if (this.axis < 2) {
    //     rotateX(angleInc);
    //   }
    // }

    // // Part 01: Drawing the stroke of each letter
    // if (this.letter !== "") {
    //   const rules = letterRules[`${this.letter}`];
    //   for (let rule of rules) {
    //     const startPoint = this.points.find((p) => p.label === rule.start);
    //     const endPoint = this.points.find((p) => p.label === rule.end);

    //     strokeWeight(2);
    //     stroke("black");
    //     // Part 01B: Letters in space... in space
    //     // line(startPoint.x, startPoint.y, startPoint.z, endPoint.x, endPoint.y, endPoint.z)
    //     line(startPoint.x, startPoint.y, endPoint.x, endPoint.y); // no z axis for debugging.
    //   }
    // }

    if (isLast && cursor) {
      line(this.startX + gridSize + 10, this.startY, this.startX + gridSize + 10, this.startY + gridSize);
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

  draw() {
    fill("gray");
    circle(this.x, this.y, radius)
  }
}

function getZPoints() {
  return Array.apply(null, Array(Math.ceil(Math.random() * 8))).map((_, i) => `p${Math.floor(Math.random() * 9)}`)
}
