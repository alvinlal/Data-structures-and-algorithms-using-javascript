class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(node) {
    this.values.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    var idx = this.values.length - 1;
    var element = this.values[idx];
    while (idx > 0) {
      var parentIdx = Math.floor((idx - 1) / 2);
      var parentElement = this.values[parentIdx];
      if (parentElement.priority <= element.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentElement;
      idx = parentIdx;
    }
  }
  dequeue() {
    var min = this.values[0];
    var end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    var idx = 0;
    var element = this.values[0];
    var length = this.values.length;

    while (true) {
      var leftChildIdx = 2 * idx + 1;
      var rightChildIdx = 2 * idx + 2;
      var leftChild, rightChild;
      var swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap == null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  shortestPath(start, end) {
    var distances = {};
    var previous = {};
    var nodes = new PriorityQueue();
    var smallest;
    var path = [];

    for (let vertex in this.adjacencyList) {
      if (vertex == start) {
        distances[vertex] = 0;
        nodes.enqueue({ value: vertex, priority: 0 });
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue({ value: vertex, priority: Infinity });
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest == end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] != Infinity) {
        for (let neighbour in this.adjacencyList[smallest]) {
          var nextNeighbour = this.adjacencyList[smallest][neighbour];
          var node = nextNeighbour.node;

          var candidate = distances[smallest] + nextNeighbour.weight;

          if (candidate < distances[node]) {
            distances[node] = candidate;
            nodes.enqueue({ value: node, priority: candidate });
            previous[node] = smallest;
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.shortestPath("A", "E")); // A,C,D,F,E
