let num = 103.941

console.log(num.toFixed(1)) // 103.9
console.log(num.toFixed(2)) // 103.94

console.log(Math.round(num)) //  Round method --> rounding up the numbers
console.log(Math.floor(num)) // Floor method --> This force us to round DOWN  to the nearest integer
console.log(Math.ceil(num))  // Ceil method --> this force us to round UP even if we were at a number

// Math.random()
let min = 0
let max = 30
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)


//================== CHALLENGE AREA ===================================
console.log('\r\n <==== CHALLENGE AREA ====> \r\n')

// range 1 - 5

let makeGuess = function (guess) {
    let min = 0
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum
}
console.log(makeGuess(1))