"use strict";

const total_number = 100;

let tre = ' ';
let cinque = ' ';
let quindici = ' ';


for (let i = 1; i <= total_number; i++){
    if ((i % 3 === 0) && (i % 5 !== 0)) {
        tre = 'Fizz';
        console.log(tre);
    }

    else if ((i % 3 !== 0) && (i % 5 === 0)) {
        cinque = 'Buzz';
        console.log(cinque);

    } else {
        if((i % 3 === 0) && (i % 5 === 0)) {
            quindici = 'FizzBuzz';
            console.log(quindici);
        }

        else {
            console.log(i);
        }
    };   
};