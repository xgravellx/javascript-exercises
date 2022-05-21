const plants = [
    {name: 'üzüm', type: 'fruit'},
    {name: 'çilek', type: 'fruit'},
    {name: 'muz', type: 'fruit'},
    {name: 'ıspanak', type: 'vegetable'},
    {name: 'kereviz', type: 'vegetable'},
]

function fruitsFind(){
    const geciciArray = [];
    for(let i = 0; i < plants.length; i++) {
        if (plants[i].type === 'fruit') {
            geciciArray.push(plants[i]);
        }
    }
    return geciciArray;
}

function vegetablesFind(){
    const geciciArray = [];
    for (let i = 0; i < plants.length; i++) {
        if(plants[i].type === 'vegetable') {
            geciciArray.push(plants[i]);
        }
    }
    return geciciArray;
}

console.log(fruitsFind());
console.log(vegetablesFind());


// filter metodu ile uygulamak
const fruits = plants.filter(function (plant) {
    return plant.type === 'fruit';
});

const vegetables = plants.filter(function (plant) {
    return plant.type === 'vegetable';
})

console.log(fruits);
console.log(vegetables);