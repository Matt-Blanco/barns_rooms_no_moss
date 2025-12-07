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
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
    { start: "p7", end: "p4" },
  ],

  d: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
    { start: "p7", end: "p4" },
    { start: "p4", end: "p1" },
  ],

  e: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },
    { start: "p8", end: "p7" },
    { start: "p7", end: "p4" },
    { start: "p4", end: "p1" },
    { start: "p5", end: "p6" },
    { start: "p6", end: "p3" },
  ],

  f: [
    { start: "p2", end: "p1" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p2", end: "p3" },
  ],

  g: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
    { start: "p7", end: "p4" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p8" },
  ],

  h: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p6", end: "p9" },
  ],

  i: [
    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },
  ],

  j: [
    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p5" },
  ],

  k: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p3" },
    { start: "p5", end: "p9" },
  ],

  l: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
  ],

  m: [
    { start: "p7", end: "p4" },
    { start: "p4", end: "p1" },
    { start: "p1", end: "p2" },
    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },
  ],

  n: [
    { start: "p7", end: "p4" },
    { start: "p4", end: "p1" },
    { start: "p1", end: "p2" },
    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },
  ],

  o: [
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
    { start: "p3", end: "p6" },
    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
    { start: "p7", end: "p4" },
    { start: "p4", end: "p1" },
  ],

  p: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p1", end: "p2" },
    { start: "p2", end: "p5" },
    { start: "p5", end: "p4" },
  ],

  q: [
    { start: "p3", end: "p2" },
    { start: "p2", end: "p1" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
    { start: "p9", end: "p6" },
    { start: "p6", end: "p3" },
  ],

  r: [
    { start: "p7", end: "p4" },
    { start: "p4", end: "p1" },
    { start: "p1", end: "p2" },
    { start: "p2", end: "p5" },
  ],

  s: [
    { start: "p3", end: "p2" },
    { start: "p2", end: "p1" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p8" },
    { start: "p8", end: "p9" },
  ],

  t: [
    { start: "p1", end: "p3" },
    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },
  ],

  u: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
    { start: "p9", end: "p6" },
  ],

  v: [
    { start: "p1", end: "p5" },
    { start: "p5", end: "p9" },
    { start: "p9", end: "p3" },
  ],

  w: [
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p5" },
    { start: "p5", end: "p9" },
    { start: "p9", end: "p3" },
  ],

  x: [
    { start: "p1", end: "p5" },
    { start: "p5", end: "p9" },
    { start: "p5", end: "p3" },
    { start: "p5", end: "p7" },
  ],

  y: [
    { start: "p1", end: "p5" },
    { start: "p5", end: "p3" },
    { start: "p5", end: "p8" },
  ],

  z: [
    { start: "p1", end: "p3" },
    { start: "p3", end: "p7" },
    { start: "p7", end: "p9" },
  ],
};
