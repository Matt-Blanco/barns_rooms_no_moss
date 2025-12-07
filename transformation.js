let objs = [];

function setup() {
  createCanvas(400, 400, WEBGL);

  angleMode (DEGREES); 
}

function draw() {
  background(0);
  for (let ob of objs) {
    ob.display();
  }
}

function keyPressed() {
  let x = mouseX;
  let y = mouseY;
  let z = 0;

  objs.push(new Obj(x, y, z));
}

class Obj {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.r = random(0,90); 

    this.axis = random (3); 
    this.ang = 45;


  }

  display() {
    fill(255);

    push();
    if (this.axis < 1){
        rotateX (this.ang); 
    }
    else if (this.axis < 2){
        rotateY (this.ang); 
    }else{
        rotateZ (this.ang); 
    }
    rect(this.x, this.y, 50, 50);

    pop();
  }
}
