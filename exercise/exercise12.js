const names = ['hazal', 'derya', 'ayşe', 'niran'];

const numbers1 = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const students = [
    {id: 12, name: 'hazal', age: '23'},
    {id: 22, name: 'tugce', age: '15'},
    {id: 13, name: 'derya', age: '33'},
    {id: 92, name: 'ferda', age: '19'},
    {id: 15, name: 'sila', age: '75'},
    {id: 44, name: 'ozge', age: '3'},
]
/*
Aşağıda belirtilen dizi işlemlerini gerçekleştirin.
-- 1 -- string diziyi a-z sıralama
-- 2 -- string diziyi z-a sıralama
-- 3 -- sayilari küçükten-büyüğe büyükten-küçüğe sıralama
-- 4 -- nesneleri sıralama
-- 5 -- arrayleri kopyalamak
*/

//-- 1 -- string diziyi a-z sıralama
const aToZArray = names.sort();
console.log(aToZArray);
console.log(names);

// -- 2 -- string diziyi z-a sıralama
const zToAArray = names.reverse();
console.log(zToAArray);

const zToAArray2 = names.sort().reverse();
console.log(zToAArray2);


//-- 3 -- sayilari küçükten-büyüğe büyükten-küçüğe sıralama
const inline = numbers1.sort(function (a, b) {
    return a - b;
})
console.log(inline);

const inline1 = numbers1.sort((a, b) => b - a);
console.log(inline1);

//-- 4 -- nesneleri sıralama
students.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    else if (a.name > b.name) {
        return 1;
    }
    else {
        return 0;
    }
})
console.log(students);


// -- 5 -- arrayleri kopyalamak
let copy = [];
copy = Array.from(names);
copy.sort();
console.log(names);
console.log(copy);
//spread operator ile array kopyalamak
let copy1 = [];
copy1 = [...names];
console.log(copy1);

// Fonksiyonda dinamik bir parametre barındıran, dizinin elemanlarının toplamını bulan programı yazınız.
const name1 = 'hazal yılmaz';
let letters = name1.split('');

letters = [...name1];
console.log(letters);

function numbersAdd(...parameter) {
    let total = 0;
    for (let s of parameter) {
        total += s;
    }
    console.log(total);
}

numbersAdd(1, 4, 6);




console.log(" **************** ");