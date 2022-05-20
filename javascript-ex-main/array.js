// // Verileri bir arada tutan yapılara array denir.

// let arabaMarkalari = ["Mercedes", "Audi", "BMW"];
// console.log(arabaMarkalari.toString());
// console.log(arabaMarkalari);
// console.log(arabaMarkalari[0]);

// arabaMarkalari[3] = "Honda";
// console.log(arabaMarkalari.toString());
// console.log(arabaMarkalari.length);

// // Dizi elemanlarını yazdırma
// for (let i = 0; i < arabaMarkalari.length; i++) {
//     console.log(arabaMarkalari[i]);
// }

// // Dizi elemanlarını yazdırma
// for (let onankiDiziElemanı of arabaMarkalari) {
//     console.log(onankiDiziElemanı);
// }

// let yeniDizi = [1, "hazal", true];
// for (let onankiDiziElemanı1 of yeniDizi) {
//     console.log(onankiDiziElemanı1);
// }

let isimler = ["Hazal", "Derya", "Çağrı", "Mehmet"];
console.log(isimler.toString());
console.log(isimler.join(" | "));

// PUSH: Sona eleman ekler.
isimler.push("AAA");
console.log(isimler.toString());

// POP: Sondaki elemanı siler.
isimler.pop();
console.log(isimler);

// SHIFT: Dizinin ilk elemanını siler. (Sola kaydırma)
isimler.shift();
console.log(isimler);

// UNSHIFT: Dizinin başına eleman ekleme (Sağa kaydırma)
isimler.unshift("Hazal");
console.log(isimler);

// DELETE: Silme
delete isimler[1];
console.log(isimler);

// SPLICE: splice(7, 0, 9, 10) = 7. indeksten başla, 0 hiçbir elemanı silme, 9 ve 10 ekle.
let sayilar = [1, 2, 3, 4, 5, 6, 7];
sayilar.splice(7, 0, 9, 10);
console.log(sayilar.toString());

// CONCAT: Dizileri birleştirme
let tekSayilar = [1, 3, 5];
let ciftSayilar = [0, 2, 4];

let sayilarim = tekSayilar.concat(ciftSayilar);
console.log(sayilarim.toString());

// SLICE: splice(2, 4) 2. indexten başlayıp 4. indexe kadar kes.
let yeniDizi1 = sayilarim.splice(2, 4);
console.log(yeniDizi1.toString());