var data;
var graph;
var dropDown;

function preload() {
  data = loadJSON("kevinBacon.json");
}

function setup() {
  var movies = data.movies;
  graph = new Graph();

  dropDown = createSelect();
  dropDown.changed(drawPath);

  noCanvas();

  for (let i = 0; i < movies.length; i++) {
    var movieTitle = movies[i].title;
    var cast = movies[i].cast;
    var movieNode = new Node(movieTitle);

    graph.addNode(movieNode);

    for (let j = 0; j < cast.length; j++) {
      var actor = cast[j];

      var actorNode = graph.getNode(actor);

      if (actorNode == undefined) {
        actorNode = new Node(actor);
        dropDown.option(actor);
      }

      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
    }
  }
  drawPath();
  console.log(graph);
}

function drawPath() {
  graph.reset();

  var endNode = graph.BFS(dropDown.value());

  var path = [];
  path.push(endNode);
  var next = endNode.parent;
  while (next != null) {
    path.push(next);
    next = next.parent;
  }

  var txt = "";

  for (let i = path.length - 1; i >= 0; i--) {
    var n = path[i];
    txt += n.value;
    if (i != 0) {
      txt += " --> ";
    }
  }
  createP(txt);
}
