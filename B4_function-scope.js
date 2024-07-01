// Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)
    // Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log('Temp One: --> ' + tempOne)
console.log('Temp Two: --> ' + tempTwo)

/*
  function create a local scope, much like if statement do and
  function arguments are bound to that newly created local scope
*/


// Challenge area
// a 25% on $40 would be $10



console.log('Example One')

let getTipOne = function (total, tipPercent = .2) {
  return total * tipPercent
}

let tipOne = getTipOne(40, .25)
console.log(tipOne)



//---------------------------------------------------------------------------------------------------------------------------------------------
console.log('\r\n Example Two')

console.log('Example 1')
let getTip1 = function (total, tipPercent = .2) {
  return total * tipPercent
}

let tipOne1 = getTip1(40, .25)
console.log(tipOne1)



//---------------------------------------------------------------------------------------------------------------------------------------------
console.log('\r\n Example Three')
let getTipTwo = function (totalTwo, tipPercentTwo = .25) {
  let percent = tipPercentTwo * 100
  let tipTwo = totalTwo * tipPercentTwo
  return `A ${tipPercentTwo}% tip on $${totalTwo} would be $${tipTwo}`
}

let tipTwo = getTipTwo(70)
console.log(tipTwo)


// ====> different way to write code
console.log('\r\n Example 3')

let getTipThree = function (totalThree, tipPercentThree = .25) {
  return `A ${tipPercentThree * 100}% tipThree on $${totalThree * tipPercentThree}`
}

let tipThree = getTipThree(70)
console.log(tipThree)