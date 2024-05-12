const BinarySearchTree = require('./tree');

describe('binarySearchTree', () => {
  test('insert()', () => {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(20);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(15);
    binarySearchTree.insert(21);

    expect(binarySearchTree.BFS()).toStrictEqual([10, 5, 20, 3, 6, 15, 21]);
  });

  test('find()', () => {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(20);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(15);
    binarySearchTree.insert(21);

    expect(binarySearchTree.find(15).val).toBe(15);
  });

  test('BFS()', () => {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(20);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(15);
    binarySearchTree.insert(21);

    expect(binarySearchTree.BFS()).toStrictEqual([10, 5, 20, 3, 6, 15, 21]);
  });

  test('preOrder()', () => {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(20);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(15);
    binarySearchTree.insert(21);

    expect(binarySearchTree.preOrder()).toStrictEqual([10, 5, 3, 6, 20, 15, 21]);
  });

  test('postOrder()', () => {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(20);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(15);
    binarySearchTree.insert(21);

    console.log(binarySearchTree.postOrder());

    expect(binarySearchTree.postOrder()).toStrictEqual([3, 6, 5, 15, 21, 20, 10]);
  });

  test('inOrder()', () => {
    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(10);
    binarySearchTree.insert(5);
    binarySearchTree.insert(20);
    binarySearchTree.insert(3);
    binarySearchTree.insert(6);
    binarySearchTree.insert(15);
    binarySearchTree.insert(21);

    expect(binarySearchTree.inOrder()).toStrictEqual([3, 5, 6, 10, 15, 20, 21]);
  });
});
