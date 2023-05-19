const total_number = 100
let list = document.getElementById ('list')



let tre = ' '
let cinque = ' '
let quindici = ' '


for (let i = 1; i <= total_number; i++){
    // list.innerHTML += `<li> ${i} </li>` 
    
    if ((i % 3 === 0) && (i % 5 !== 0)) {
        tre = 'Fizz'
        console.log(tre)
        let new_number= document.createElement('li')
        new_number.innerText = tre
        list.append (new_number)
        // list.innerHTML += `<li> ${tre} </li>`
      
    }

    else if ((i % 3 !== 0) && (i % 5 === 0)) {
        cinque = 'Buzz'
        // list.innerHTML += `<li> ${cinque} </li>`
        console.log(cinque)
        let new_number= document.createElement('li')
        new_number.innerText = cinque
        list.append (new_number)

    } else {
        if((i % 3 === 0) && (i % 5 === 0)) {
            quindici = 'FizzBuzz'
            // list.innerHTML += `<li> ${quindici} </li>`
            console.log(quindici)
            let new_number= document.createElement('li')
            new_number.innerText = quindici
            list.append (new_number)
        }

        else {
            console.log(i)
            
            let new_number= document.createElement('li')
            new_number.innerText = i
            list.append (new_number)
        }
    }
     
    
}


