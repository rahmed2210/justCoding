// Multiple  argument
console.log(' \n\r Multiple Argument')

let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)



// default argument
console.log(' \n\r Default Argument')

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} -  Score: ${score}`
//     OR ^
    //return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText('Rubal')
console.log(scoreText)

// Challenge Area
console.log(' \n\r Challenge Area')

// total, tipPercent .2

let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
}

let totalTip = getTip(100)
console.log(totalTip)
console.log('totalTip: $' + totalTip)

let totaltip1 = getTip(100, .25)
console.log(totaltip1)
console.log('totalTip: $' + totaltip1)
/*     OR            */
console.log(`TotalTip: $${totaltip1}`)





//========================================================================
//========================================================================



// Template String
let name = 'Jen'
let age = 43
console.log(`Hey, my name is ${name}! i am ${age} years old`)



// Challenge Area
console.log(' \n\r Challenge Area')

// a 25% on $40 would be $10

let getTipArea = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let totaltipArea = getTipArea(40, .25)
console.log(totaltipArea)
// console.log(`TotalTip for dinner tonight is $${totaltipArea}`)
let totaltipArea1 = getTipArea(60)
console.log(`totaltipArea:  ${totaltipArea1}`)


//-------------------------------------------------------------------------------
console.log(' \n\r Example Two')

let getTipAreaTwo = function (total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let tipTwo = getTipAreaTwo(60)
console.log(`Example Two:  ${tipTwo}`)
console.log(tipTwo)
