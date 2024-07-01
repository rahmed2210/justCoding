//=============================================================================================
// undefined for variable
                console.log('\n undefined for variable -->')


let nameOne

name = 'Jen'
if (nameOne === undefined) {
  console.log('Please provide a name')
} else {
  console.log(nameOne)
}


//=============================================================================================
// undefined for function arguments
                console.log(' \n undefined for function arguments -->')


let squareOne = function (num) {
  console.log(num)
}

squareOne()

/*
When an arguments isn't provide, but it's named in the function
definition, undefined is assigned as its value.
*/


//=============================================================================================
// function return value
                console.log('\n FUNCTION RETURN VALUE -->')


// undefined for function arguments
// undefined as function RETURN default value

let squareTwo = function (numOne) {
  console.log(numOne)
}

let resultOne = squareTwo()
console.log(resultOne)

/*
if we try to do something with the return value from a function
but the function doesn't return anything. if i were to return
something, we would get that value instead. if nothing is return,
that is going to be assigned undefined.
*/



//=============================================================================================
console.log('\n NULL -->')
// Null as assigned value

let ageOne = 27

ageOne = null
console.log(ageOne)























//==============================================================================================
//==============================================================================================




// Undefined for variable
let name

name = 'Jen'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// Undefined for function arguments
// Undefined as function return default value
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result)

// Null as assined value
let age = 27

age = null

console.log(age)



//==================================================================

// Undefined for variable
let name1

name1 = 'Jen'

if (name1 === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name1)
}
