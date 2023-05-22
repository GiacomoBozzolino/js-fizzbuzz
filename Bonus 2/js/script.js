"use strict";

const total_number = 100


let tre = ' ';
let cinque = ' ';
let quindici = ' ';
let board='';
let number;



const output = document. getElementById('list')
// INIZO CICLO FOR
board +="<div class='flex'>";

    for (let i = 1; i <= total_number; i++){
            
        // PRIMA CONDIZIONE
        if ((i % 3 === 0) && (i % 5 === 0)){
            quindici = 'fizzbuzz';
            board +=`<div class="square ${quindici} shadow"> FizzBuzz</div>`;
            console.log(quindici);  
        }
        // SECONDA CONDIZIONE
        else if (i % 3 === 0) {
            tre = 'fizz';
            board +=`<div class="square ${tre} shadow ">Fizz</div>`;
            console.log(tre);

        // TERZA CONDIZIONE
        } else {
            if (i % 5 === 0){
                cinque = 'buzz';
                console.log(cinque);
                board +=`<div class="square ${cinque} shadow">Buzz</div>`;
            }
            // QUARTA CONDIZIONE
            else {
                let new_number = i;
                number = 'i';
                console.log(new_number);
                board +=`<div class="square ${number} shadow">${new_number}</div>`;
            }
        }
    }
    
board +='</div>';

output.innerHTML += board;
// FINE CICLO FOR




