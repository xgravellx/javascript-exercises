const object1 = {};

Object.defineProperty(object1, 'props', {
    value: 1,
    writable: false,
    enumerable: true
})

console.log(object1.props);