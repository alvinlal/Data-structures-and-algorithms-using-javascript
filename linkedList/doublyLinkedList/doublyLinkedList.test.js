// import doublyLinkedList from './doublyLinkedList';

const DoublyLinkedList = require('./doublyLinkedList');

describe('doublyLinkedList', () => {
  test('push()', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(2);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(1);

    expect(doublyLinkedList.getList()).toStrictEqual([2, 2, 3, 1]);
  });

  test('pop()', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(2);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(1);

    expect(doublyLinkedList.pop().val).toEqual(1);
    expect(doublyLinkedList.pop().val).toEqual(3);

    expect(doublyLinkedList.getList()).toStrictEqual([2, 2]);
  });

  test('shift()', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(2);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(1);

    expect(doublyLinkedList.shift().val).toEqual(2);
    expect(doublyLinkedList.shift().val).toEqual(2);

    expect(doublyLinkedList.getList()).toStrictEqual([3, 1]);
  });

  test('unshift()', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(2);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(1);

    doublyLinkedList.unshift(5);
    doublyLinkedList.unshift(4);

    expect(doublyLinkedList.getList()).toStrictEqual([4, 5, 2, 2, 3, 1]);
  });

  test('get()', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(2);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(1);

    expect(doublyLinkedList.get(0).val).toEqual(2);
    expect(doublyLinkedList.get(3).val).toEqual(1);
  });

  describe('insertAt()', () => {
    it('insert at begining', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.push(2);
      doublyLinkedList.push(2);
      doublyLinkedList.push(3);
      doublyLinkedList.push(1);

      doublyLinkedList.insertAt(0, 1);

      expect(doublyLinkedList.getList()).toStrictEqual([1, 2, 2, 3, 1]);
    });

    it('insert at end', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.push(2);
      doublyLinkedList.push(2);
      doublyLinkedList.push(3);
      doublyLinkedList.push(1);

      doublyLinkedList.insertAt(4, 1);

      expect(doublyLinkedList.getList()).toStrictEqual([2, 2, 3, 1, 1]);
    });

    it('insert at middle', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.push(2);
      doublyLinkedList.push(2);
      doublyLinkedList.push(3);
      doublyLinkedList.push(1);

      doublyLinkedList.insertAt(2, 7);

      expect(doublyLinkedList.getList()).toStrictEqual([2, 2, 7, 3, 1]);
    });
  });

  describe('deleteAt()', () => {
    it('delete from begining', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.push(2);
      doublyLinkedList.push(2);
      doublyLinkedList.push(3);
      doublyLinkedList.push(1);

      doublyLinkedList.deleteAt(0);

      expect(doublyLinkedList.getList()).toStrictEqual([2, 3, 1]);
    });

    it('delete from end', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.push(2);
      doublyLinkedList.push(2);
      doublyLinkedList.push(3);
      doublyLinkedList.push(1);

      doublyLinkedList.deleteAt(3);

      expect(doublyLinkedList.getList()).toStrictEqual([2, 2, 3]);
    });

    it('insert at middle', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.push(2);
      doublyLinkedList.push(2);
      doublyLinkedList.push(3);
      doublyLinkedList.push(1);

      doublyLinkedList.deleteAt(2);

      expect(doublyLinkedList.getList()).toStrictEqual([2, 2, 1]);
    });
  });

  test('set()', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(2);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.push(1);

    doublyLinkedList.set(0, 7);

    expect(doublyLinkedList.getList()).toStrictEqual([7, 2, 3, 1]);
  });

  test('reverse()', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(2);
    doublyLinkedList.push(7);
    doublyLinkedList.push(3);
    doublyLinkedList.push(1);

    doublyLinkedList.reverse();

    expect(doublyLinkedList.getList()).toStrictEqual([1, 3, 7, 2]);
  });
});
