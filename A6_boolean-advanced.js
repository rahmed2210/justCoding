console.log('Example 0')
let isAccountLocked = true

if (isAccountLocked) {
    console.log('Is account locked')
} else {
    console.log('Welcome!')
}


console.log('Example 1')
let isAccountLocked1 = false

if (isAccountLocked1) {
    console.log('Is account locked')
} else {
    console.log('Welcome!')
}



// else if clause
console.log('Example 2')
let isAccountLocked2 = false
let userRole2 = 'admin'

if (isAccountLocked2) {
    console.log('Is account locked')
} else if (userRole2 === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome!')
}


console.log('Example 3')
let isAccountLocked3 = false
let userRole3 = 'user'

if (isAccountLocked2) {
    console.log('Is account locked')
} else if (userRole3 === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome!')
}



// ==============================================================================
/* 
if (true) {
    // this cold always going to run
} else if (true --> put in our other condition ) {

} else {
    // this code will never run because of the condition specified up above
}
*/
// ==============================================================================






// Challenge
console.log('<<<<<<<<<<<<<<<<<<< CHALLENGE AREA>>>>>>>>>>>>>>>>>>>>>>')



// it is freezing outside!
// it is hot outside!
// Go for it. It is pretty nice out


console.log('\r\n Example 0')

let temp = 45
if (temp <= 34) {
    console.log('it is freezing outside!')
} else if (temp >= 110) {
    console.log('it is hot outside!')
} else {
    console.log('Go for it. It is pretty nice out')
}


// ==============================================================================
console.log('\r\n Example 1')

let temp1 = 450
if (temp1 <= 34) {
    console.log('it is freezing outside!')
} else if (temp1 >= 110) {
    console.log('it is hot outside!')
} else {
    console.log('Go for it. It is pretty nice out')
}


// ==============================================================================
console.log('\r\n Example 2')


let temp2 = 10
if (temp2 <= 34) {
    console.log('it is freezing outside!')
} else if (temp2 >= 110) {
    console.log('it is hot outside!')
} else {
    console.log('Go for it. It is pretty nice out')
}