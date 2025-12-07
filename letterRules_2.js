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