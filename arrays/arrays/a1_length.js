const arr  = ['A', 'B'];
const arrA = [1, 2, 3, 4, 5, 6, "hazel", "yilmaz"];
const arrB = new Array(10);

console.log(arrA.length); // 8
console.log(arrB.length); // 10

arrA.length = 10;
console.log(arrA); // [ 1, 2, 3, 4, 5, 6, 'hazel', 'yilmaz', <2 empty items> ]

arr.forEach((item) => console.log(item)); 
// A
// B

// Iterating over an array - Dizi üzerinde Yineleme
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
}
console.log(numbers);

// Shortening an array - Bir diziyi kısaltma
if(arrA.length > 3) {
    arrA.length = 3;
}
console.log(arrA); // [1, 2, 3]
console.log(arrA.length); // 3

// Create empty array of fixed length - Sabit uzunlukta boş dizi oluşturun
const nbr = [];
nbr.length = 3;
console.log(nbr); // [ <3 empty items> ]


