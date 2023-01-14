//--------------------------------------------------
// ANIMATION 1: SINGLE DOT
//--------------------------------------------------

// let theta = 0
// let r = 100
// let n = 1
//
// function setup() {
//     createCanvas(800, 800)
//     strokeWeight(10)
//     c = createVector(400, 400)
// }
//
// function draw() {
//     background(220)
//     theta = theta + PI / 100
//     x = c.x + r * cos(theta)
//     y = c.y + r * sin(theta)
//     point(x, y)
// }

//--------------------------------------------------
// ANIMATION 2: MULTIPLE DOTS
//--------------------------------------------------

// let theta = []
// let r = 100
// let c = []
// let n = 5

// function setup() {
//   createCanvas(800, 800)
//   strokeWeight(10)
//   for (let i = 0; i < n; i++) {
//     theta.push(random(0, 2 * PI))
//     c.push(createVector(400, 400))
//   }
// }

// function draw() {
//   background(220)
//   for (let i = 0; i < n; i++) {
//     theta[i] = theta[i] + PI / 200
//     x = c[i].x + r * cos(theta[i])
//     y = c[i].y + r * sin(theta[i])
//     // point(x, y)
//     square(x, y, 10)
//   }
// }

//--------------------------------------------------
// ANIMATION 3: VARIABLE RADIUS
//--------------------------------------------------

// let theta = []
// let r = []
// let c = []
// let n = 10

// function setup() {
//   createCanvas(800, 800)
//   for (let i = 0; i < n; i++) {
//     theta.push(random(0, 2 * PI))
//     r.push(random(30, 380))
//     c.push(createVector(400, 400))
//   }
// }

// function draw() {
//   background(220)
//   for (let i = 0; i < n; i++) {
//     theta[i] = theta[i] + PI / 200
//     x = c[i].x + r[i] * cos(theta[i])
//     y = c[i].y + r[i] * sin(theta[i])
//     noFill()
//     strokeWeight(2)
//     circle(c[i].x, c[i].y, 2*r[i])
//     strokeWeight(10)
//     square(x, y, 10)
//     // point(x, y)
//   }
// }

//--------------------------------------------------
// ANIMATION 4: RANDOM DIRECTION
//--------------------------------------------------

// let theta = []
// let dir = []
// let r = []
// let c = []
// let n = 10

// function setup() {
//   createCanvas(800, 800)
//   strokeWeight(10)
//   for (let i = 0; i < n; i++) {
//     theta.push(random(0, 2 * PI))
//     dir.push([-1, 1][round(random(1))])
//     r.push(random(30, 380))
//     c.push(createVector(400, 400))
//   }
// }

// function draw() {
//   background(220)
//   for (let i = 0; i < n; i++) {
//     theta[i] = theta[i] + PI / 100 * dir[i]
//     x = c[i].x + r[i] * cos(theta[i])
//     y = c[i].y + r[i] * sin(theta[i])
//     point(x, y)
//   }
// }

//--------------------------------------------------
// ANIMATION 5: TRAILING EFFECT
//--------------------------------------------------

// let theta = []
// let dir = []
// let r = []
// let c = []
// let n = 10
//
// function setup() {
//   createCanvas(800, 800)
//   strokeWeight(5)
//    stroke('orange')
//   background(0)
//   for (let i = 0; i < n; i++) {
//     theta.push(random(0, 2 * PI))
//     dir.push([-1, 1][round(random(1))])
//     r.push(random(30, 380))
//     c.push(createVector(400, 400))
//   }
// }
//
// function draw() {
//     fill(0, 0, 0, 20)
//     rect(0, 0, width, height)
//     for (let i = 0; i < n; i++) {
//       theta[i] = theta[i] + PI / 100 * dir[i]
//       x = c[i].x + r[i] * cos(theta[i])
//       y = c[i].y + r[i] * sin(theta[i])
//       point(x, y)
//     }
// }

//--------------------------------------------------
// ANIMATION 6: DARK MODE - THE MACHINE
//--------------------------------------------------

// let theta = []
// let dir = []
// let r = []
// let c = []
// let n = 100
//
// function setup() {
//   createCanvas(800, 800)
//   background(220)
//   strokeWeight(3)
//   stroke('orange')
//   for (let i = 0; i < n; i++) {
//     theta.push(random(0, 2 * PI))
//     dir.push([-1, 1][round(random(1))])
//     r.push(random(30, 380))
//     c.push(createVector(400, 400))
//   }
// }
//
// function draw() {
//     fill(0, 0, 0, 5)
//     rect(0, 0, width, height)
//     for (let i = 0; i < n; i++) {
//       theta[i] = theta[i] + PI / 100 * dir[i]
//       x = c[i].x + r[i] * cos(theta[i])
//       y = c[i].y + r[i] * sin(theta[i])
//       point(x, y)
//     }
// }

//--------------------------------------------------
// ANIMATION 7: SPIRAL DOTS - THE PORTAL
//--------------------------------------------------

let theta = []
let dir = []
let r = []
let rdir = []
let c = []
let n = 1000

function setup() {
  createCanvas(1800, 1800)
  background(0)
  strokeWeight(4)
  stroke(255, 100, 255)
  for (let i = 0; i < n; i++) {
    theta.push(random(0, 3 * PI))
    dir.push(1)
    r.push(random(30, 500))
    rdir.push(1)
    c.push(createVector(900, 475))
  }
}

function draw() {
  fill(0, 0, 0, 10)
  noStroke();
  rect(0, 0, width, height)
  for (let i = 0; i < n; i++) {
    stroke(255, 100, 255)
    theta[i] = theta[i] + PI / 100 * dir[i]
    rdir[i] = checkr(rdir[i], r[i])
    r[i] = r[i] + rdir[i]
    x = c[i].x + r[i] * cos(theta[i])
    y = c[i].y + r[i] * sin(theta[i])
    point(x, y)
  }
}

function checkr(rdir, r) {
  if (rdir==1 && r > 500) {
    rdir = -1
  }
  if (rdir==-1 && r < 0) {
    rdir = 1
  }
  return rdir
}