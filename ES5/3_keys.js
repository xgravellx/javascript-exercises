// Bir nesneye ait özellik anahtarlarını (enumarable olanları) array şeklinde döndürür

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.keys(object1));
// [ 'a', 'b', 'c' ]