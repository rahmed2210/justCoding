console.log('\r\n GreetUser >>>>>>>')

// Function - input (argument), code, output (return value)


let greetUser = function () {
    console.log('Welcome to Functions lesson')    
}

greetUser()
greetUser()
greetUser()



// ==============================================================================
console.log('\r\n Square >>>>>>>')

let square = function (num) {
    let result = num * num
    return result
}

let firstValue = square(3)
let secondValue = square(5)
let thirdValue = square(7)

console.log(firstValue)
console.log(secondValue)
console.log(thirdValue)



// ==============================================================================

// Challenge
console.log('\r\n <<<<<<<<<<<<<<<<<<< CHALLENGE AREA>>>>>>>>>>>>>>>>>>>>>>')

// convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}


// call a couple of times (32 --> 0) (68 --> 20)

let temp1 = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(68)

console.log(temp1)
console.log(temp2)






/*
let fahrenheit = 50 

 // calculate celsius and store in celsius variable
let celsius = (fahrenheit - 32) * 5 / 9

 // calculate kelvin value ans store in variable
let kelvin = (fahrenheit + 459.67) * 5 / 9

 // print that value

console.log('Celsius: ' + celsius)
console.log('Kelvin: ' + kelvin)
*/