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
    return 'Name: ' + name + ' - Score: ' + score
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