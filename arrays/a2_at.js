const array1 = [5, 12, 8, 130, 44];
let index = 2;

console.log(array1.at(index)); // 8

// Return the last value of an array - Bir dizinin son değerini döndür
const cart = ['apple', 'banana', 'pear'];
function returnLast(arr) {
    return arr.at(-1);
}
const item1= returnLast(cart);
console.log(item1); // pear

cart.push('orange');
const item2 = returnLast(cart);
console.log(item2); // orange