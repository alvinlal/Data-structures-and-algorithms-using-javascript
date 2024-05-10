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
    if (this.length == 0) return false;

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
      this.tail = null;
      this.head = null;
    }

    return current;
  }

  shift() {
    if (this.length == 0) return false;

    var oldHead = this.head;
    this.head = oldHead.next;

    this.length--;

    if (this.length == 0) {
      this.tail = null;
      this.head = null;
    }

    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos > this.length) return false;
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

  set(pos, val) {
    if (pos < 0 || pos > this.length) return false;

    var node = this.get(pos);
    node.val = val;

    return node;
  }

  insertAt(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    if (pos == 0) return !!this.unshift(val);
    if (pos == this.length) return !!this.push(val);

    const newNode = new Node(val);
    var nodeBefore = this.get(pos - 1);
    var nodeAtPos = this.get(pos);

    nodeBefore.next = newNode;
    newNode.next = nodeAtPos;

    this.length++;

    return true;
  }

  deleteAt(pos) {
    if (pos < 0 || pos >= this.length) return false;
    if (pos == 0) return !!this.shift();
    if (pos == this.length) return !!this.pop();

    var nodeBefore = this.get(pos - 1);

    nodeBefore.next = nodeBefore.next.next;

    this.length--;

    return true;
  }

  swap(pos1, pos2) {
    if (pos1 < 0 || pos2 < 0 || pos2 >= this.length || pos1 >= this.length) return false;

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
