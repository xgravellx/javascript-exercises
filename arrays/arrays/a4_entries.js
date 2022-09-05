const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();
console.log(iterator1.next().value); // [ 0, 'a' ]
console.log(iterator1.next().value); // [ 1, 'b' ]
console.log(iterator1.next().value); // [ 2, 'c' ]


const arr = ["a", "b", "c"];
for(const [index, elemet] of arr.entries()) {
    console.log(index, elemet);
}
// 0 'a'
// 1 'b'
// 2 'c'

const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

