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
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
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
    if (!this.head) return undefined;
    var oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.head;
    if (index == this.length - 1) return this.tail;

    var current = this.head;
    var currentIndex = 0;
    while (currentIndex !== index) {
      current = current.next;
      currentIndex++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(val);
    if (index == this.length) return !!this.push(val);

    var newNode = new Node(val);
    var previous = this.get(index - 1);

    var temp = previous.next;
    newNode.next = temp;
    previous.next = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) return !!this.shift();
    if (index == this.length - 1) return !!this.pop();

    var previous = this.get(index - 1);
    var removed = previous.next;
    previous.next = removed.next;
    this.length--;
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
  swap(index1, index2) {
    if (!this.head) return false;
    if (
      index1 < 0 ||
      index2 < 0 ||
      index1 >= this.length ||
      index2 >= this.length
    )
      return false;
    if (index1 == index2) return true;

    var firstNode = this.get(index1);
    var secondNode = this.get(index2);

    var temp = firstNode.val;
    firstNode.val = secondNode.val;
    secondNode.val = temp;

    return true;
  }

  traverse() {
    var current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

var list = new SinglyLinkedList();

list.push("how");
list.push("are");
list.push("you");
list.push("doing");

list.traverse();
