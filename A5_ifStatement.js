let temp = 80
let isFreezing = temp <= 32

if (isFreezing) {
    console.log('It is freezing outside')
}


let temp1 = 80

if (temp1 <= 32) {
    console.log('It is freezing outside')
}

if (temp1 >= 110) {
    console.log('it is way to hot outside')
    console.log('Testing 1 2 3')
}



// ===============================================================================================

/* This is the bare bones structure if statement
if () {
    
}

 */


/* The condition
if (the condition goes here in parentheses) {
    
}

 */


/* The code block
if () {
    the code to run goes in the curly braces
}

 */

// ===============================================================================================

// Challenge
console.log('<<<<<<<<<<<<<<<<<<< CHALLENGE AREA>>>>>>>>>>>>>>>>>>>>>>')

// if 7 or under print message about child pricing
// if 65 or older print message about senior discount
console.log('Example 0')
let age = 65

if (age <= 7) {
    console.log('You qualify for child discount')
} 

if (age >= 65) {
    console.log('You qualify for senior discount')
}

// =========================================================================
console.log('Example 1')
let age1 = 64

if (age1 <= 7) {
    console.log('You qualify for child discount')
} 

if (age1 >= 65) {
    console.log('You qualify for senior discount')
}


// =========================================================================
console.log('Example 2')
let age2 = 6

if (age2 <= 7) {
    console.log('You qualify for child discount')
} 

if (age2 >= 65) {
    console.log('You qualify for senior discount')
}