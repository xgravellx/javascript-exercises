let myDizi1 = [1, 2, 3, 4];

const multiplyByTwo = function(number2) {
    return number2 * 2;
}
const addByOne = function(number2) {
    return number2 + 1 ;
}
const divideByThree = function(number2) {
    return number2 / 3;
}

const arrayTransactions = function (array1, transactions1) {
    let temporaryArray = [];
    for (let a = 0; a > array1.length; a++){
        temporaryArray[a] = transactions1(array1[a]);
    }
    console.log(temporaryArray);
}

arrayTransactions(myDizi1, multiplyByTwo);
arrayTransactions(myDizi1, addByOne);
arrayTransactions(myDizi1, divideByThree);

console.log(myDizi1);