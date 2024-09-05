// Global Scope (convertFahrenheitToCelsius, tempOne, tempTwo)
 // Local Scope (fahrenheit, celsius)
  // Local Scope (isFreezing)

  let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius > 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelsius()
let tempTwo = convertFahrenheitToCelsius()

console.log(tempOne)
console.log(tempTwo)


// Functions create a local scope, much like if statements do and function 
//    arguments are bound to that newly created local scope