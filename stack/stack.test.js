const Stack = require('./stack');

describe('stack', () => {
  test('push() and pop()', () => {
    const stack = new Stack();

    expect(stack.push(1)).toBe(1);
    expect(stack.push(2)).toBe(2);
    expect(stack.push(3)).toBe(3);
    expect(stack.push(4)).toBe(4);
    expect(stack.push(5)).toBe(5);

    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);

    expect(stack.pop()).toBe(null);
    expect(stack.pop()).toBe(null);
    expect(stack.pop()).toBe(null);

    expect(stack.push(1)).toBe(1);

    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(null);
  });
});
