/* Klavyeden girilen 3 sayısının ortalamasını alan program yazınız.*/
console.log("--------Exercise 10-1-------");
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = parseInt(prompt("Enter the third number"));

console.log(`Sayıların ortalaması: ${(a + b + c) / 3}`);


/* Klavyeden kenarları girilen bir üçgenin çeşidini veren program yazınız.*/
console.log("--------Exercise 10-2-------");
let edgeFirst    = parseInt(prompt("Enter the first edge"));
let edgeSecond   = parseInt(prompt("Enter the second edge"));
let edgeThird    = parseInt(prompt("Enter the third edge"));

if ((edgeFirst === edgeSecond) && (edgeFirst === edgeThird))
    console.log("equilateral triangle");
else if ((edgeFirst === edgeSecond) || (edgeFirst === edgeThird) || (edgeSecond === edgeThird))
    console.log("isosceles triangle");
else
    console.log("scalene triangle");


/* Klavyeden girilen vize ve final notlarına göre öğrencinin geçip geçmediğini belirten program yazınız. 
(Geçme notu: , Vizenin 40%'ı, Finalin 60% 'ı alınır.  )*/
console.log("--------Exercise 10-3-------");
let visaNote    = parseInt(prompt("Enter the visa note"));
let finalNote   = parseInt(prompt("Enter the final note"));
let passState   = (visaNote * 0.4) + (finalNote * 0.6);
console.log(`${(passState >= 50) ? (console.log("Geçtiniz")) : (console.log("kaldınız"))}`);


/* Kendi adınızı ekrana 5 kere yazdıran programı giriniz.*/
console.log("--------Exercise 10-4-------");
for(let i = 0; i < 5; i++){
    document.write("Hazal Yılmaz");
}

/* 1 den 100 e kadar olan sayıların toplamını bulan uygulama yazınız.*/
console.log("--------Exercise 10-5-------");
let total =  0;
for (let x = 1; x < 100; x++){
    total += x;
}
console.log(total);


/* 1  den 10 a kadar olan sayıların sıra ile aralarında virgül olacak şekilde yazan bir for döngüsü yazın.*/
console.log("--------Exercise 10-6-------");
let numbers = " ";
for (let y = 1; y <= 10; y++){
    if (y != 10){
        numbers = numbers + y + ", ";
    }
    else {
        numbers = numbers + y;
    }
}
console.log(numbers);



/* Klavyeden girilen bir sayının faktöriyelini bulan program yazınız.*/
console.log("--------Exercise 10-7-------");
let numberprompt = parseInt(prompt("Faktöriyeli hesaplanacak sayıyı giriniz", "10"));
let faktoriyel   = 1;
for(let f = 1; f <= numberprompt; f++){
    faktoriyel *= f;
}
console.log(faktoriyel);


/* Aşağıda tanımı verilen f(x, y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız.
x > 0, y < 0 ise f(x, y) = 4x + 2y + 4
x > 0, y = 0 ise f(x, y) = 2x - y + 3
x < 0, y > 0 ise f(x, y) = 3x + 4y + 3 */
console.log("--------Exercise 10-8-------");
let xValue = parseInt(prompt("x değerini giriniz"));
let yValue = parseInt(prompt("y değerini giriniz"));
let toplam1 = 0;
if (xValue> 0 && yValue < 0){
    toplam1 = 4*xValue + 2*yValue + 4;
}
else if (xValue > 0 && yValue == 0) {
    toplam1 = 2*xValue - yValue + 3;
}
else if (xValue < 0 && yValue > 0) {
    toplam1 = 3*xValue + 4*yValue + 3 ;
}
else {
    console.log("N");
}

