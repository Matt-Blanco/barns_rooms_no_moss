//we define letterforms in a 3*3 grid, where we go l -> r & t -> d.

// i defined the first letter, and then got chat-gpt to do the rest. i, then, modified each letter stylistically.

// const letterRules = {
//   a: [
//     { start: "p1", end: "p2" },
//     { start: "p2", end: "p3" },
//     { start: "p3", end: "p6" },
//     { start: "p6", end: "p5" },
//     { start: "p5", end: "p4" },
//     { start: "p4", end: "p7" },
//     { start: "p7", end: "p8" },
//     { start: "p8", end: "p9" },
//     { start: "p9", end: "p6" },
//   ],
// };

const letterRules = {
  a: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p3", end: "p6" },
    { start: "p6", end: "p5" },
    { start: "p5", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
    { start: "p9", end: "p6" },
  ],

  b: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p4", end: "p7" },

    { start: "p6", end: "p5" },
    { start: "p5", end: "p4" },

    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
  ],

  c: [
    { start: "p3", end: "p2" },
    { start: "p2", end: "p1" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
  ],

  d: [
    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
    { start: "p6", end: "p5" },
    { start: "p5", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
  ],

  e: [
    { start: "p3", end: "p2" },
    { start: "p2", end: "p1" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p6", end: "p3" },

    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
  ],

  f: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },

    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
  ],

  g: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },

    { start: "p3", end: "p6" },
    { start: "p6", end: "p5" },
    { start: "p5", end: "p4" },
    { start: "p4", end: "p1" },

    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
  ],

  h: [
    // left vertical stem
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    // mid bridge
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },

    // right downward stroke
    { start: "p6", end: "p9" },
  ],

  i: [
    { start: "p1", end: "p2" },

    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },

    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
  ],

  j: [
    // top stroke
    { start: "p2", end: "p3" },

    // stem down
    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },

    // hook curve via left-most bottom
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
  ],

  k: [
    // vertical spine
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    // upper diagonal arm (approximated through grid)
    { start: "p4", end: "p5" },
    { start: "p5", end: "p3" },

    // lower diagonal arm
    { start: "p4", end: "p5" },
    { start: "p5", end: "p9" },
  ],

  l: [
    // vertical
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    // foot
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
  ],

  m: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },

    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },

    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
  ],

  n: [
    { start: "p1", end: "p5" },
    { start: "p5", end: "p9" },

    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    { start: "p9", end: "p6" },
    { start: "p6", end: "p3" },
  ],

  o: [
    // top
    { start: "p2", end: "p1" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    // bottom
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },

    // right side
    { start: "p9", end: "p6" },
    { start: "p6", end: "p3" },
    { start: "p3", end: "p2" },
  ],

  p: [
    // vertical spine
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    // bowl top
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p6", end: "p3" },
    { start: "p3", end: "p2" },
    { start: "p2", end: "p1" },
  ],

  q: [
    // o-like loop
    { start: "p2", end: "p1" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },

    { start: "p9", end: "p6" },
    { start: "p6", end: "p3" },
    { start: "p3", end: "p2" },

    // tail
    { start: "p9", end: "p8" },
    { start: "p8", end: "p5" },
  ],

  r: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
  ],

  s: [
    // top curve
    { start: "p3", end: "p2" },
    { start: "p2", end: "p1" },

    // bend
    { start: "p1", end: "p4" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },

    // bottom curve
    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
  ],

  t: [
    // top bar
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },

    // center stem
    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },
  ],

  u: [
    // left side
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    // bottom curve
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },

    // right side
    { start: "p9", end: "p6" },
    { start: "p6", end: "p3" },
  ],

  v: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p8" },
    { start: "p8", end: "p6" },
    { start: "p6", end: "p3" },
  ],

  w: [
    // left down
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },

    // rise to middle
    { start: "p7", end: "p8" },
    { start: "p8", end: "p5" },
    { start: "p8", end: "p9" },

    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
  ],

  x: [
    // diagonal 1 (grid approximation)
    { start: "p1", end: "p5" },
    { start: "p5", end: "p9" },

    // diagonal 2
    { start: "p3", end: "p5" },
    { start: "p5", end: "p7" },
  ],

  y: [
    { start: "p3", end: "p6" },
    { start: "p6", end: "p5" },
    { start: "p5", end: "p4" },
    { start: "p4", end: "p1" },

    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
  ],

  z: [
    // top bar
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },

    // diagonal (grid approximated)
    { start: "p3", end: "p5" },
    { start: "p5", end: "p7" },

    // bottom bar
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
  ],
};

/*
scaffold: 

e: [
  { start: "p3", end: "p2" },
],

*/
