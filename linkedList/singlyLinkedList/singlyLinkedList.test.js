// import SinglyLinkedList from './singlyLinkedList';

const SinglyLinkedList = require('./singlyLinkedList');

describe('singlyLinkedList', () => {
  test('push()', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(2);
    singlyLinkedList.push(2);
    singlyLinkedList.push(3);
    singlyLinkedList.push(1);

    expect(singlyLinkedList.getList()).toStrictEqual([2, 2, 3, 1]);
  });

  test('pop()', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(2);
    singlyLinkedList.push(2);
    singlyLinkedList.push(3);
    singlyLinkedList.push(1);

    expect(singlyLinkedList.pop().val).toEqual(1);
    expect(singlyLinkedList.pop().val).toEqual(3);

    expect(singlyLinkedList.getList()).toStrictEqual([2, 2]);
  });

  test('shift()', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(2);
    singlyLinkedList.push(2);
    singlyLinkedList.push(3);
    singlyLinkedList.push(1);

    expect(singlyLinkedList.shift().val).toEqual(2);
    expect(singlyLinkedList.shift().val).toEqual(2);

    expect(singlyLinkedList.getList()).toStrictEqual([3, 1]);
  });

  test('unshift()', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(2);
    singlyLinkedList.push(2);
    singlyLinkedList.push(3);
    singlyLinkedList.push(1);

    singlyLinkedList.unshift(5);
    singlyLinkedList.unshift(4);

    expect(singlyLinkedList.getList()).toStrictEqual([4, 5, 2, 2, 3, 1]);
  });

  test('get()', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(2);
    singlyLinkedList.push(2);
    singlyLinkedList.push(3);
    singlyLinkedList.push(1);

    expect(singlyLinkedList.get(0).val).toEqual(2);
    expect(singlyLinkedList.get(3).val).toEqual(1);
  });

  describe('insertAt()', () => {
    it('insert at begining', () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(2);
      singlyLinkedList.push(2);
      singlyLinkedList.push(3);
      singlyLinkedList.push(1);

      singlyLinkedList.insertAt(0, 1);

      expect(singlyLinkedList.getList()).toStrictEqual([1, 2, 2, 3, 1]);
    });

    it('insert at end', () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(2);
      singlyLinkedList.push(2);
      singlyLinkedList.push(3);
      singlyLinkedList.push(1);

      singlyLinkedList.insertAt(4, 1);

      expect(singlyLinkedList.getList()).toStrictEqual([2, 2, 3, 1, 1]);
    });

    it('insert at middle', () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(2);
      singlyLinkedList.push(2);
      singlyLinkedList.push(3);
      singlyLinkedList.push(1);

      singlyLinkedList.insertAt(2, 7);

      expect(singlyLinkedList.getList()).toStrictEqual([2, 2, 7, 3, 1]);
    });
  });

  describe('deleteAt()', () => {
    it('delete from begining', () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(2);
      singlyLinkedList.push(2);
      singlyLinkedList.push(3);
      singlyLinkedList.push(1);

      singlyLinkedList.deleteAt(0);

      expect(singlyLinkedList.getList()).toStrictEqual([2, 3, 1]);
    });

    it('delete from end', () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(2);
      singlyLinkedList.push(2);
      singlyLinkedList.push(3);
      singlyLinkedList.push(1);

      singlyLinkedList.deleteAt(3);

      expect(singlyLinkedList.getList()).toStrictEqual([2, 2, 3]);
    });

    it('insert at middle', () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(2);
      singlyLinkedList.push(2);
      singlyLinkedList.push(3);
      singlyLinkedList.push(1);

      singlyLinkedList.deleteAt(2);

      expect(singlyLinkedList.getList()).toStrictEqual([2, 2, 1]);
    });
  });

  test('set()', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(2);
    singlyLinkedList.push(2);
    singlyLinkedList.push(3);
    singlyLinkedList.push(1);

    singlyLinkedList.set(0, 7);

    expect(singlyLinkedList.getList()).toStrictEqual([7, 2, 3, 1]);
  });

  test('reverse()', () => {
    const singlyLinkedList = new SinglyLinkedList();
    singlyLinkedList.push(2);
    singlyLinkedList.push(7);
    singlyLinkedList.push(3);
    singlyLinkedList.push(1);

    singlyLinkedList.reverse();

    expect(singlyLinkedList.getList()).toStrictEqual([1, 3, 7, 2]);
  });
});
