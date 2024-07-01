console.log('\n MULTIPLE ARGUMENTS')
// Multiple arguments
let addOne = function (a, b, c) {
  return a + b + c
}

let resultOne = addOne(10, 1, 5)
console.log(resultOne)


console.log('\n DEFAULT ARGUMENTS')
// Default arguments

/*
creating a Multiplayer video game and there's a leader board, so all of the player
ranked from the people with the most points to the least
-- need use's name and their score
-- user haven't played a game yet --> Default value

= By Default if we do not provide an argument value,  nothing is going to show up


**** let getScoreText = function (name, score = 0) ***
*/

let getScoreText1 = function (name = 'Anonymous', score = 0) {
  console.log(name)
  console.log(score)
}

getScoreText1('Shan', 100)
getScoreText1(85)


//-----------------------------------------------------------

let getScoreTextOne = function (name = 'Annonymous', score = 0) {
  return 'name: ' +name+ ' - Score: ' +score
}

let scoreTextOne = getScoreTextOne('Shan')
console.log(scoreTextOne)



//========================= CHALLENGE AREA ============================
console.log('\n CHALLENGE AREA')

/*
Go to restaurant and we spend a hundred bucks and
we want to tip twenty percent
- that would be twenty dollar tip
creating a function that figures that out for you
*/


// total, tipPercent

let getTipOne = function (total, tipPercent = .2) {
  return total * tipPercent
}

let tipOne = getTipOne(100, .25)
console.log(tip)
















//================================================================================================
//================================================================================================







// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log('Result: --> ' + result)

// Deafult arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log('Score Text: --> ' + scoreText)

// Challenge area
let getTip = function (total, tipPercent = .2) {
    return total * tipPercent
}

let tip = getTip(40, .25)
console.log('Tip: --> ' + tip)


