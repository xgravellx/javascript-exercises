const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
(filter) --> sayilar dizisindeki tek elemanları bulup başka bir diziye aktarın.
(map)    --> bu yeni dizinin her bir elemanının karesini alıp başka bir diziye aktarın.
(reduce) --> bu dizideki 10 dan büyük olan elemanların toplamını ekrana yazdırın.

sayilar dizisini parametre olarak alan tek bir fonksiyon olmalı ve y bu fonksiyon geriye sonucu döndürmelidir.

NOTE: for ve while döngülerini kullanmak yasaktadır.
*/

function result(numbers) {
    const singleArray = numbers.filter(function (number) {
        return number % 2 !== 0;
    });
    console.log(singleArray);

    const squareNumbers = singleArray.map(function (number) {
        return number * number;
    })
    console.log(squareNumbers);

    const total = squareNumbers.reduce(function (generalTotal, number) {
        if (number > 10) {
            return generalTotal += number;
        }
        else {
            return generalTotal;
        }
    }, 0);
    return total;
}
console.log(result(numbers));


// Kısa versiyon
function shortVersion1(numbers) {
    const result1 = numbers.filter(function (number) {
        return number % 2 !== 0;
    }).map (function (number) {
        return number * number;
    }).reduce (function (generalTotal, number) {
        if (number > 10) {
            return generalTotal += number;
        }
        else {
            return generalTotal;
        }
    }, 0)
    console.log(`Short Version: ${result1}`);
}
shortVersion1(numbers);



// Kısa Verion Fat Arrow
function shortVersion2 (numbers) {
    return numbers.filter(number => number % 2 !== 0)
                .map(number => number * number)
                .reduce((generalTotal, number) => number > 10 ? generalTotal += number : generalTotal);                 
}
console.log(shortVersion2(numbers));

console.log("******************");