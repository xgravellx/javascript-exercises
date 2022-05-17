/* 
Bir yıl değerinin artık yıl olup olmadığını hesaplayınız.
Bir yılın artık olması için ya 400 ile modu 0 olmalı ya da 4 ile modu 0 olmalı ve 100 ile modu 0 olmamalıdır.
4100 false değer vermelidir.

*/

/* let yearEntered = parseInt(prompt("Yıl giriniz:"));
 */let leapYear    = (yearEntered % 400 == 0 || (yearEntered % 4 == 0 && yearEntered % 100 != 0));
console.log(`Girilen Yıl: ${yearEntered} Artık Yıl mı? ${leapYear}`);