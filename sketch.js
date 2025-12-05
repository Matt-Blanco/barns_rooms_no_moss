function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background("white");
  // drawPointGrid(50, 50, 50);
  let grid = new Grid(50, 50, 60)
  grid.draw();
}

function keyPressed() {
  console.log(key);
  if (key.toLocaleUpperCase() === 'm') {
    
  }
}

class Grid {
  size;
  startX;
  startY;

  constructor(startX, startY, size) {
    this.startX = startX;
    this.startY = startY;
    this.size = size;

    let count = 0;
    const inc = this.size / 3;
    for (let rows = 0; rows < 3; rows++) {
      for (let col = 0; col < 3; col++) {
        let x = this.startX + ((rows + 1) * inc)
        let y = this.startY + ((col + 1) * inc)

        const p = new Point(x, y, `p${count}`)
        this.points.push(p);
        count++
      }
    }
  }

  points = [];

  draw() {
    noStroke();
    fill("black");

    this.points.forEach(p => p.draw())
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

