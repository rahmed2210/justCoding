
console.log('\r\n Example: Logical AND operator')
// Logical AND Operator --> TRUE if both side are true. False otherwise

let temp = 65
// temp Greater than 60 AND temp Less then 90
if (temp >= 60 &&  temp <= 90) {
    console.log('It is pretty nice out')
}


// ==============================================================================
console.log('\r\n Example: Logical OR operator')
// Logical OR operator --> TRUE if at least one side is true. False otherwise

let temp1 = 150
if (temp1 <= 0 || temp1 >= 120) {
    console.log('Do not go outside')
}


// ==============================================================================
console.log('\r\n Example: Logical AND-OR operator with (if else if else) statement')
// if else if else statement
let temp2 = 55
if (temp2 >= 60 && temp2 <= 90) {
    console.log('It is pretty nice out')
} else if (temp2 <= 0 || temp2 >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}



// ==============================================================================
// Challenge
console.log('\r\n <<<<<<<<<<<<<<<<<<< CHALLENGE AREA>>>>>>>>>>>>>>>>>>>>>>')


console.log('\r\n Example 0')
// restaurant reservation system

let isGuestOneVegan = true
let isGuestTwoVegan = false

// are both vegan? --> only offer up vegan dishes
// least one vegan? --> make sure to offer some vegan options
// else, offer up anything on the menu

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer only vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('offer some vegan options')
} else {
    console.log('Offer anything on the menu')
}


// ==============================================================================
console.log('\r\n Example 1')


let isGuestOneVegan1 = true
let isGuestTwoVegan1 = true

if (isGuestOneVegan1 && isGuestTwoVegan1) {
    console.log('Offer only vegan dishes')
} else if (isGuestOneVegan1 || isGuestTwoVegan1) {
    console.log('offer some vegan options')
} else {
    console.log('Offer anything on the menu')
}



// ==============================================================================
console.log('\r\n Example 2')


let isGuestOneVegan2 = false
let isGuestTwoVegan2 = false

if (isGuestOneVegan2 && isGuestTwoVegan2) {
    console.log('Offer only vegan dishes')
} else if (isGuestOneVegan2 || isGuestTwoVegan2) {
    console.log('make sure to offer some vegan options')
} else {
    console.log('Offer anything on the menu')
}
