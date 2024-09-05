let num = 231.522

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// Generating random numbers
console.log(' \r\n Random Number')

let randomNum = Math.random()
console.log(randomNum)


// Generating random numbers in a specifics range
console.log(' \r\n Specifics Range Number')
let min = 10
let max = 20
let rangeNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(rangeNum)


// Challenge Area
console.log('  =========  CHALLENGE AREA  =========  ')

// range 1 - 5  --> true if correct  - false --> if not correct

let makeGuess = function (guess) {
    let min = 1 
    let max = 5
    let rangeNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}


console.log(makeGuess(5))