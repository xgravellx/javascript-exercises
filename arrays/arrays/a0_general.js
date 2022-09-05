// Static Methods

const arr = [1, 2, 3, 4, 5, "hazal"];

// Array.from()
console.log(Array.from('hazal')); // [ 'h', 'a', 'z', 'a', 'l' ]

// Array.isArray()
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({foo: 123})); // false
console.log(Array.isArray('hazal')); // false
console.log(Array.isArray(undefined)); // false

// Array.of()
console.log(Array.of(7)); // [ 7 ];
console.log(Array(7)); // [ <7 empty items> ]
console.log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]
console.log(Array(1, 2, 3)); // [ 1, 2, 3 ]


