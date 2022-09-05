const arr = [5, 12, 8, 130, 44];
console.log(arr.find(element => element >10)); // 12
console.log(arr.findIndex(element => element >10)); // 1

// Dizideki aranan nesneyi bulun
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5},
];
function isCherries(fruit) {
    return fruit.name === 'cherries';
}
console.log(inventory.find(isCherries));


// Bir dizide bir asal sayı bulun
function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5