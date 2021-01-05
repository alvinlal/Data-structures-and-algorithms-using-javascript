class Graph {
  constructor() {
    this.nodes = [];
    this.graph = {};
    this.start = null;
    this.end = null;
  }
  addNode(node) {
    var key = node.value;
    this.graph[key] = node;
    this.nodes.push(node);
  }
  getNode(key) {
    return this.graph[key];
  }
  BFS(start, end = "Kevin Bacon") {
    this.start = this.graph[start];
    this.end = this.graph[end];

    this.start.searched = true;

    var queue = [this.start];

    while (queue.length > 0) {
      var current = queue.shift();
      if (current.value == this.end.value) {
        console.log("found path to ", current.value);
        break;
      }

      current.edges.forEach(neighbour => {
        if (!neighbour.searched) {
          neighbour.searched = true;
          neighbour.parent = current;
          queue.push(neighbour);
        }
      });
    }
    return this.end;
  }
  reset() {
    for (let i = 0; i < this.nodes.length; i++) {
      var node = this.nodes[i].value;
      this.graph[node].searched = false;
      this.graph[node].parent = null;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.searched = false;
    this.edges = [];
  }
  addEdge(neighbour) {
    this.edges.push(neighbour);
    neighbour.edges.push(this);
  }
}
