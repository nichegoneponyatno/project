"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
     num = 10;
}

showFirstMessage('hello');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 6));
console.log(calc(10, 6));
console.log(calc(13, 25));


const logger = function() {
    console.log('hello');
};

logger();

const calc = (a, b) => a + b;
