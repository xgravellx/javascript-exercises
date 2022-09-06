const arr = [1, 2, 3, 4];
console.log(arr.fill(0, 2, 4));


console.log(([1, 2, 3]).fill(4));   // [4, 4, 4];
console.log(([1, 2, 3]).fill(4, 1));   // [1, 4, 4];
console.log(([1, 2, 3]).fill(4, 1, 2));   // [1, 4, 3];
