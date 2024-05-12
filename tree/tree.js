class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    }
    var currentNode = this.root;
    while (true) {
      if (val === currentNode.val) return null;
      if (val < currentNode.val) {
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

  find(val) {
    if (!this.root) return null;

    var currentNode = this.root;

    while (true) {
      if (!currentNode) return null;
      if (currentNode.val == val) return currentNode;
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  BFS() {
    var queue = [];
    var out = [];

    queue.push(this.root);

    while (queue.length) {
      var node = queue.shift();
      out.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return out;
  }

  preOrder() {
    var out = [];
    function traverse(node) {
      out.push(node.val);

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
      out.push(node.val);
    }

    traverse(this.root);

    return out;
  }

  inOrder() {
    var out = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      out.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return out;
  }
}

module.exports = BinarySearchTree;
