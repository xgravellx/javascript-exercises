/* Math.random() ile ratgele sayı üretebiliriz. 
Mesela 0 ile 10 arasında bir sayı için (math.random() * 10) + 1 ile üretebiliriz.
Üretilen bu sayı ondalıklı olabilir bunu tam sayıya dönüştürmek için Math.floor() kullanabiliriz.
*/

/* Sistem iki basamaklı sayı üretmeli, kullanıcıdan bu sayıyı tahmin etmesini isteyiniz.
Eğer kullanıcı sayıyı tam olarak doğru bilirse 10.000 TL,
Sayının basamaklarını bilirse yani 65 yerine 56 yazmışsa 5.000 TL,
sadece bir basamağını bilirse 1.000 TL alacaktır. 
*/

let rastgeleSayi = Math.floor((Math.random() * 90) + 10);
let kullaniciSayi = parseInt(prompt("2 basamaklı bir sayı giriniz", "10"));

console.log(`Sistemin ürettiği sayı ${rastgeleSayi} kullanıcı sayısı: ${kullaniciSayi}`);

// Sistemin Ürettiği Sayı Parçalanması
rastgeleSayiBirler = rastgeleSayi % 10;
rastgeleSayiOnlar = Math.floor(rastgeleSayiOnlar = rastgeleSayi / 10);

// Kullanıcın Girdiği Sayı Parçalanması
kullaniciSayiBirler = kullaniciSayi % 10;
kullaniciSayiOnlar = Math.floor(kullaniciSayiOnlar = kullaniciSayi / 10);

console.log(`Birler basamağı: ${rastgeleSayiBirler} ve Onlar basamağı: ${rastgeleSayiOnlar}`);

if (rastgeleSayi === kullaniciSayi)
console.log("Tebrikler! 10000 TL kazandınız ");
else if (kullaniciSayiBirler === rastgeleSayiOnlar && kullaniciSayiOnlar === rastgeleSayiBirler)
console.log("Tebrikler! 5000 TL kazandınız..");
else if (kullaniciSayiBirler === rastgeleSayiBirler || kullaniciSayiBirler === rastgeleSayiOnlar || kullaniciSayiOnlar === rastgeleSayiOnlar || kullaniciSayiOnlar === rastgeleSayiBirler)
console.log("Tebrikler! 1000 TL kazandınız");
else {
    console.log("Üzgünüz, kazanamadınız.");
}
