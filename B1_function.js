// function - input -->(arguments), code -->(), output -->(return value)

let greetUser = function () {
    console.log('Welcome user!')
  }
  
  greetUser()
  greetUser()
  greetUser()
  
  
  //-------ex 2---------------------------------------
  let square = function (num) {
    console.log(num)
  }
  
  square('square1:--> ' + 3)
  square('square2:--> ' + 10)
  
  
  //-------ex 3---------------------------------------
  let square1 = function (num1) {
    let result = num1 * num1
    return result
  }
  
  let value = square1(3)
  let otherValue = square1(10)
  console.log('VALUE:--> ' + value)
  console.log('OTHER VALUE:--> ' + otherValue)
  
  
  //-------ex 4---------------------------------------
  
  
  let ahmed = function (boys) {
    let result = boys * boys
    return result
  }
  
  let kid1 = ahmed(12)
  let kid2 = ahmed(7)
  console.log(kid1)
  console.log(kid2)
  
  
  //-------CHALLENGE AREA---------------------------------------
  
  // convertFahrenheitToCelsius
  // call a couple of time (32 --> 0) ( 68F -- 20C)
  // print the converted values
  
  let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
  }
  
  let tempOne = convertFahrenheitToCelsius(32)
  let tempTwo = convertFahrenheitToCelsius(68)
  
  console.log('tempOne:-->  ' + tempOne)
  console.log('tempTwo:-->  ' + tempTwo)
  



//==============================================================================================
//==============================================================================================


// Function - input (argument), code, output (return value)

let greetUser1 = function () {
    console.log('Welcome user!')
}

greetUser1()
greetUser1()
greetUser1()

let square2 = function (num) {
    let result = num * num
    return result
}

let value1 = square2(3)
let otherValue1 = square2(10)

console.log(value)
console.log(otherValue)

// Challenge Area

let convertFahrenheitToCelsius2 = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOneC = convertFahrenheitToCelsius2(32)
let tempTwoC = convertFahrenheitToCelsius2(68)

console.log(tempOneC)
console.log(tempTwoC)



// ====================================================================================
//=====================================================================================


// Challenge Area 2

let convertFahrenheitToCelsius1 = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOne1 = convertFahrenheitToCelsius(32)
let tempTwo1 = convertFahrenheitToCelsius(68)

console.log(tempOne1)
console.log(tempTwo1)