const nbr1 = [1, 2, 3, 4, 5, 6];

const new_Nbr = nbr1.map(function(sayi) {
    return sayi * 2;
});

console.log(nbr1);
console.log(new_Nbr);

const persons = [
    { adi: 'hazal', soyadi: 30},
    { adi: 'yilmaz', soyadi: 40},
    { adi: 'çağrı', soyadi: 50},
]
const newPersons = persons.map((person) => person.adi + " " + person.soyadi);
console.log(newPersons);

// kendi map yapımız
