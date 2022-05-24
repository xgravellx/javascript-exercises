/*
factory function ları kullanarak obj tanımlayın.
*/

const x_hazal = createOgrenci('hazal', 23, false, 'omer halisdemir');
const x_niran = createOgrenci('niran', 20, false, 'kocaeli');

function createOrenci(name, age, singleOrMarried, school) {
    return {
        isim: name,
        yas: age,
        medeniDurum: singleOrMarried,
        okul: school,
    };
}

console.log(x_hazal);
console.log(x_niran);