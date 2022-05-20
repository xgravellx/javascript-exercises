// function selamVer() {
//     console.log("Merhaba");
// }
// selamVer();

// // Sayıları toplama fonksiyonu
// function toplam(sayi1, sayi2){
//     console.log("Sayıların Toplamı:" + (sayi1 + sayi2));
//     return sayi1 + sayi2;
// }
// toplam(10,20);

// function bellliAraliktaSayilariTopla(baslangicSayisi, bitisSayisi) {
//     let toplam = 0;
//     for (let i = baslangicSayisi; i <= baslangicSayisi; i++){
//         toplam += i;
        
//         console.log("Toplam:" + toplam);
//         return toplam;
//     }
// }
// let renk = "Siyah"
// favoriRenginiSoyle(renk)

// function favoriRenginiSoyle(renk) {
//     console.log("Favori rengim:" + " " + renk);
// }

// const selamVerDegiskeni = function () {
//     console.log("Merhaba selamVerDegiskeni");
// }

// selamVerDegiskeni();

// ES6 Fat Arrow Yapısı
const fatArrow = () => {
    console.log("Merhaba selamVerDegiskeni");
}
fatArrow();

// ES6 Fat Arrow Parametre Almayan Yapısı
const fatArrow1 = _ => {
    console.log("Merhaba 1");
}
fatArrow1();

// ES6 Fat Arrow Parametre Alan
// Önce Klasik Gösterim
// 1. Çözüm
function karesiniAl(sayi){
    return sayi * sayi;
}
console.log(karesiniAl(2));

// 2. Çözüm
const karesiniAlDegiskeni = function(sayi) {
    return sayi * sayi;
}
console.log(karesiniAlDegiskeni(4));

// ES6 Fat Arrow Parametre Alan
const fatArrowParametreli = (sayi) => {
    return sayi * sayi;
}
console.log(fatArrowParametreli(4));

// ES6 Fat Arrow Parametre Alan Kısa Versiyon

// Tek parametre için kısaltma
const fatArrowParametreli1 = sayi => {
    return sayi * sayi;
}
console.log(fatArrowParametreli1(2));

// Tek parametre Tek Kod için kısaltma
const fatArrowParametreli2 = sayi => sayi * sayi;
console.log(fatArrowParametreli2(4));

// Sayıları Toplayan Fat Arrow Kısa
const sayilariTopla = (s1, s2) => s1 +s2;
console.log(sayilariTopla(10,10));

console.log("Bahadır Bolat");