class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return newNode;
  }

  pop() {
    if (this.length == 0) return false;

    var oldTail = this.tail;

    this.tail = this.tail.prev;
    this.tail.next = null;

    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return oldTail;
  }

  shift() {
    if (this.length == 0) return false;

    var oldHead = this.head;

    this.head = oldHead.next;
    this.head.prev = null;

    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
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
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;

    return newNode;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) return false;
    if (pos == 0) return this.head;
    if (pos == this.length - 1) return this.tail;

    var counter;
    var current;
    if (pos <= this.length / 2) {
      current = this.head;
      counter = 0;
      while (counter != pos) {
        counter++;
        current = current.next;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;

      while (counter != pos) {
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  set(pos, val) {
    var node = this.get(pos);

    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }

  insertAt(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    if (pos == 0) return !!this.unshift(val);
    if (pos == this.length) return this.push(val);

    var newNode = new Node(val);
    var prevNode = this.get(pos - 1);

    var nodeAfter = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;

    newNode.next = nodeAfter;
    nodeAfter.prev = newNode;

    this.length++;
    return true;
  }

  deleteAt(pos) {
    if (pos < 0 || pos >= this.length) return false;
    if (pos == 0) return this.shift();
    if (pos == this.length - 1) return this.pop();

    var removedNode = this.get(pos);
    var prevNode = removedNode.prev;
    var nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.length--;

    removedNode.next = null;
    removedNode.prev = null;

    return removedNode;
  }

  swap(pos1, pos2) {
    if (!this.length) return false;
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
    if (!this.length) return false;

    var currentNode = this.head;
    var nextNode;

    currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    while (currentNode != null) {
      nextNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = nextNode;
      currentNode = nextNode;
    }
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

module.exports = DoublyLinkedList;
