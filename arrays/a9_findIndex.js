// Bir dizideki asal sayının dizinini bulun
function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
        return false;
    }
    for ( let factor = 3; factor <= Math.sqrt(element); factor +=2) {
        if (element % factor === 0) {
            return false;
        }
    }
    return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime));  // -1
console.log([4, 6, 7, 9, 12].findIndex(isPrime));  // 2