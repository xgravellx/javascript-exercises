/*
constuctor functions
*/

function x_student(name, age, singleOrMarried, school) {
    this.isim = name;
    this.yas = age;
    this.medeniHal = singleOrMarried;
    this.okul = school;
    this.infoDisplay = function () {
        return `İsmim ${this.isim} yaşım: ${this.yas} Medeni Hal: ${this.medeniHal} Okul: ${this.okul}`;
    }
}
/*
new kullanınca,
1. yeni obje oluşturur
2. return yazmak zorunda kalmayız
3. this kelimesini o an oluşturulan nesneye bağlar.

*/
const xx_hazal = new x_student("hazal", 23, false, "asü");
console.log(xx_hazal);
console.log(xx_hazal.constructor);

/*
jsdeki tüm objeler onu oluşturan constructor fonk erişebilir
js ile beraber gelen built in contructor function vardır
diziler ve fonk aslında objecttir, ispat?
*/

