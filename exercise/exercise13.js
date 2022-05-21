/*
sehirler isimler bir dizi oluşturun
her dizi elemanı şehirler ile ilgili bilgi içermelidir.
bu bilgiler şehrin adı, plaka numarası ve şehrin komşuları olabilir

diziyi oluşturduktan sonra şehir adlarına göre z-a sıralayıp ekrana yazdırın.
*/

const citys = [
    {cityName: 'Antalya', plate: 07, neighbors: 'Konya, Isparta'},
    {cityName: 'Kocaeli', plate: 41, neighbors: 'İstanbul, Sakarya'},
    {cityName: 'Aksaray', plate: 68, neighbors: 'Ankara, Nevşehir'},
]

citys.sort(function (a, b) {
    if (a.cityName < b.cityName) {
        return 1;
    }
    else if (a.cityName > b.cityName) {
        return -1;
    }
    else {
        return 0;
    }
})
console.log(citys);






console.log("***********************");
