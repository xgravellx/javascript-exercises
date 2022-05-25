/*
Protype Property
JS protype miras modelini kullanılır.
Her constructor function/class aynı kurucu fonksiyonla oluşturulan instance ların ortak olarak kullanabilecekleri prototype iaimli propertye sahiptir.
Prototype property de bir nesne döndürür.
*/
students_x.prototype.school = 'akev uni';
students_x.prototype.info_show(function () {
    return `ismim ${this.isim} Yaşım ${this.yas} okul ${this.school}`;
})


function students_x(name, age) {
    this.isim = name;
    this.yas = age;
}

const ozge1= new students_x('özge', 21);
const sila1 = new students_x('sıla', 18);

console.log(ozge1.info_show());
console.log(sila1.info_show());

