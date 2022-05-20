// Referans Tipli:
let renkler = ['kırmızı', 'yesil'];
let yeniRenkler = renkler;

renkler.push('mavi');

console.log(renkler, yeniRenkler);

let ogrenci = {
    ad : 'hazal',
    yas : 24,
}

let yeniOgrenci = ogrenci;

ogrenci.yas = 25;
console.log(ogrenci, yeniOgrenci);
