const total_number = 100
// let list = document.getElementById ('list')

let tre = ' ';
let cinque = ' ';
let quindici = ' ';
let board='';
let number;
const size= 10


const output = document. getElementById('list')
// INIZO CICLO FOR



    board +="<div class='flex'>"

   

        for (let i = 1; i <= total_number; i++){
                // let new_number= document.createElement('div') 
                // list.append (new_number)
            // PRIMA CONDIZIONE
            if ((i % 3 === 0) && (i % 5 !== 0)) {
                tre = 'fizz'
                board +=`<div class="square ${tre}"> Fizz</div>`
                console.log(tre)
               
                // new_number.innerText = tre  
            }
            // SECONDA CONDIZIONE
            else if ((i % 3 !== 0) && (i % 5 === 0)) {
                cinque = 'buzz'
                console.log(cinque)
                // new_number.innerText = cinque
                board +=`<div class="square ${cinque}">Buzz</div>`
                
            // TERZA CONDIZIONE
            } else {
                if((i % 3 === 0) && (i % 5 === 0)) {
                    quindici = 'fizzbuzz'
                    console.log(quindici)
                    // new_number.innerText = quindici 
                    board +=`<div class="square ${quindici}">FizzBuzz</div>`
                }
                // QUARTA CONDIZIONE
                else {
                    console.log(i)
                    // new_number.innerText = i 
                    number = 'i'
                    board +=`<div class="square ${number}"></div>`
                }
            }
        }
    

    board +='</div>'


output.innerHTML += board
// FINE CICLO FOR




// const size= 12;
// let odd = '';
// let even = '';
// let board= '';

// const