/*
Math.random() ile rastgele sayı üretebiliriz. 
0-10 arasında sayı üretmek için (Math.random() * 10) + 1 
Üretilen bu sayı ondalıklı olabilir bunu tam sayıya dönüştürmek için Math.floor() kullanabiliriz.

Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli. Kullanıcıdan bu sayıyı tahmin etmesini istemeliyiz.
Eğer kullanıcı tam olarak bilirse 10.000 TL,
Sayının basamaklarını bilirse yani 65 yerine 56 yazmışsa 5.000 TL,
Şanslı numaranın sadece 1 basamağını bilirse 1.000 TL kazanır.
*/

let numberProduced  = Math.floor((Math.random() * 90) + 10);
//let numberUser      = parseInt(prompt("Enter to digit number"));
console.log(`Number Produced: ${numberProduced} User Number: ${numberUser}`);
let numberProduced_oneDigit  = numberProduced % 10;
let numberProduced_theyDigit = numberProduced / 10;
let numberUser_oneDigit  = numberUser % 10;
let numberUser_theyDigit = numberUser / 10;


if (numberProduced === numberUser)
    console.log("Tebrikler! 10.000 TL kazandınız.");
else if(numberProduced_oneDigit === numberUser_theyDigit && numberProduced_theyDigit === numberUser_oneDigit)
    console.log("Tebrikler! 5.000 TL kazandınız");
else if (numberProduced_oneDigit === numberUser_oneDigit ||  numberProduced_theyDigit === numberUser_theyDigit)
    console.log("Tebrikler! 1.000 TL kazandınız");
else {
    console.log("Üzgünüm, ödül kazanamadınız.");
}