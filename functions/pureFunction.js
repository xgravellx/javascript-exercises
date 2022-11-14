/*
    A Pure Function is a function (a block of code) 
    that always returns the same result if the same 
    arguments are passed. It does not depend on any 
    state or data change during a program’s execution. 
    Rather, it only depends on its input arguments
*/ 

function calculateGST (productPrice) {
    console.log(productPrice * 0.05);
}
calculateGST(10);


// Is not a pure function. Because has dependencies other than input.
var tax = 20;
function calculateGSTa( productPrice ) {
    console.log(productPrice * (tax / 100) + productPrice);
}
calculateGSTa(100)