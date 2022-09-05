const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

// Tüm dizi öğelerinin test boyutu
// Aşağıdaki örnek, dizideki tüm öğelerin 10'dan büyük olup olmadığını test eder.
function isBigEnough(element, index, array) {
    return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true


// Bir dizinin başka bir dizinin alt kümesi olup olmadığını kontrol edin
// Aşağıdaki örnek, bir dizinin tüm öğelerinin başka bir dizide bulunup bulunmadığını test eder.
const isSubset = (array2, array3) => array3.every((element) => array2.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 6, 7])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


