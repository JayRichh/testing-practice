const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const capitalize = require('./capitalize');

test('capitalize first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

const reverseString = require('./reverseString');

test('reverse string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

const calculator = require('./calculator');

test('add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('subtract', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test('multiply', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
test('divide', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

const caesarCipher = require('./caesarCipher');

test('caesar cipher', () => {
  expect(caesarCipher('Hello World', 1)).toBe('Ifmmp Xpsme');
});
test('caesar cipher', () => {
  expect(caesarCipher('Hello World', 2)).toBe('Jgnnq Yqtnf');
});
test('caesar cipher', () => {
  expect(caesarCipher('Hello World', 3)).toBe('Khoor Zruog');
});
test('caesar cipher', () => {
  expect(caesarCipher('Hello World', 4)).toBe('Lipps Asvph');
});

const analyzeArray = require('./analyzeArray');

test('analyze array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  });
});
test('analyze array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6
  });
});
test('analyze array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7])).toEqual({
    average: 4,
    min: 1,
    max: 7,
    length: 7
  });
});