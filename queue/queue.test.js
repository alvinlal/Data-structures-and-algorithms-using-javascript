const Queue = require('./queue');

describe('queue', () => {
  test('dequeue() and enqueue()', () => {
    const queue = new Queue();

    expect(queue.enqueue(1)).toBe(1);
    expect(queue.enqueue(2)).toBe(2);
    expect(queue.enqueue(3)).toBe(3);
    expect(queue.enqueue(4)).toBe(4);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);

    expect(queue.dequeue()).toBe(null);
    expect(queue.enqueue(1)).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(null);
  });
});
