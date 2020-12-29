class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var currentNode = this.root;
      while (true) {
        if (value == currentNode.value) return null;
        if (value < currentNode.value) {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return null;
    var currentNode = this.root;
    while (true) {
      if (!currentNode) return null;
      if (currentNode.value == value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else currentNode = currentNode.right;
    }
  }
  BFS() {
    var node = this.root,
      out = [],
      queue = [];
    queue.push(node);
    while (queue.length > 0) {
      node = queue.shift();
      out.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return out;
  }
  preOrder() {
    var out = [];
    function traverse(node) {
      out.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return out;
  }
  postOrder() {
    var out = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      out.push(node.value);
    }
    traverse(this.root);
    return out;
  }
  inOrder() {
    var out = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      out.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return out;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.inOrder());

debugger;
