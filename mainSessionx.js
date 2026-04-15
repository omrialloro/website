const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const f = async () => {
  dict = await fetch("http://localhost:3000", { method: "GET" }).then((res) =>
    res.json(),
  );
};
f();

function Circle(x, y, radius) {
  time_in = 40;
  time_out = 20;
  total_time = time_in + time_out;
  delta = radius / time_in;
  this.counter = 0;
  this.x = x;
  this.y = y;
  this.r = radius;
  this.radius = radius;

  this.color = "black";

  this.draw = function () {
    if (this.counter > total_time) {
      return;
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();

    // ctx.font = "32px oswald";
    // ctx.font = `${32 - this.counter * 0.7}px oswald`;

    ctx.fillStyle = "white";
    ctx.fillStyle = `rgba( ${255 - 20 * this.counter}, ${255}, ${
      255 - 20 * this.counter
    },1)`;
    // ctx.textAlign = "center";
    // ctx.fillText(Math.round(this.radius), x, y + 8);

    // ctx.font = "30px oswald";
    // ctx.font = `${30 - this.counter * 0.7}px oswald`;

    ctx.fillStyle = "white";
    // ctx.fillStyle = `rgba( ${255 - 20 * this.counter}, ${255}, ${
    //   255 - 20 * this.counter
    // },1)`;
    // ctx.textAlign = "center";
    // ctx.fillText(Math.round(this.radius), x, y + 8);

    ctx.closePath();
  };

  this.update = function (r) {
    if (r > 0) {
      this.counter = 0;
      this.r = r;
      this.radius = r;
    }
    this.color = `rgba(${240},${100 - 10 * this.counter},${30 - this.counter},${
      1 - this.counter / total_time
    })`;

    this.counter += 1;
    if (this.r > delta) {
      this.r -= 2.5 * delta;
      this.r = Math.max(this.r, 0);
    }
  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function MoveElement(p1, p2, steps, rgb, dim) {
  var height = 40;
  var width = 20;
  if (dim != -1) {
    height = dim[0];
    width = dim[1];
  }

  this.p1 = p1;
  this.p2 = p2;

  this.position = p1;
  this.rgb = rgb;
  this.counter = 0;

  this.delta0 = (this.p2[0] - this.p1[0]) / steps;
  this.delta1 = (this.p2[1] - this.p1[1]) / steps;

  this.draw = function () {
    if (this.counter >= steps - 1) {
      return;
    }

    ctx.filter = "blur(2px)";
    ctx.fillStyle = `rgba(${this.rgb[0] + getRandomInt(130) - 15}, ${
      this.rgb[1] + getRandomInt(130) - 15
    }, ${this.rgb[2] + getRandomInt(30) - 15},0.8)`;

    ctx.fillRect(this.position[0], this.position[1], width, height);
  };
  this.update = function () {
    if (this.counter < steps) {
      this.counter += 1;
    }

    this.position[0] += this.delta0;

    this.position[1] += this.delta1;
  };
}

ctx.strokeStyle = `rgba(240, 50, 37,1.0)`;
ctx.lineWidth = 5;

index = 0;

const points = [
  [800, 0],
  [100, 0],
  [100, 300],
  [300, 300],
];
function horizontal(p2) {}
function vertical(p, diff, counter, rgb) {
  const l = 40;
  l0 = 20;
  if (counter >= l) {
    counter = l;
  }
  const height = 140;
  ctx.fillStyle = `rgba(${r[0]}, ${r[1]}, ${r[2]},0.5)`;
  ctx.fillRect(
    p[0],
    p[1] + (height / 2) * ((l - counter) / l) - (7 * counter) / l,
    diff,
    (height + 14) * (counter / l),
  );
  ctx.fillStyle = `rgba(${Math.random() * 500}, 250, ${
    +Math.random() * 500
  },0.9)`;

  ctx.fillRect(
    p[0] + ((diff / 2) * (l - counter)) / l,
    p[1] + height / 2,
    (diff * counter) / l,
    3,
  );
}

function labelRect(position, size) {
  ctx.fillStyle = `rgba(252, 108, 102 ,0.5)`;
  ctx.fillRect(
    109 * Math.sin(counter + Math.random([10, 22, 2]) * 0.001) + position[0],
    position[1],
    109 * Math.sin(counter * 0.01) + size[0],
    size[1],
  );
}

function fancyStrip(points, counter) {
  const height = 40;
  const width = 20;
  ctx.filter = "blur(2px)";

  ctx.fillStyle = `rgba(20, 130, 10,0.5)`;
  let p = points[0];
  let diff = points[1][0] - p[0];
  let rgb = [40, 130, 20];

  vertical(p, diff, counter, rgb);

  // for (let i = 0; i < points.length - 1; i++) {}
}
function fancyStrip1(points, rgb) {
  const height = 40;
  const width = 20;
  ctx.filter = "blur(2px)";

  ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]},0.5)`;
  let p = points[0];
  let diff = points[1][0] - p[0];

  vertical(p, diff, counter, rgb);

  // for (let i = 0; i < points.length - 1; i++) {}
}

function counters(i) {
  let n = 100;
  ctx.font = "23px oswald";
  ctx.filter = "blur(2px)";

  ctx.fillStyle = `rgba(250, 70, 40,0.8)`;
  ctx.fillStyle = `rgba(250, ${70 + Math.random() * 80}, 40,0.8)`;

  if (i > 100) {
    ctx.fillRect(915, 130, 70, 4);

    ctx.filter = "blur(1px)";
    ctx.fillStyle = `rgba(252, 132, 132 ,0.8)`;

    let ms = Math.floor(((i - n) * 10) / 6) % 100;
    let sc = Math.floor((i - n) / 60) % 60;

    ctx.fillText(ms + "  ms", 890 + 60, 120);
    ctx.fillText(sc + "  sec", 890 + 60, 160);
  }
}
function wires(counter) {
  ctx.fillStyle = `rgba(250, 70, 40,0.8)`;
  ctx.fillStyle = `rgba(250, ${70 + Math.random() * 80}, 40,0.8)`;
  ctx.filter = "blur(2px)";

  const l1 = 0.5;
  const l2 = 0.5;
  const l3 = 0.5;

  const len1 = l1 * 60;
  const len2 = l2 * 60;
  const len3 = l3 * 60;

  let alpha = counter / len1;
  let beta = 0;

  if (alpha > 1) {
    alpha = 1;
    beta = (counter - len1) / len2;
  }
  if (beta > 1) {
    beta = 1;
  }

  ctx.fillRect(100, 215, 300 * alpha, 4);
  ctx.fillRect(400, 215, 4, 280 * beta);

  ctx.fillRect(100, 200, 400 * alpha, 4);
  ctx.fillRect(500, 200, 4, 300 * beta);

  ctx.fillRect(100, 185, 500 * alpha, 4);
  ctx.fillRect(600, 185, 4, 320 * beta);

  ctx.fillRect(100, 170, 600 * alpha, 4);
  ctx.fillRect(700, 170, 4, 340 * beta);

  ctx.fillRect(100, 155, 700 * alpha, 4);
  ctx.fillRect(800, 155, 4, 360 * beta);
}
function DrawPath(rgb, p, type) {
  // const steps = 120;
  const steps = [120, 20, 10, 10, 10];

  const p1 = [800, 0];
  const p2 = [100, 0];
  const p3 = [100, 155];

  var p4 = [800, 155];
  var p5 = [800, 600];

  if (type == 4) {
    p4 = [800, 155];
    p5 = [800, 600];
  } else if (type == 3) {
    p4 = [700, 170];
    p5 = [700, 580];
  } else if (type == 2) {
    p4 = [600, 185];
    p5 = [600, 560];
  } else if (type == 1) {
    p4 = [500, 200];
    p5 = [500, 540];
  } else if (type == 0) {
    p4 = [400, 215];
    p5 = [400, 520];
  } else {
  }

  // const p4 = [200, 300];

  // this.points = [p1, p2, p3, p4, p5];
  this.points = [points[0], points[1], p3, p4, p5];

  this.rgb = rgb;
  this.counter = 0;
  this.index = 0;
  this.element = new MoveElement(
    this.points[0],
    this.points[1],
    // steps,
    steps[this.index],

    this.rgb,
    -1,
  );

  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.drawAndUpdate = function () {
    // circle.draw();
    if (this.counter >= steps[this.index] - 1) {
      this.counter = 0;
      this.index += 1;
      if (this.index < this.points.length - 3) {
        this.element = new MoveElement(
          this.points[this.index],
          this.points[this.index + 1],
          steps[this.index + 1],
          this.rgb,
          -1,
        );
        // circle.update(30);
      } else if (this.index < this.points.length - 1) {
        this.element = new MoveElement(
          this.points[this.index],
          this.points[this.index + 1],
          steps[this.index + 1],
          this.rgb,
          [20, 20],
        );
        return;
      }
    }
    this.counter += 1;
    this.element.draw();
    this.element.update();
  };
  // requestAnimationFrame(drawPath);
}

A = [];

function cumsum(arr) {
  let sum = 0;
  let cumulativeSum = [];
  arr.forEach((e) => {
    sum = sum + Number(e);

    cumulativeSum.push(sum);
  });
  return cumulativeSum;
}

dests = [
  [600, 500],
  [300, 500],
  [100, 500],
];

n = 40;

let times_array = [];
let times = [];

function sampleLabel() {
  labelWeights = [0.18, 0.59, 0.093, 0.128, 0.005];
  c = cumsum(labelWeights);
  r = Math.random();
  if (r < c[0]) {
    return 0;
  } else if (r < c[1]) {
    return 1;
  } else if (r < c[2]) {
    return 2;
  } else if (r < c[3]) {
    return 3;
  } else {
    return 4;
  }

  // let weights = {
  //   africa: 0.18,
  //   asia: 0.59,
  //   europe: 0.093,
  //   america: 0.128,
  //   oceania: 0.005,
  // };
}

setTimeout(() => {
  times_array = dict["worldPopulation.json"]["teeth"];
  times = cumsum(times_array);

  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      A.push(new DrawPath([250, 40, 10], dests[i % 3], labels_array[i]));
    }, times[i] * 1000);
  }
}, 100); // Start the fading animation

// for (let i = 0; i < n; i++) {
//   x = Math.random();
//   x = Number(x.toFixed(2)) + Number(0.3);

//   times_array.push(x);
// }

let labels_array = [];

for (let i = 0; i < n; i++) {
  x = sampleLabel();
  // x = Math.round(Math.random() * 4);
  labels_array.push(x);
}

// setTimeout(() => {
//   A.push(new DrawPath([240, 40, 10], dests[0], Math.round(Math.random() * 4)));
// }, 300);

let circle = new Circle(230, 380, 50);
let offset = -60 * 2.5;
let counter = 0;

index = 0;

function Labels() {
  this.counter = 0;
  this.globalCounter = 0;
  this.len = 15;
  this.label = -1;
  this.sum_array = [];
  for (let i = 0; i < 5; i++) {
    this.sum_array.push(0);
  }

  this.update = function (label) {
    this.globalCounter += 1;
    if (this.counter >= this.len) {
      this.counter = 0;
      this.label = -1;
    }
    if (this.counter > 0) {
      this.counter += 1;
    }

    if (label != -1) {
      this.counter = 1;
      this.label = label;
    }

    ctx.textAlign = "center";

    ctx.fillStyle = `rgba(210, 164, 0,1)`;
    ctx.font = "13px Ariel";
    ctx.filter = "blur(0.8px)";
    if (this.globalCounter > 1000) {
    }

    if (this.globalCounter > 80) {
      labelRect([410, 450], [80, 80]);
      ctx.fillText(
        Math.random(["2323", "eewee", "cff", "rerereaaa"]),
        450,
        520,
      );
    }
    if (this.globalCounter > 95) {
      labelRect([510, 450], [80, 80]);
      ctx.fillText(
        Math.random(["2323", "eewee", "cff", "rerereaaa"]),
        550,
        520,
      );
    }
    if (this.globalCounter > 110) {
      labelRect([610, 450 + 100 * Math.sin(counter * 0.1)], [80, 80]);
      ctx.fillText(
        Math.random(["2323", "eewee", "cff", "rerereaaa"]),
        650,
        520,
      );
    }
    if (this.globalCounter > 125) {
      labelRect([710, 450], [80, 80]);
      ctx.fillText(
        Math.random(["2323", "eewee", "cff", "rerereaaa"]),
        750,
        520,
      );
    }
    if (this.globalCounter > 140) {
      labelRect([810, 450], [80, 80]);
      ctx.fillText(
        Math.random(["2323", "eewee", "cff", "rerereaaa"]),
        850,
        520,
      );
    }

    ctx.font = `${
      13 + Math.random() * 6 + this.len - this.counter / 2
    }px Ariel`;
    ctx.fillStyle = `rgba(250, ${84 + this.counter * 3}, ${
      30 + this.counter
    },1)`;

    if (label == 0) {
      this.sum_array[0] += 1;
    } else if (label == 1) {
      this.sum_array[1] += 1;
    } else if (label == 2) {
      this.sum_array[2] += 1;
    } else if (label == 3) {
      this.sum_array[3] += 1;
    } else if (label == 4) {
      this.sum_array[4] += 1;
    }

    if (this.label == 0) {
      labelRect([405, 445], [90, 90]);

      ctx.fillText("AFRICA", 450, 520);
    } else if (this.label == 1) {
      labelRect([505, 445], [90, 90]);

      ctx.fillText("ASIA", 550, 520);
    } else if (this.label == 2) {
      labelRect([605, 445], [90, 90]);

      ctx.fillText("EUROPA", 650, 520);
    } else if (this.label == 3) {
      labelRect([710, 445], [90, 90]);

      ctx.fillText("AMERICA", 750, 520);
    } else if (this.label == 4) {
      labelRect([810, 445], [90, 90]);

      ctx.fillText("OCEANIA", 850, 520);
    }
    ctx.font = "39px Ariel";
    ctx.fillStyle = `rgba(80, 84, 200,1)`;

    this.globalCounter > 80 ? ctx.fillText(this.sum_array[0], 460, 500) : null;
    this.globalCounter > 95 ? ctx.fillText(this.sum_array[1], 560, 500) : null;
    this.globalCounter > 110 ? ctx.fillText(this.sum_array[2], 660, 500) : null;
    this.globalCounter > 125 ? ctx.fillText(this.sum_array[3], 760, 500) : null;
    this.globalCounter > 140 ? ctx.fillText(this.sum_array[4], 860, 500) : null;
  };
}

const labels = new Labels();

function run() {
  counter += 1;
  ctx.fillStyle = `rgba(0, 10, 10,1.0)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `rgba(${120 + Math.random() * 50} , ${
    100 + Math.random() * 50
  } , ${40 + Math.random() * 50},1.0)`;
  ctx.font = "32px oswald";

  ctx.fillText("Death Rate: Expected 107 episodes per minute", 420, 70);
  wires(counter);
  fancyStrip1(
    // [
    //   [800, 0],
    //   [500, 0],
    // ],
    [points[2], points[0]],
    [255, 230, 60],
  );
  fancyStrip1(
    // [
    //   [800, 50],
    //   [500, 50],
    // ],
    [points[0], points[3]],
    [40, 30, 230],
  );

  fancyStrip(points, counter);

  circle.draw();
  if (counter + offset >= times[index] * 60) {
    circle.update(90);
    labels.update(labels_array[index]);
    index += 1;
  } else {
    circle.update();
    labels.update(-1);
  }

  for (let j = 0; j < A.length; j++) {
    A[j].drawAndUpdate();
  }

  counters(counter);

  requestAnimationFrame(run);
}
setTimeout(() => {
  console.log(times);
  console.log(times_array);
  run();
}, 300);
