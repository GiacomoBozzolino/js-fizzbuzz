const total_number = 100
let fizz


console.log(total_number)
for (let i = 1; i <= total_number; i++){
    if ((i % 3 === 0) && (i % 5 !== 0)) {
        console.log(`${i} Fizz`)
    }

    else if ((i % 3 !== 0) && (i % 5 === 0)) {
        console.log(`${i} BUzz`)

    }

    // console.log(i)
}