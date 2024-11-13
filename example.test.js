// example.test.js
const add = require('./example');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 1 + 2 to not equal 4', () => {
  expect(add(1, 4)).not.toBe(4);
});
