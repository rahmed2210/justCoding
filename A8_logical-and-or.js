
// Logical AND(&&) operator  --> true is both side are true, False otherwise
let temp = 65
if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out')
}


// Logical OR(||) operator  --> true if at least one side is true
let temp1 = 150
if (temp1 <= 0 || temp1 >= 120) {
  console.log('Do not go outside')
}


let temp3 = 55

if (temp3 >= 60 && temp3 <= 90) {
  console.log('It is pretty nice out')
} else if (temp3 <= 0 || temp3 >= 120) {
  console.log('Do NOT GO OUTSIDE')
} else {
  console.log('What evaaa')
}


/*else if (temp3 <= 0 || temp3 => 120) {
  console.log('Do not go outside')
} else {
  console.log('Eh, Do what you want')
} */




// --------------- CHALLENGE AREA  ------------------

let isGuestOneVegan = true
let isGuestTwoVegan = false

// are both vegan --> only offer up vegan dishes
// At least one vegan --> make sure to offer up some vegan options
// Else, offer up anything on the menu
// ex 1
if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Make sure to offer up some vegan options.')
} else {
  console.log('Offer up anything on the menu')
}


// example Two
let isGuestOneVegan2 = true
let isGuestTwoVegan2 = true

if (isGuestOneVegan2 && isGuestTwoVegan2) {
  console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan2 || isGuestTwoVegan2) {
  console.log('Make sure to offer up some vegan options.')
} else {
  console.log('Offer up anything on the menu')
}


// example Three
let isGuestOneVegan3 = false
let isGuestTwoVegan3 = false

if (isGuestOneVegan3 && isGuestTwoVegan3) {
  console.log('Only offer up vegan dishes')
} else if (isGuestOneVegan3 || isGuestTwoVegan3) {
  console.log('Make sure to offer up some vegan options.')
} else {
  console.log('Offer up anything on the menu')
}








// ---------------------------- NOTES --------------------------------------
//--------------------------------------------------------------------------


let exTemp = 55

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Operator - True if at least one side is true. False otherwise

if (exTemp >= 60 && exTemp <= 90) {
    console.log('It is pretty nice out')
} else if (exTemp <= 0 || exTemp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Do what you want')
}




// ----------------------------  Challenge area --------------------------------------
//------------------------------------------------------------------------------------

let exIsGuestOneVegan = false
let exIsGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes.
// At least one vegan? Make sure to offer up some vegan options.
// Else, Offer up anything on the menu

if (exIsGuestOneVegan && exIsGuestTwoVegan) {
    console.log('Only offer up vegan dishes.')
} else if (exIsGuestOneVegan || exIsGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options.')
} else {
    console.log('Offer up anything on the menu')
}