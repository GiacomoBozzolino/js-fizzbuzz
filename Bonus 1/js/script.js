const total_number = 100
let list = document.getElementById ('list')

let tre = ' '
let cinque = ' '
let quindici = ' '

// INIZO CICLO FOR
for (let i = 1; i <= total_number; i++){
        let new_number= document.createElement('li') 
        list.append (new_number)
    // PRIMA CONDIZIONE
    if ((i % 3 === 0) && (i % 5 !== 0)) {
        tre = 'Fizz'
        console.log(tre)
        new_number.innerText = tre  
    }
    // SECONDA CONDIZIONE
    else if ((i % 3 !== 0) && (i % 5 === 0)) {
        cinque = 'Buzz'
        console.log(cinque)
        new_number.innerText = cinque
        
    // TERZA CONDIZIONE
    } else {
        if((i % 3 === 0) && (i % 5 === 0)) {
            quindici = 'FizzBuzz'
            console.log(quindici)
            new_number.innerText = quindici 
        }
        // QUARTA CONDIZIONE
        else {
            console.log(i)
            new_number.innerText = i 
        }
    }
  
}
// FINE CICLO FOR

