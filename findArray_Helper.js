const persons = [
    { id: 1, ad: 'hazel1' },
    { id: 11, ad: 'hazel11' },
    { id: 111, ad: 'hazel111' },
    { id: 1111, ad: 'hazel1111' },
    { id: 11111, ad: 'hazel11111' },
    { id: 2, ad: 'hazel2' },
    { id: 22, ad: 'hazel22' },
    { id: 222, ad: 'hazel222' },
    { id: 2222, ad: 'hazel2222' },
    { id: 22222, ad: 'hazel22222' },
]

function kendiFindMetodum (persons, aranilanDeger) {
    let bulunanEleman = undefined;
    for(let i = 0; i < persons.length; i++) {
        if(aranilanDeger(persons[i])) {
            return persons[i];
        };
    }
    return bulunanEleman;

}

const sonuc = kendiFindMetodum(persons, function(person) {
    return person.id === 111;
})

console.log(sonuc);