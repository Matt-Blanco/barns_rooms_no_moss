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
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p6", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
    { start: "p7", end: "p4" },
    { start: "p6", end: "p5" },
  ],

  b: [
    { start: "p1", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p5" },
    { start: "p5", end: "p2" },
    { start: "p2", end: "p1" },
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
    { start: "p3", end: "p9" },
    { start: "p9", end: "p8" },
    { start: "p8", end: "p7" },
    { start: "p7", end: "p4" },
    { start: "p4", end: "p1" },
    { start: "p1", end: "p2" },
    { start: "p2", end: "p3" },
  ],

  e: [
    { start: "p7", end: "p1" },
    { start: "p1", end: "p3" },
    { start: "p3", end: "p9" },
    { start: "p9", end: "p7" },
    { start: "p4", end: "p6" },
  ],

  f: [
    { start: "p2", end: "p5" },
    { start: "p5", end: "p8" },
    { start: "p1", end: "p3" },
    { start: "p2", end: "p3" },
  ],

  g: [
    { start: "p3", end: "p2" },
    { start: "p2", end: "p1" },
    { start: "p1", end: "p4" },
    { start: "p4", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
    { start: "p9", end: "p6" },
    { start: "p6", end: "p5" },
  ],

  h: [
    { start: "p1", end: "p7" },
    { start: "p3", end: "p9" },
    { start: "p4", end: "p6" },
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
    { start: "p1", end: "p7" },
    { start: "p5", end: "p3" },
    { start: "p5", end: "p9" },
  ],

  l: [
    { start: "p1", end: "p7" },
    { start: "p7", end: "p9" },
  ],

  m: [
    { start: "p7", end: "p4" },
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p6", end: "p9" },
  ],

  n: [
    { start: "p7", end: "p4" },
    { start: "p4", end: "p6" },
    { start: "p6", end: "p9" },
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
    { start: "p7", end: "p1" },
    { start: "p1", end: "p2" },
    { start: "p2", end: "p5" },
    { start: "p5", end: "p4" },
    { start: "p4", end: "p7" },
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
    { start: "p4", end: "p5" },
    { start: "p5", end: "p6" },
    { start: "p5", end: "p8" },
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
    { start: "p2", end: "p8" },
  ],

  u: [
    { start: "p1", end: "p7" },
    { start: "p7", end: "p8" },
    { start: "p8", end: "p9" },
    { start: "p9", end: "p3" },
  ],

  v: [
    { start: "p1", end: "p5" },
    { start: "p5", end: "p3" },
  ],

  w: [
    { start: "p1", end: "p7" },
    { start: "p7", end: "p5" },
    { start: "p5", end: "p9" },
    { start: "p9", end: "p3" },
  ],

  x: [
    { start: "p1", end: "p9" },
    { start: "p3", end: "p7" },
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
