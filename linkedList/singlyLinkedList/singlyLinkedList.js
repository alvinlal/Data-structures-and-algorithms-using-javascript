class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // 1. create a new node newNode
    // 2. if length is 0, head = tail = newNode
    // 3. else this.tail.next = newNode and this.tail newNode
    // 4. increment length

    const newNode = new Node(val);

    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }

  pop() {
    // this should remove item at the end
    // 1. if length is 0, return undefined
    // 2. else traverse the list until the node just before the tail is reached
    // 3. node just before tail.next = null
    // 4. decrement length
    // 5. if the length has become 0, make head and tail null
    // 5. return the popped node

    if (this.length == 0) return undefined;

    var current = this.head;
    var previous = current;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.tail = previous;

    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (this.length == 0) return false;
    var current = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(pos) {
    if (pos < 0 || pos > this.length) return;
    if (pos == 0) return this.head;
    if (pos == this.length) return this.tail;

    var current = this.head;
    var i = 0;

    while (i != pos) {
      current = current.next;
      i++;
    }

    return current;
  }

  insertAt(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    if (pos == 0) return !!this.unshift(val);
    if (pos == this.length) return !!this.push(val);

    const newNode = new Node(val);
    var previousNode = this.get(pos - 1);

    var tempNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = tempNode;

    this.length++;
    return true;
  }

  deleteAt(pos) {
    if (pos < 0 || pos >= this.length) return false;
    if (pos == 0) return !!this.shift();
    if (pos == this.length - 1) return !!this.pop();

    var prevNode = this.get(pos - 1);

    prevNode.next = prevNode.next.next;

    this.length--;

    return true;
  }

  set(pos, val) {
    if (pos < 0 || pos >= this.length) return false;

    var node = this.get(pos);
    node.val = val;
    return true;
  }

  swap(pos1, pos2) {
    if (pos1 < 0 || pos2 < 0 || pos1 >= this.length || pos2 >= this.length) return false;

    if (pos1 == pos2) return true;

    var nodeA = this.get(pos1);
    var nodeB = this.get(pos2);

    var temp = nodeA.val;
    nodeA.val = nodeB.val;
    nodeB.val = temp;

    return true;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var next;
    var previous = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }

    return this;
  }

  getList() {
    const list = [];

    if (this.length == 0) {
      return list;
    }

    var current = this.head;

    while (current) {
      list.push(current.val);
      current = current.next;
    }

    return list;
  }
}

module.exports = SinglyLinkedList;
