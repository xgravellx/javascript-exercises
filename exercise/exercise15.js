/*
Öğrencileri tutan bir dizi oluşturun 
Her öğrenci nesnesine ad, soyad, ve id değerleri olmalı
id number çift olan öğrencilerin adı ve soyadını birleştirilmiş halde tutan diziyi a-z ye sıralı şekilde yazdırın

*/

const students0 = [
    {ad: 'hazal', soyad: 'yilmaz', id: '1'},
    {ad: 'derya', soyad: 'yilmaz', id: '14'},
    {ad: 'ferda', soyad: 'çalış', id: '12'},
    {ad: 'özge', soyad: 'çalış', id: '5'},
    {ad: 'sıla', soyad: 'çalış', id: '3'},
]

const idDbl = students0.filter(function (std) {
    return std.id % 2 === 0;
});

const name9 = idDbl.map(function (std) {
    return std.ad + " " + std.soyad;
});

name9.sort();

console.log(name9);
