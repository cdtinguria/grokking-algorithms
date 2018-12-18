const binarySearch = require('../src/binary-search');

test('search 4, [1,2,3,4,5]', () => {
  expect(binarySearch([1,2,3,4,5], 4)).toBe(3);
});

test('test lower edge', () => {
	expect(binarySearch([1,2,3,4,5], 1)).toBe(0);
});

test('test higher edge', () => {
	expect(binarySearch([1,2,3,4,5], 5)).toBe(4);
});
