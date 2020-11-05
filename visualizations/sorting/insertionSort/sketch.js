var values;
var states = [];
var w = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = floor(random(height));
    states[i] = -1;
  }
  insertionSort(values);
}

function draw() {
  background(0);
  for (let i = 0; i < values.length; i++) {
    if (states[i] == 0) fill("#FC0303");
    else fill(255);
    rect(i * w, height - values[i], w, values[i]);
  }
}
