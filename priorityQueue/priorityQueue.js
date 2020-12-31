class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    var newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    var idx = this.values.length - 1;
    var element = this.values[idx];
    while (idx > 0) {
      var parentIdx = Math.floor((idx - 1) / 2);
      var parentElement = this.values[parentIdx];
      if (element.priority >= parentElement.priority) break;
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
    var length = this.values.length;
    var element = this.values[0];

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

var priority_Queue = new PriorityQueue();

priority_Queue.enqueue("common cold", 5);
priority_Queue.enqueue("malaria", 4);
priority_Queue.enqueue("corona", 3);
priority_Queue.enqueue("broken arm", 2);
priority_Queue.enqueue("gunshot wound", 1);

console.log(priority_Queue.dequeue());
console.log(priority_Queue.dequeue());
console.log(priority_Queue.dequeue());
console.log(priority_Queue.dequeue());
console.log(priority_Queue.dequeue());
