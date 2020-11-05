var w = 5;
var values;
var states = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = floor(random(height));
    states[i] = -1;
  }
  quickSort(values);
}

function draw() {
  background(0);
  for (let i = 0; i < values.length; i++) {
    if (states[i] == 0) {
      fill("#E0777D");
    } else if (states[i] == 1) {
      fill("#D6FFB7");
    } else if (states[i] == 2) {
      fill("#FC0303");
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}
