let hazal = {
    adi : 'Hazal',
    soyadi : 'Yilmaz',
    dogumYili : 1998,
    evliMi : false,
    sevdigiRenk : 'siyah',
    yasiHesapla : function(dogumyili) {
        return 2022 - this.dogumYili;
    }
};
console.log(hazal.adi);
console.log(hazal['dogumYili']);

console.log(hazal.yasiHesapla(1998));