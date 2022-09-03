// SORU 1:  Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız.

// let sayi1 = parseInt(prompt("Birinci Sayıyı giriniz:"));
// let sayi2 = parseInt(prompt("İkinci Sayıyı giriniz:"));
// let sayi3 = parseInt(prompt("Üçüncü Sayıyı giriniz:"));

// let ortalama = ((sayi1 + sayi2 + sayi3) / 3);
// console.log(`Birinci: ${sayi1},\n İkinci: ${sayi2},\n Üçüncü: ${sayi3}\n ORTALAMA: ${ortalama}`);

// SORU 2: Klavyeden kenarı girilen bir üçgenin çeşidini veren program yazınız.

// let kenar1 = parseInt(prompt("Birinci kenarı giriniz:"));
// let kenar2 = parseInt(prompt("İkinci kenarı giriniz:"));
// let kenar3 = parseInt(prompt("Üçüncü kenarı giriniz:"));

// if (kenar1 === kenar2  && kenar1 === kenar3)
// console.log("Eşkenar Üçgen");
// else if (kenar1 === kenar2 && kenar1 != kenar3 || kenar1 === kenar3 || kenar2 === kenar3 )
// console.log("İkizkenar Üçgen");
// else{
//     console.log("Çeşitkenar Üçgen");
// }


// SORU 3: Klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini hesaplayın. (Geçme notu: 50, Vizenin %40' ı, finalin %60' ı)

// let vizeNotu = parseInt(prompt("Vize Notunu Giriniz:"));
// let finalNotu = parseInt(prompt("Final Notunu Giriniz:"));

// let gecmeNotu = (vizeNotu * 0.4) + (finalNotu * 0.6);

// if (gecmeNotu >= 50)
// console.log("Tebrikler, geçtiniz");
// else
// console.log("Kaldınız");


// SORU 4: Kendi adınızı ekrana 5 kere yazdıran program. For, While

// let ad = "Hazal Yılmaz";
// for (let sayac = 0; sayac < 5; sayac++)
// console.log(ad);

// let adi = "Hazal Yılmaz";
// let sayac = 0;
// while(sayac < 5){
//     console.log(adi);
//     sayac++;
// }

// SORU 5: 1 den 10 e kadar olan sayılarının toplamını bulan program.

// let toplam = 0;
// for (let baslangic = 1; baslangic <= 100; baslangic++ ) {
//     toplam += baslangic;
// }
// console.log(toplam);

// SORU 6: 1 den 10 a kadar sayıları yazdırıp aralarına virgül koyun.

// let metin = "";
// for (let i = 0; i<=10; i++) {
//     if (i != 10){
//         metin = metin + i + ", ";
//     }
//     else {
//         metin += i;
//     }
// }
// console.log(metin);

// SORU 7: Klavyeden girilen bir sayının faktöriyelini alan uygulama yazınız.

// let sayi = parseInt(prompt("Sayı giriniz:", "10"));
// let faktoriyel= 1;

// for (let i = 1; i <= sayi; i++){
//     faktoriyel *= i;
// }
// console.log(`Girdiğiniz sayı: ${sayi} faktöriyeli: ${faktoriyel} `);


// SORU 8: Girilen x ve y değerlerine göre aşağıdaki sonuçları hesaplasın.
/*  f(x,y) = 4x+2y+4
f(x,y) = 2x-y+3
f(x,y) = 3x+4y+3
*/

// let x = parseInt(prompt("x değerini giriniz:"));
// let y = parseInt(prompt("y değerini giriniz:"));
// birinciDenklem = ((4 * x) + (2 * y) + 4);
// ikinciDenklem = ((2 * x) - y + 3);
// ucuncuDenklem = ((3 * x) + (4 * y) + 3);
// console.log(`Birinci Denklem: ${birinciDenklem}\n İkinci Denklem: ${ikinciDenklem}\n Üçüncü Denklem: ${ucuncuDenklem}`);

// SORU 9: 100 luk not sistemini 4 lü harf sistemine çeviren program.

// let yuzlukNot = parseInt(prompt("Notunuzu giriniz:", "50" ));
// let notSiniri = (yuzlukNot / 10);
// if (yuzlukNot == 100 ) {
//     notSiniri = 9;
// }

// switch (notSiniri) {
//     case 9: console.log("Notunuz AA"); break;
//     case 8: console.log("Notunuz BA"); break;
//     case 7: console.log("Notunuz BB"); break;
//     case 6: console.log("Notunuz CB"); break;
//     case 5: console.log("Notunuz CC"); break;
//     default: console.log("Notunuz CC den düşük")
// }

  