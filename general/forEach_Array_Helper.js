let numbers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("********************");
for(let ix = 0; ix < numbers10.length; ix++) {
    console.log(numbers10[ix]);
}
console.log("********************");
for(let item of numbers10) {
    console.log(item);
}
console.log("********************");
numbers10.forEach(function(numbers10){
    console.log(numbers10);
});
console.log("********************");
numbers10.forEach(twoParameterFunc);
function twoParameterFunc(numbers10, index) {
    console.log(numbers10, index);
}

// Kendi forEach fonksiyonumuz
arrayScanner(numbers10, (function(deger, index){
    console.log(`Deger: ${deger} İndex: ${index}`);
}))
function arrayScanner(dizi, callback) {
    for(let i = 0; i < dizi.length; i++) {
        callback(dizi[i], i);
    }
}